#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const CAT_LABELS = {
  commercial: { en: 'Commercial', zh: '商业片' },
  music: { en: 'Music Video', zh: 'MV' },
  original: { en: 'Original', zh: '原创' },
  game: { en: 'Game', zh: '游戏' },
  mg: { en: 'Motion Graphic', zh: '动态图形' }
};

function parseArgs(argv) {
  const args = { works: 'works.json', data: 'data.js' };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--works' && argv[i + 1]) args.works = argv[++i];
    else if (a === '--data' && argv[i + 1]) args.data = argv[++i];
    else if (a === '--help' || a === '-h') args.help = true;
  }
  return args;
}

function usage() {
  console.log('Usage: node scripts/sync-works-to-data.js [--works works.json] [--data data.js]');
}

function slugify(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[×—]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function parseVimeo(input) {
  if (!input) return '';
  const raw = String(input).trim();
  if (!raw) return '';
  if (/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(raw)) return raw;
  const m = raw.match(/vimeo\.com\/(\d+)/);
  if (m) return `https://player.vimeo.com/video/${m[1]}`;
  if (/^\d+$/.test(raw)) return `https://player.vimeo.com/video/${raw}`;
  return raw;
}

function readWorks(file) {
  const text = fs.readFileSync(file, 'utf8');
  const parsed = JSON.parse(text);
  if (Array.isArray(parsed)) return parsed;
  if (parsed && Array.isArray(parsed.works)) return parsed.works;
  throw new Error('works.json 格式错误：需要是数组，或对象包含 works 数组');
}

function normalizeWorks(items) {
  return items.map((w, i) => {
    const title = String((w && w.title) || '').trim();
    const id = String((w && w.id) || '').trim() || slugify(title) || `work-${i + 1}`;
    const cat = String((w && w.cat) || 'commercial').trim() || 'commercial';
    const catLabel = (w && w.catLabel) || CAT_LABELS[cat] || { en: cat, zh: cat };
    const thumb = String((w && w.thumb) || '').trim() || `images/works/${id}.jpg`;
    return {
      id,
      title,
      cat,
      catLabel,
      duration: String((w && w.duration) || '').trim(),
      client: String((w && w.client) || '').trim(),
      year: String((w && w.year) || '').trim(),
      vimeo: parseVimeo((w && w.vimeo) || ''),
      thumb,
      aspect: String((w && w.aspect) || 'wide').trim() || 'wide'
    };
  });
}

function q(str) {
  return JSON.stringify(String(str || ''));
}

function formatWorksArray(works) {
  const lines = [];
  lines.push('  works: [');
  for (let i = 0; i < works.length; i++) {
    const w = works[i];
    const comma = i === works.length - 1 ? '' : ',';
    lines.push(
      `    { id:${q(w.id)}, title:${q(w.title)}, cat:${q(w.cat)}, catLabel:{en:${q(w.catLabel.en)},zh:${q(w.catLabel.zh)}}, duration:${q(w.duration)}, client:${q(w.client)}, year:${q(w.year)}, vimeo:${q(w.vimeo)}, thumb:${q(w.thumb)}, aspect:${q(w.aspect)} }${comma}`
    );
  }
  lines.push('  ],');
  return lines.join('\n');
}

function findWorksArrayBounds(dataText) {
  const worksKeyIndex = dataText.indexOf('works:');
  if (worksKeyIndex === -1) throw new Error('data.js 中未找到 works 字段');

  const startBracket = dataText.indexOf('[', worksKeyIndex);
  if (startBracket === -1) throw new Error('data.js works 字段缺少数组起始 [');

  let i = startBracket;
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (; i < dataText.length; i++) {
    const ch = dataText[i];

    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (!inDouble && !inTemplate && ch === '\'') {
      inSingle = !inSingle;
      continue;
    }
    if (!inSingle && !inTemplate && ch === '"') {
      inDouble = !inDouble;
      continue;
    }
    if (!inSingle && !inDouble && ch === '`') {
      inTemplate = !inTemplate;
      continue;
    }
    if (inSingle || inDouble || inTemplate) continue;

    if (ch === '[') depth++;
    if (ch === ']') {
      depth--;
      if (depth === 0) {
        const endBracket = i;
        let end = endBracket + 1;
        while (end < dataText.length && /\s/.test(dataText[end])) end++;
        if (dataText[end] === ',') end++;
        return { start: worksKeyIndex, end };
      }
    }
  }

  throw new Error('data.js works 数组未正常闭合');
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    usage();
    return;
  }

  const worksPath = path.resolve(args.works);
  const dataPath = path.resolve(args.data);

  const works = normalizeWorks(readWorks(worksPath));
  const dataText = fs.readFileSync(dataPath, 'utf8');
  const block = formatWorksArray(works);
  const { start, end } = findWorksArrayBounds(dataText);

  const updated = dataText.slice(0, start) + block + dataText.slice(end);
  fs.writeFileSync(dataPath, updated, 'utf8');

  console.log(`Synced ${works.length} works from ${path.basename(worksPath)} to ${path.basename(dataPath)}.`);
}

main();
