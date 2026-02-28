#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ALLOWED_CAT = new Set(['commercial', 'music', 'original', 'game', 'mg']);
const ALLOWED_ASPECT = new Set(['wide', 'square', 'tall']);

function parseArgs(argv) {
  const args = { works: 'works.json', assetsRoot: '.', strictAssets: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--works' && argv[i + 1]) args.works = argv[++i];
    else if (a === '--assets-root' && argv[i + 1]) args.assetsRoot = argv[++i];
    else if (a === '--strict-assets') args.strictAssets = true;
    else if (a === '--help' || a === '-h') args.help = true;
  }
  return args;
}

function usage() {
  console.log('Usage: node scripts/validate-works.js [--works works.json] [--assets-root .] [--strict-assets]');
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

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    usage();
    return;
  }

  const worksPath = path.resolve(args.works);
  const assetsRoot = path.resolve(args.assetsRoot);
  const works = readWorks(worksPath);

  const errors = [];
  const warnings = [];
  const seenIds = new Set();

  works.forEach((w, idx) => {
    const n = idx + 1;
    const title = String((w && w.title) || '').trim();
    if (!title) errors.push(`[${n}] title 不能为空`);

    const id = String((w && w.id) || '').trim() || slugify(title) || `work-${n}`;
    if (seenIds.has(id)) errors.push(`[${n}] id 重复: ${id}`);
    seenIds.add(id);

    const cat = String((w && w.cat) || 'commercial').trim() || 'commercial';
    if (!ALLOWED_CAT.has(cat)) warnings.push(`[${n}] cat=${cat} 不在推荐集合 ${Array.from(ALLOWED_CAT).join(', ')}`);

    const aspect = String((w && w.aspect) || 'wide').trim() || 'wide';
    if (!ALLOWED_ASPECT.has(aspect)) errors.push(`[${n}] aspect=${aspect} 非法，仅允许 wide/square/tall`);

    const vimeoRaw = String((w && w.vimeo) || '').trim();
    const vimeo = parseVimeo(vimeoRaw);
    if (!vimeoRaw) warnings.push(`[${n}] vimeo 为空（可暂时留空）`);
    else if (!/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(vimeo)) {
      errors.push(`[${n}] vimeo 格式错误: ${vimeoRaw}`);
    }

    const thumb = String((w && w.thumb) || '').trim() || `images/works/${id}.jpg`;
    const full = path.join(assetsRoot, thumb);
    if (!fs.existsSync(full)) {
      const msg = `[${n}] 缺少封面图: ${thumb}`;
      if (args.strictAssets) errors.push(msg);
      else warnings.push(msg);
    }

    const year = String((w && w.year) || '').trim();
    if (year && !/^\d{4}$/.test(year)) warnings.push(`[${n}] year=${year} 不是4位年份`);
  });

  console.log(`Checked ${works.length} works from ${path.basename(worksPath)}.`);
  if (errors.length) {
    console.log('\nErrors:');
    errors.forEach(e => console.log(`- ${e}`));
  }
  if (warnings.length) {
    console.log('\nWarnings:');
    warnings.forEach(w => console.log(`- ${w}`));
  }

  if (!errors.length && !warnings.length) {
    console.log('All checks passed.');
  }

  process.exit(errors.length ? 1 : 0);
}

main();
