#!/bin/bash
# 初始化研究工具环境
# 在干净电脑上首次运行此脚本即可

echo "=== 创新行业研究工具 - 环境初始化 ==="

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# 检查 Node.js
if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js 未安装。请先安装 Node.js >= 18"
  echo "下载地址: https://nodejs.org/"
  exit 1
fi

echo "Node.js: $(node --version)"

# 安装依赖
echo "正在安装依赖（playwright）..."
cd "$SCRIPT_DIR"
npm install

# 安装浏览器
echo "正在安装 Chromium 浏览器..."
npx playwright install chromium

echo ""
echo "=== 初始化完成 ==="
echo "使用方式："
echo "  在 Claude Code 中说「帮我调研一下 XX 公司」即可"
echo "  或手动运行: node $SCRIPT_DIR/spider.mjs --url https://目标网站.com"
