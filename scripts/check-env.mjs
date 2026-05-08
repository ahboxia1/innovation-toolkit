#!/usr/bin/env node
/**
 * Innovation Toolkit — Environment Checker
 * Verifies Node.js, module dependencies, and Playwright availability.
 *
 * Usage:  node scripts/check-env.mjs
 */

import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Helpers ──────────────────────────────────────────────────────────────────

function run(cmd) {
  try { return execSync(cmd, { encoding: "utf-8", stdio: ["pipe","pipe","pipe"] }).trim(); }
  catch { return null; }
}

function dim(s)  { return `\x1b[2m${s}\x1b[0m`; }
function red(s)  { return `\x1b[31m${s}\x1b[0m`; }
function green(s){ return `\x1b[32m${s}\x1b[0m`; }
function yellow(s){return `\x1b[33m${s}\x1b[0m`; }
function bold(s) { return `\x1b[1m${s}\x1b[0m`; }

function statusIcon(ok) { return ok ? green("OK") : red("MISSING"); }

// ── Collect modules with package.json ────────────────────────────────────────

function findModules() {
  const modules = [];
  const STEP_DIRS = ["01-research", "02-brainstorm", "03-proposal", "04-pitch", "05-review"];

  for (const step of STEP_DIRS) {
    const stepDir = join(ROOT, step);
    if (!existsSync(stepDir)) continue;

    // Check for package.json at step level and one level deeper (e.g. scripts/)
    function checkDir(dir, label) {
      const pkgPath = join(dir, "package.json");
      if (!existsSync(pkgPath)) return;
      const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
      modules.push({
        name: `${step}/${label}`,
        dir,
        deps: Object.keys(pkg.dependencies || {}),
        installed: existsSync(join(dir, "node_modules")),
      });
    }

    checkDir(stepDir, ".");
    // Check nested dirs like 02-brainstorm/scripts
    for (const entry of readdirSync(stepDir, { withFileTypes: true })) {
      if (entry.isDirectory() && entry.name !== "node_modules") {
        checkDir(join(stepDir, entry.name), entry.name);
      }
    }
  }
  return modules;
}

// ── Main ─────────────────────────────────────────────────────────────────────

console.log(`\n${bold("Innovation Toolkit — Environment Check")}\n`);

// 1. Node.js
const nodeVer = run("node -v");
const nodeMajor = nodeVer ? parseInt(nodeVer.slice(1), 10) : 0;
const nodeOk = nodeMajor >= 18;
console.log(`  Node.js        ${nodeOk ? green(nodeVer) : red(nodeVer || "NOT FOUND")}  ${nodeOk ? "" : red("(need >= 18)")}`);

// 2. npm
const npmVer = run("npm -v");
console.log(`  npm            ${npmVer ? green("v" + npmVer) : red("NOT FOUND")}`);

// 3. Modules
console.log(`\n  ${bold("Module Dependencies:")}`);

const modules = findModules();
let allOk = true;

for (const m of modules) {
  const icon = m.installed ? statusIcon(true) : statusIcon(false);
  const count = m.deps.length;
  const detail = m.installed
    ? dim(`${count} package${count !== 1 ? "s" : ""} installed`)
    : yellow(`run install to get ${count} package${count !== 1 ? "s" : ""}`);
  if (!m.installed) allOk = false;
  console.log(`    ${icon}  ${m.name.padEnd(28)} ${detail}`);
}

if (modules.length === 0) {
  console.log(`    ${yellow("No modules with package.json found.")}`);
}

// 4. Playwright
console.log(`\n  ${bold("Playwright (for Step 1 research):")}`);
const pwDir = join(ROOT, "01-research", "node_modules", "playwright");
if (existsSync(pwDir)) {
  // Try to detect if browsers are installed
  const pwBrowsers = run("npx --yes playwright --version 2>/dev/null") || run("npx playwright --version 2>/dev/null");
  console.log(`    ${green("installed")}  ${pwBrowsers ? dim(pwBrowsers) : ""}`);
} else {
  console.log(`    ${red("not installed")}  ${dim("run install.bat / install.sh")}`);
  allOk = false;
}

// 5. Summary
console.log(`\n  ${"─".repeat(48)}`);
if (allOk && nodeOk) {
  console.log(`  ${green("All good!")} Ready to innovate.\n`);
} else {
  console.log(`  ${yellow("Some items need attention.")} Run ${bold("install.bat")} or ${bold("install.sh")} to fix.\n`);
}

process.exit(allOk && nodeOk ? 0 : 1);
