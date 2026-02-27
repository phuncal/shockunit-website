// ═══════════════════════════════════════════════════════════
//  SHOCKUNIT — CONTENT DATA FILE
//  ⚠️  唯一需要日常编辑的文件
//  修改内容只改这里，不动 index.html
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
//  SHOCKUNIT — CONTENT DATA FILE v2
//  ⚠️  内容修改区域：只需编辑下方 SITE_DATA 对象
//  样式和逻辑代码在下方，不要修改
// ═══════════════════════════════════════════════════════════

const SITE_DATA = {

  studio: {
    name: "SHOCKUNIT",
    tagline:    { en: "Anime is a language.", zh: "动画是一种语言。" },
    founded:    "2008",
    location:   { en: "Beijing, China", zh: "中国·北京" },
    email:      "shockunitstudio@gmail.com",
    description: {
      en: "A professional 2D animation studio based in Beijing, creating animated films, series and commercial content since 2008.",
      zh: "专业2D动画工作室，总部北京，自2008年起从事动画长片、系列及商业内容创作。"
    },
    socials: {
      twitter:   "https://x.com/shockunitstudio",
      youtube:   "https://www.youtube.com/@shockunit-anime",
      instagram: "https://www.instagram.com/shockunitanime/"
    }
  },

  // ─── 首页 ──────────────────────────────────────────────────
  hero: {
    eyebrow:       { en: "Now in Development", zh: "开发中" },
    posterImage:   "images/hero-poster.jpg",
    posterLabel:   { en: "Cyberpunk Visual Novel", zh: "赛博朋克视觉小说" },
    posterTitle:   { en: "STREAM\nALLIANCE", zh: "直播联盟" },
    posterSubtitle:{ en: "Coming to Steam", zh: "即将登陆 Steam" },
    steamUrl:      ""
  },

  // ─── 作品集 ────────────────────────────────────────────────
  // aspect: "wide"=16:9  "square"=1:1  "tall"=3:4
  works: [
    { id:"my-friend-frankenstein",         title:"My Friend Frankenstein",          cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168802727", thumb:"images/works/my-friend-frankenstein.jpg",        aspect:"wide"   },
    { id:"house-of-lee",                   title:"House of Lee",                    cat:"commercial", catLabel:{en:"Commercial",zh:"商业片"}, duration:"", client:"House of Lee", year:"", vimeo:"https://player.vimeo.com/video/1168804799", thumb:"images/works/house-of-lee.jpg",                  aspect:"wide"   },
    { id:"stop-the-rain",                  title:"Stop the Rain",                   cat:"music",      catLabel:{en:"Music Video",zh:"MV"},    duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168802564", thumb:"images/works/stop-the-rain.jpg",                 aspect:"wide"   },
    { id:"azuki-wake-up",                  title:"Azuki Wake Up",                   cat:"commercial", catLabel:{en:"Commercial",zh:"商业片"}, duration:"", client:"Azuki",        year:"", vimeo:"https://player.vimeo.com/video/1168805966", thumb:"images/works/azuki-wake-up.jpg",                 aspect:"wide"   },
    { id:"update-the-system",              title:"Update the System",               cat:"commercial", catLabel:{en:"Commercial",zh:"商业片"}, duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168803006", thumb:"images/works/update-the-system.jpg",             aspect:"wide"   },
    { id:"brown-x-beanz-winter-wonderland",title:"BROWN x BEANZ Winter Wonderland", cat:"commercial", catLabel:{en:"Commercial",zh:"商业片"}, duration:"", client:"Beanz",        year:"", vimeo:"https://player.vimeo.com/video/1168804101", thumb:"images/works/brown-x-beanz-winter-wonderland.jpg", aspect:"wide"  },
    { id:"neon-garden-part-1",             title:"Neon Garden Part 1",              cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168805744", thumb:"images/works/neon-garden-part-1.jpg",            aspect:"wide"   },
    { id:"neon-garden-part-2",             title:"Neon Garden Part 2",              cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168848318", thumb:"images/works/neon-garden-part-2.jpg",            aspect:"wide"   },
    { id:"neon-garden-part-3",             title:"Neon Garden Part 3",              cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168804463", thumb:"images/works/neon-garden-part-3.jpg",            aspect:"square" },
    { id:"neon-garden-part-4",             title:"Neon Garden Part 4",              cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168803935", thumb:"images/works/neon-garden-part-4.jpg",            aspect:"wide"   },
    { id:"the-origin",                     title:"The Origin",                      cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168806311", thumb:"images/works/the-origin.jpg",                    aspect:"wide"   },
    { id:"peers",                          title:"Peers",                           cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168806124", thumb:"images/works/peers.jpg",                         aspect:"tall"   },
    { id:"encounter",                      title:"Encounter",                       cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168803511", thumb:"images/works/encounter.jpg",                     aspect:"wide"   },
    { id:"l-b",                            title:"L&B",                             cat:"commercial", catLabel:{en:"Commercial",zh:"商业片"}, duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168805487", thumb:"images/works/l-b.jpg",                           aspect:"wide"   },
    { id:"the-return-of-bobu",             title:"The Return of Bobu",              cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168806742", thumb:"images/works/the-return-of-bobu.jpg",            aspect:"wide"   },
    { id:"bobu-s-gift",                    title:"Bobu's Gift",                     cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168802850", thumb:"images/works/bobu-s-gift.jpg",                   aspect:"wide"   },
    { id:"bobo-s-proposal",                title:"Bobo's Proposal",                 cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168805624", thumb:"images/works/bobo-s-proposal.jpg",               aspect:"wide"   },
    { id:"merge",                          title:"Merge",                           cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168806632", thumb:"images/works/merge.jpg",                         aspect:"square" },
    { id:"meet-by-chance",                 title:"Meet by Chance",                  cat:"music",      catLabel:{en:"Music Video",zh:"MV"},    duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168806829", thumb:"images/works/meet-by-chance.jpg",                aspect:"wide"   },
    { id:"five-elements",                  title:"Five Elements",                   cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168806985", thumb:"images/works/five-elements.jpg",                 aspect:"wide"   },
    { id:"beanz-fight",                    title:"Beanz Fight",                     cat:"commercial", catLabel:{en:"Commercial",zh:"商业片"}, duration:"", client:"Beanz",        year:"", vimeo:"https://player.vimeo.com/video/1168806906", thumb:"images/works/beanz-fight.jpg",                   aspect:"wide"   },
    { id:"persona",                        title:"Persona",                         cat:"music",      catLabel:{en:"Music Video",zh:"MV"},    duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168803378", thumb:"images/works/persona.jpg",                       aspect:"square" },
    { id:"freedom",                        title:"Freedom",                         cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168803587", thumb:"images/works/freedom.jpg",                       aspect:"tall"   },
    { id:"muri",                           title:"Muri",                            cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168804442", thumb:"images/works/muri.jpg",                          aspect:"wide"   },
    { id:"pawa",                           title:"PAWA",                            cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168804936", thumb:"images/works/pawa.jpg",                          aspect:"wide"   },
    { id:"pawa-2",                         title:"PAWA 2",                          cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168802914", thumb:"images/works/pawa-2.jpg",                        aspect:"wide"   },
    { id:"valeria",                        title:"Valeria",                         cat:"original",   catLabel:{en:"Original",zh:"原创"},     duration:"", client:"",             year:"", vimeo:"https://player.vimeo.com/video/1168804305", thumb:"images/works/valeria.jpg",                       aspect:"tall"   }
  ],

  // ─── About ────────────────────────────────────────────────
  about: {
    founder:      "Li Gang  李纲",
    founderTitle: { en: "Founder & Creative Director", zh: "创始人及创意总监" },
    studioPhoto:  "images/studio-photo.jpg",
    bio: {
      en: [
        "Shockunit is a professional 2D animation studio based in Beijing, dedicated to the creative production of animated films, animated series, and commercial video content since 2008.",
        "We believe anime is a visual language — one with its own grammar, rhythm, and emotional register. This language can tell any story, for any audience, at any scale.",
        "We maintain a core production team supplemented by a network of freelance creators and partner studios, giving us the flexibility to handle projects at different scales and timelines."
      ],
      zh: [
        "Shockunit 是一家总部位于北京的专业2D动画工作室，自2008年起专注于动画长片、系列动画及商业内容的创意制作。",
        "我们相信动画是一种视觉语言——有其独特的语法、节奏与情感层次。这门语言能讲述任何故事，面向任何观众，适应任何规模。",
        "我们拥有稳定的核心制作团队，并汇聚了大量优秀的自由创作者和合作工作室，能够灵活应对不同规模和周期的项目。"
      ]
    },
    capabilities: [
      { en: "2D Animation Production",             zh: "2D 动画制作",        type: "Core" },
      { en: "Original IP Development",             zh: "原创 IP 开发",        type: "Core" },
      { en: "Game Development",                    zh: "游戏开发",            type: "New"  },
      { en: "Storyboard & Screenwriting",          zh: "剧本 / 分镜创作",     type: "Pre-pro" },
      { en: "Concept Design & Visual Development", zh: "概念设计 / 视觉开发", type: "Core" },
      { en: "Commercial & Brand Film",             zh: "商业片 / 品牌视频",   type: "Core" }
    ]
  },

  // ─── Contact ──────────────────────────────────────────────
  contact: {
    formspreeUrl: "https://formspree.io/f/xgolqydv",
    process: [
      { en: { title: "Brief & Discovery",     desc: "Tell us about your project — goals, timeline, and references." },  zh: { title: "简报 & 沟通",  desc: "告诉我们你的项目目标、时间线和参考资料。" } },
      { en: { title: "Proposal & Quote",      desc: "We assess scope and send a detailed production proposal." },        zh: { title: "方案 & 报价",  desc: "我们评估项目规模，发送详细的制作方案和报价。" } },
      { en: { title: "Pre-production",        desc: "Concept design, storyboard and animatic — aligned before production begins." }, zh: { title: "前期制作", desc: "概念设计、分镜及动态故事版，在正式制作前完成对齐。" } },
      { en: { title: "Production & Delivery", desc: "Animation with milestone reviews. Final delivery in required formats." },      zh: { title: "制作 & 交付", desc: "分阶段审核推进动画制作，按要求格式完成最终交付。" } }
    ],
    projectTypes: {
      en: ["2D Animation Production","Commercial Video","Concept Design","Storyboard / Screenwriting","Visual Novel","Merch / Collaboration","Other"],
      zh: ["2D动画制作","商业视频","概念设计","分镜/剧本","视觉小说","周边/合作","其他"]
    }
  },

  // ─── 游戏落地页 ───────────────────────────────────────────
  game: {
    titleEn:     "STREAM\nALLIANCE",
    titleZh:     "直播联盟",
    genre:       { en: "Cyberpunk Visual Novel", zh: "赛博朋克视觉小说" },
    tagline:     { en: "In 2048, your life is content.", zh: "2048年，你的人生就是内容。" },
    description: {
      en: "In the city of Dawn Harbor, live streaming is the only ladder out of poverty. You are Hoshino — 17 years old, newly online, chasing the dream of fame. But the closer you climb to the top, the more you feel something is wrong with your own memories.",
      zh: "在晨曦港，直播是唯一向上的阶梯。你是星野——17岁，刚刚开播，追逐成为顶流的梦想。但爬得越高，你越感觉到自己的记忆里有什么不对。"
    },
    features: [
      { en: "Branching Narrative", zh: "多线叙事", desc: { en: "Every choice reshapes your story",       zh: "每一个选择都将改写你的命运" } },
      { en: "Anime Art Style",     zh: "动画美术", desc: { en: "Full 2D animation by Shockunit",          zh: "Shockunit 全程2D动画制作" } },
      { en: "Cyberpunk World",     zh: "赛博朋克世界", desc: { en: "A richly detailed near-future city",  zh: "细节丰富的近未来都市" } },
      { en: "Moral Complexity",    zh: "道德困境", desc: { en: "No clean answers. No easy way out.",      zh: "没有标准答案，没有轻松出路" } }
    ],
    heroImage:  "images/game/hero.jpg",
    artImages:  ["images/game/art-1.jpg", "images/game/art-2.jpg", "images/game/art-3.jpg"],
    steamUrl:   "",
    trailerUrl: "",   // 预告片链接，支持 YouTube 或 Vimeo 嵌入链接
    devlog:     ""
  },

  shopifyEmbedCode: ""
};
