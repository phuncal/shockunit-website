# Shockunit Website — 项目说明

## 文件结构

```
shockunit-website/
├── index.html              ← 网站主文件（包含所有页面和逻辑）
├── data.js                 ← 内容数据（本地与部署统一读取）
├── SKILL.md                ← Claude Code 维护手册
├── README.md               ← 本文件
└── images/
    ├── shockunit_logo.png  ← 导航栏 logo（替换此文件即可）
    ├── hero-poster.jpg     ← 首页右侧海报图
    ├── studio-photo.jpg    ← About 页创始人/工作室照片
    ├── game/
    │   ├── hero.jpg        ← 游戏主视觉立绘（建议 1920×1080）
    │   ├── art-1.jpg       ← 概念美术主图（左侧大图，16:9）
    │   ├── art-2.jpg       ← 概念美术右上（4:3）
    │   └── art-3.jpg       ← 概念美术右下（4:3）
    └── works/
        ├── house-of-lee.jpg
        └── ...             ← 作品封面图（与 data.js 中 thumb 路径一致）
```

---

## 本地预览

不要直接双击 `index.html`，浏览器安全策略会阻止加载外部 `data.js`。

请使用本地服务器预览：

```bash
# 方法一：VS Code 安装 Live Server 插件，右键 index.html → Open with Live Server
# 方法二：命令行
python3 -m http.server 8080
# 然后打开 http://localhost:8080
```

> **说明**：网站运行时统一读取外部 `data.js`，内容更新只需维护该文件。

---

## 部署到 Cloudflare Pages

### 第一次部署

1. 在 GitHub 创建仓库 `shockunit-website`，将所有文件上传
2. 访问 [pages.cloudflare.com](https://pages.cloudflare.com)，连接 GitHub 仓库
3. 构建配置全部留空（纯静态，不需要构建命令）
4. 点击 Deploy，约1分钟后上线

### 绑定域名 shockunit.xyz

1. Cloudflare Pages 项目 → Custom domains → 添加 `shockunit.xyz`
2. 按提示在域名注册商处修改 DNS 记录

### 日常更新

```bash
git add .
git commit -m "描述修改内容"
git push
```
Cloudflare 会自动重新部署，约1分钟生效。

---

## 推荐内容更新流程（works.json 单一数据源）

1. 打开 `works-manager.html`，通过表格新增/编辑作品
2. 拖拽行调整顺序（即网站播放顺序）
3. 点击「导出 works.json」
4. 将导出的 `works.json` 放到项目根目录
5. 在项目根目录执行：

```bash
node scripts/validate-works.js
node scripts/sync-works-to-data.js
```

6. 预览确认后提交并推送

说明：
- `scripts/validate-works.js`：校验字段、链接、封面路径（默认缺图只警告）
- `scripts/sync-works-to-data.js`：把 `works.json` 确定性写入 `data.js` 的 `works` 字段

---

## 需要替换的内容

### 必须替换
| 文件/字段 | 说明 |
|-----------|------|
| `images/shockunit_logo.png` | 公司 logo，替换同名文件即可 |
| `images/hero-poster.jpg` | 首页右侧海报 |
| `images/studio-photo.jpg` | About 页照片 |
| `images/game/hero.jpg` | 游戏主视觉 |
| `images/game/art-*.jpg` | 游戏概念美术（3张）|
| `images/works/*.jpg` | 各作品封面图 |
| `data.js` 中所有 Vimeo URL | 替换 `XXXXXXX` 为真实视频 ID |

### 上线后填写
| 字段 | 位置 |
|------|------|
| `steamUrl` | `data.js` → `game.steamUrl`，同时也更新 `hero.steamUrl` |
| `trailerUrl` | `data.js` → `game.trailerUrl` |
| `formspreeUrl` | `data.js` → `contact.formspreeUrl` |

---

## 第三方服务配置

| 服务 | 用途 | 获取方式 |
|------|------|----------|
| [Formspree](https://formspree.io) | 联系表单邮件接收 | 注册 → 创建表单 → 复制 URL |
| [Shopify Starter](https://shopify.com) | 商品售卖（可选）| 创建商店 → Buy Button → 复制嵌入代码 |

---

## 图片规格建议

| 用途 | 尺寸 | 格式 |
|------|------|------|
| logo `shockunit_logo.png` | 高度 64px，透明背景 | PNG |
| 首页海报 `hero-poster.jpg` | 1920×1080 | JPG 85质量 |
| 工作室照片 `studio-photo.jpg` | 1200×800 | JPG 85质量 |
| 游戏主视觉 `game/hero.jpg` | 1920×1080 | JPG 85质量 |
| 概念美术 `game/art-*.jpg` | 1280×720 以上 | JPG 80质量 |
| 作品封面 `works/*.jpg` | 1280×720 以上 | JPG 80质量 |

压缩工具：[squoosh.app](https://squoosh.app)（免费，拖拽操作）

---

## 用 Claude Code 维护

把 `SKILL.md` 放在项目根目录，Claude Code 打开项目后会自动读取，然后用中文描述需求即可：

> "在 Work 页面添加新作品《霓虹花园第五章》，Vimeo 链接是 xxx，封面图已放在 images/works/ 里"

> "游戏 Steam 页面上线了，链接是 https://store.steampowered.com/app/xxxxxx"

> "预告片链接是 https://youtu.be/xxxxxxx，帮我加上"
