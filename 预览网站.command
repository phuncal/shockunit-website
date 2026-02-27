#!/bin/bash
# 双击此文件即可启动本地预览
# 确保此文件和 index.html 在同一个文件夹里

# 进入脚本所在目录
cd "$(dirname "$0")"

# 检查 Python3
if ! command -v python3 &> /dev/null; then
  osascript -e 'display alert "需要安装 Python3" message "请访问 python.org 下载安装后再试"'
  exit 1
fi

# 找一个可用端口
PORT=8080

# 在后台启动服务器
python3 -m http.server $PORT &
SERVER_PID=$!

# 等一秒让服务器启动
sleep 1

# 打开浏览器
open "http://localhost:$PORT"

echo "✅ 本地预览已启动：http://localhost:$PORT"
echo "关闭此窗口将停止服务器"

# 等待用户关闭
wait $SERVER_PID
