@echo off
REM 初始化研究工具环境 (Windows)
REM 在干净电脑上首次运行此脚本即可

echo === 创新行业研究工具 - 环境初始化 ===

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js 未安装。请先安装 Node.js ^>= 18
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js:
node --version

echo 正在安装依赖（playwright）...
call npm install

echo 正在安装 Chromium 浏览器...
call npx playwright install chromium

echo.
echo === 初始化完成 ===
echo 使用方式：
echo   在 Claude Code 中说「帮我调研一下 XX 公司」即可
echo   或手动运行: node spider.mjs --url https://目标网站.com
pause
