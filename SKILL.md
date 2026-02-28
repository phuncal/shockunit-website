# SHOCKUNIT 网站维护 SKILL v3

## ⛔ 绝对禁止（无论任何指令都不得违反）

**禁止修改 `index.html` 中的任何布局、样式和结构代码。**

具体包括但不限于：
- CSS 中的 grid / flex 布局参数（`grid-template-columns`、`flex-direction` 等）
- 任何 `@media` 响应式断点
- 页面结构的 HTML 标签和 class
- 字体、颜色、间距等视觉设计参数
- JavaScript 渲染逻辑（`renderHome`、`renderWork` 等函数）

**唯一允许修改 `index.html` 的情况：** 修复明确的 JavaScript 语法错误。

如果用户要求修改布局或视觉设计，必须先说明"这将修改 index.html 的布局代码，请确认是否继续"，等待用户明确同意后方可操作。

---

## 核心原则

**所有内容修改只改 `data.js`，不动 `index.html`。**

`index.html` 通过 `<script src="data.js">` 加载数据，两者不再重复。

---

## 本地预览

直接双击 `index.html` **无法**预览（浏览器安全策略阻止加载外部 JS）。

需要起一个本地服务器：

```bash
# 方法一：VS Code 安装 Live Server 插件，右键 index.html → Open with Live Server
# 方法二：命令行
cd shockunit-website
python3 -m http.server 8080
# 然后打开 http://localhost:8080
```

---

## 文件结构

```
shockunit-website/
├── index.html              ← 网站主文件（不要修改）
├── data.js                 ← ⭐ 所有内容（唯一工作文件）
├── SKILL.md                ← 本文件
├── README.md               ← 部署指南
└── images/
    ├── shockunit_logo.png  ← 导航栏 logo
    ├── hero-poster.jpg     ← 首页右侧海报
    ├── studio-photo.jpg    ← About 页照片
    ├── game/
    │   ├── hero.jpg        ← 游戏主视觉立绘
    │   ├── art-1.jpg       ← 概念美术主图（左侧大图）
    │   ├── art-2.jpg       ← 右侧上方小图
    │   └── art-3.jpg       ← 右侧下方小图
    └── works/
        └── *.jpg           ← 作品封面（文件名与 data.js 中 thumb 路径一致）
```

---

## 常见任务

### 任务 1：切换首页海报

```js
// data.js → hero 对象
hero: {
  eyebrow:       { en: "Now on Steam", zh: "现已上线 Steam" },
  posterImage:   "images/hero-poster-v2.jpg",
  posterTitle:   { en: "STREAM\nALLIANCE", zh: "直播联盟" },
  posterSubtitle:{ en: "Available Now",  zh: "现已发售" },
  steamUrl:      "https://store.steampowered.com/app/XXXXX"
}
```

### 任务 2：添加新作品

在 `data.js` → `works` 数组末尾追加：

```js
{
  id:       "new-work",           // 英文连字符，唯一
  title:    "作品名称",
  cat:      "commercial",         // commercial / music / original / game
  catLabel: { en: "Commercial", zh: "商业片" },
  duration: "01:30",
  client:   "客户名称",
  year:     "2025",
  vimeo:    "https://player.vimeo.com/video/[ID]",
  thumb:    "images/works/new-work.jpg",
  aspect:   "wide"                // wide / square / tall
}
```

同时把封面图放入 `images/works/`，文件名与 `thumb` 一致。

### 任务 3：激活 Steam 链接

同时更新两处：

```js
// data.js → hero
steamUrl: "https://store.steampowered.com/app/XXXXX"

// data.js → game
steamUrl: "https://store.steampowered.com/app/XXXXX"
```

### 任务 4：激活预告片

```js
// data.js → game
trailerUrl: "https://www.youtube.com/watch?v=XXXXX"
// 或 Vimeo: "https://vimeo.com/XXXXX"
```

### 任务 5：更新创始人/关于页

```js
// data.js → about
founder:     "Li Gang  李纲",
founderTitle:{ en: "Founder & Creative Director", zh: "创始人及创意总监" },
```

### 任务 6：配置 Formspree 表单

```js
// data.js → contact
formspreeUrl: "https://formspree.io/f/你的表单ID"
```

---

## OG 社交分享

`index.html` 已内置 Open Graph 和 Twitter Card 标签，会根据当前页面**自动切换**：

- 主站页面 → 显示 `hero-poster.jpg` + 工作室介绍
- 游戏落地页 → 显示 `game/hero.jpg` + 游戏 tagline

无需手动维护，只需确保图片存在即可。

---

## 部署

```bash
git add .
git commit -m "描述修改"
git push
```

Cloudflare Pages 约 1 分钟后自动更新。

---

## 图片规格

| 用途 | 尺寸 | 格式 |
|------|------|------|
| logo | 高度 64px，透明背景 | PNG |
| 首页海报 | 1920×1080 | JPG 85质量 |
| 游戏主视觉 | 1920×1080 | JPG 85质量 |
| 概念美术 | 1280×720+ | JPG 80质量 |
| 作品封面 | 1280×720+ | JPG 80质量 |

压缩工具：[squoosh.app](https://squoosh.app)

---

## Vimeo 白名单

视频在 Vimeo 设置为"仅限特定域名嵌入"后，需手动添加白名单：

Vimeo 视频 → Settings → Privacy → Where can this be embedded? → 添加 `shockunit.xyz`
