#!/usr/bin/env node
/**
 * preview.mjs — 在默认浏览器中打开评审报告 HTML。
 *
 * Usage:
 *   node preview.mjs [path/to/review.html]
 *
 * 不传路径则自动找最近生成的 review-*.html。
 */

import { exec } from 'node:child_process';
import { globSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdirSync, statSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Find target file
let target = process.argv[2] ? resolve(process.argv[2]) : null;

if (!target) {
  const files = readdirSync(root)
    .filter(f => f.startsWith('review-') && f.endsWith('.html'))
    .map(f => ({ name: f, mtime: statSync(resolve(root, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  if (files.length === 0) { console.error('No review-*.html found. Run build-review.mjs first.'); process.exit(1); }
  target = resolve(root, files[0].name);
}

const cmd = process.platform === 'win32' ? `start "" "${target}"` : `open "${target}"`;
exec(cmd, err => { if (err) { console.error('Failed to open browser:', err.message); process.exit(1); } });
console.log(`Opened: ${target}`);
