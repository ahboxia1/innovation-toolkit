#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo ""
echo "    ╔══════════════════════════════════════════════════╗"
echo "    ║                                                  ║"
echo "    ║       Innovation Toolkit · 创新脚手架套组         ║"
echo "    ║       From idea to pitch in 5 steps              ║"
echo "    ║                                                  ║"
echo "    ╚══════════════════════════════════════════════════╝"
echo ""

# ---- Check Node.js ----
echo "[1/3] Checking Node.js ..."
if ! command -v node &>/dev/null; then
    echo "    ERROR: Node.js not found. Install from https://nodejs.org (v18+)"
    exit 1
fi
NODE_VER=$(node -v)
echo "    Found Node.js $NODE_VER"

# ---- Install dependencies per module ----
echo ""
echo "[2/3] Installing module dependencies ..."
COUNT=0

while IFS= read -r -d '' PKG; do
    DIR="$(dirname "$PKG")"
    # Skip toolkit root
    if [ "$DIR" = "$SCRIPT_DIR" ]; then
        continue
    fi
    echo "    Installing in $DIR ..."
    if (cd "$DIR" && npm install --production --no-fund --no-audit 2>&1); then
        COUNT=$((COUNT + 1))
    else
        echo "    WARNING: npm install failed in $DIR"
    fi
done < <(find "$SCRIPT_DIR" -name "package.json" -not -path "*/node_modules/*" -print0)

echo "    Installed $COUNT modules successfully."

# ---- Playwright browsers for 01-research ----
echo ""
echo "[3/3] Setting up Playwright browsers ..."
if [ -d "01-research/node_modules/playwright" ]; then
    echo "    Installing Chromium for web research ..."
    (cd 01-research && npx playwright install chromium 2>&1)
    echo "    Done."
else
    echo "    Skipped (01-research dependencies not installed)."
fi

# ---- Summary ----
echo ""
echo "    ─────────────────────────────────────────────────"
echo "    Installation complete!"
echo ""
echo "    Modules:"
echo "      01-research   Industry research with web scraping"
echo "      02-brainstorm Creative ideation companion"
echo "      03-proposal    One-page proposal builder"
echo "      04-pitch       Pitch deck generator"
echo "      05-review      AI-powered idea review"
echo ""
echo "    Next: open Claude Code and say \"创新工具包\""
echo "    ─────────────────────────────────────────────────"
echo ""
