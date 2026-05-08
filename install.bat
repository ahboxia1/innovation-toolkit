@echo off
chcp 65001 >nul 2>&1
setlocal enabledelayedexpansion

echo.
echo     ╔══════════════════════════════════════════════════╗
echo     ║                                                  ║
echo     ║       Innovation Toolkit · 创新脚手架套组         ║
echo     ║       From idea to pitch in 5 steps              ║
echo     ║                                                  ║
echo     ╚══════════════════════════════════════════════════╝
echo.

:: ---- Check Node.js ----
echo [1/3] Checking Node.js ...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo     ERROR: Node.js not found. Install from https://nodejs.org ^(v18+^)
    goto :fail
)
for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
echo     Found Node.js %NODE_VER%

:: ---- Install dependencies per module ----
echo.
echo [2/3] Installing module dependencies ...
set COUNT=0

for /r %%f in (package.json) do (
    set "DIR=%%~dpf"
    :: Skip the toolkit root if it ever gets its own package.json
    if /i not "!DIR!" "%~dp0" (
        echo     Installing in !DIR! ...
        pushd "!DIR!"
        call npm install --production --no-fund --no-audit 2>&1
        if !errorlevel! neq 0 (
            echo     WARNING: npm install failed in !DIR!
        ) else (
            set /a COUNT+=1
        )
        popd
    )
)

echo     Installed !COUNT! modules successfully.

:: ---- Playwright browsers for 01-research ----
echo.
echo [3/3] Setting up Playwright browsers ...
if exist "01-research\node_modules\playwright" (
    echo     Installing Chromium for web research ...
    cd /d "%~dp001-research"
    call npx playwright install chromium 2>&1
    cd /d "%~dp0"
    echo     Done.
) else (
    echo     Skipped ^(01-research dependencies not installed^).
)

:: ---- Summary ----
echo.
echo     ─────────────────────────────────────────────────
echo     Installation complete!
echo.
echo     Modules:
echo       01-research   Industry research with web scraping
echo       02-brainstorm Creative ideation companion
echo       03-proposal    One-page proposal builder
echo       04-pitch       Pitch deck generator
echo       05-review      AI-powered idea review
echo.
echo     Next: open Claude Code and say "创新工具包"
echo     ─────────────────────────────────────────────────
echo.
goto :end

:fail
echo.
echo     Installation failed. Fix the errors above and retry.
echo.
exit /b 1

:end
endlocal
