#!/usr/bin/env python3
# ═══════════════════════════════════════════════════════
#  SHOCKUNIT — 高清封面下载器 (统一 16:9 JPG 版)
# ═══════════════════════════════════════════════════════

import os, sys, re, time, urllib.request, json, ssl
from pathlib import Path

# 强制忽略 SSL 验证 (解决 Mac 报错)
ssl._create_default_https_context = ssl._create_unverified_context

try:
    from PIL import Image
    from io import BytesIO
except ImportError:
    print("正在安装组件 Pillow...")
    os.system(f"{sys.executable} -m pip install Pillow")
    from PIL import Image
    from io import BytesIO

# 27个作品 ID (保持与 data.js 严格对齐)
WORKS = [
    ("azuki-wake-up", "1168805966"), ("beanz-fight", "1168806906"),
    ("bobo-s-proposal", "1168805624"), ("bobu-s-gift", "1168802850"),
    ("brown-x-beanz-winter-wonderland", "1168804101"), ("encounter", "1168803511"),
    ("five-elements", "1168806985"), ("freedom", "1168803587"),
    ("house-of-lee", "1168804799"), ("l-b", "1168805487"),
    ("meet-by-chance", "1168806829"), ("merge", "1168806632"),
    ("muri", "1168804442"), ("my-friend-frankenstein", "1168802727"),
    ("neon-garden-part-1", "1168805744"), ("neon-garden-part-2", "1168848318"),
    ("neon-garden-part-3", "1168804463"), ("neon-garden-part-4", "1168803935"),
    ("pawa", "1168804936"), ("pawa-2", "1168802914"),
    ("peers", "1168806124"), ("persona", "1168803378"),
    ("stop-the-rain", "1168802564"), ("the-origin", "1168806311"),
    ("the-return-of-bobu", "1168806742"), ("update-the-system", "1168803006"),
    ("valeria", "1168804305")
]

# 统一目标规格
TARGET_SIZE = (1280, 720)
TARGET_RATIO = 16 / 9

script_dir = Path(__file__).parent
out_dir = script_dir / "images" / "works"
out_dir.mkdir(parents=True, exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}

print(f"\n{'═'*50}\n  SHOCKUNIT — 16:9 高清 JPG 转换器\n{'═'*50}\n")

for i, (slug, vid_id) in enumerate(WORKS, 1):
    fname = f"{slug}.jpg"
    out_path = out_dir / fname
    
    # 强制覆盖旧图
    if out_path.exists(): out_path.unlink()

    print(f"[{i:02d}/27] 抓取并切为 16:9: {fname}...", end=" ", flush=True)

    try:
        # 获取 API 数据
        api_url = f"https://vimeo.com/api/v2/video/{vid_id}.json"
        with urllib.request.urlopen(urllib.request.Request(api_url, headers=headers)) as r:
            thumb_url = json.loads(r.read())[0]['thumbnail_large']

        # 核心逻辑：强制拉取 1280px 超清素材
        thumb_url = thumb_url.replace("_640", "_1280")

        # 下载图片
        with urllib.request.urlopen(urllib.request.Request(thumb_url, headers=headers)) as r:
            img = Image.open(BytesIO(r.read())).convert("RGB")

        # 执行 16:9 中心裁切
        iw, ih = img.size
        if (iw / ih) > TARGET_RATIO:
            new_w = int(ih * TARGET_RATIO)
            left = (iw - new_w) // 2
            img = img.crop((left, 0, left + new_w, ih))
        else:
            new_h = int(iw / TARGET_RATIO)
            top = (ih - new_h) // 2
            img = img.crop((0, top, iw, top + new_h))

        # 保存为高质量 JPG
        img = img.resize(TARGET_SIZE, Image.LANCZOS)
        img.save(out_path, "JPEG", quality=90, optimize=True)
        print("✓ (1280x720)")

    except Exception as e:
        print(f"✗ 错误: {e}")
    time.sleep(0.4)

print(f"\n{'═'*50}\n  16:9 JPG 封面全部处理完毕！\n{'═'*50}")
input("\n按 Enter 退出...")