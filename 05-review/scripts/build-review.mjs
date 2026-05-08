#!/usr/bin/env node
/**
 * build-review.mjs — 读取评审 JSON + HTML 模板，填充占位符，输出最终 HTML。
 *
 * Usage:
 *   node build-review.mjs <review.json> [--template path/to/template.html] [--output path/to/output.html]
 *
 * 默认模板: ../templates/review-template.html
 * 默认输出: ./review-{projectName}.html
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { calcRadar } from './radar-calc.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- CLI args ---
const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help')) {
  console.log('Usage: node build-review.mjs <review.json> [--template <path>] [--output <path>]');
  process.exit(0);
}

const jsonPath = resolve(args[0]);
let templatePath = resolve(__dirname, '../templates/review-template.html');
let outputPath = null;

for (let i = 1; i < args.length; i++) {
  if (args[i] === '--template' && args[i + 1]) templatePath = resolve(args[++i]);
  if (args[i] === '--output' && args[i + 1]) outputPath = resolve(args[++i]);
}

// --- Load data ---
const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
let html = readFileSync(templatePath, 'utf-8');

// --- Radar chart ---
const scores = data.dimensions.map(d => d.score);
const { points, dots } = calcRadar(scores, { cx: 0, cy: 0, radius: 80 });
// Template uses viewBox="-110 -110 220 220" so origin is at 0,0 with radius 80

html = html.replace('{{RADAR_POINTS}}', points);
dots.forEach((d, i) => {
  html = html.replace(`{{DOT${i + 1}_X}}`, d.x);
  html = html.replace(`{{DOT${i + 1}_Y}}`, d.y);
});

// --- Scores & meta ---
html = html.replace(/\{\{PROJECT_NAME\}\}/g, data.projectName);
html = html.replace(/\{\{DATE\}\}/g, data.date);
html = html.replace('{{AVG_SCORE}}', data.avgScore.toFixed(1));
data.dimensions.forEach((d, i) => {
  html = html.replace(`{{SCORE${i + 1}}}`, d.score);
});

// --- Reviewer cards ---
const verdictMap = {
  pass: { icon: '✅', text: '通过' },
  warn: { icon: '⚠️', text: '有保留' },
  fail: { icon: '❌', text: '不通过' },
};

const reviewerKeys = ['BUFFETT', 'MUSK', 'NAVAL', 'KARPATHY'];
data.reviewers.forEach((r, i) => {
  const key = reviewerKeys[i];
  const v = verdictMap[r.verdict];
  html = html.replace(`{{${key}_VERDICT}}`, r.verdict);
  html = html.replace(`{{${key}_VERDICT_ICON}}`, v.icon);
  html = html.replace(`{{${key}_VERDICT_TEXT}}`, v.text);
  html = html.replace(`{{${key}_REVIEW}}`, r.review);
  html = html.replace(`{{${key}_ADVICE}}`, r.advice);
});

// --- Summary ---
data.topIssues.forEach((issue, i) => {
  html = html.replace(`{{ISSUE_${i + 1}}}`, issue);
});
data.nextSteps.forEach((step, i) => {
  html = html.replace(`{{NEXT_STEP_${i + 1}}}`, step);
});

// --- Write output ---
if (!outputPath) {
  const slug = data.projectName.replace(/[^a-zA-Z0-9一-鿿]/g, '-');
  outputPath = resolve(__dirname, `../review-${slug}.html`);
}
writeFileSync(outputPath, html, 'utf-8');
console.log(`Review built: ${outputPath}`);
