#!/usr/bin/env node

/**
 * build-pitch.mjs
 * Reads a proposal JSON + HTML template, fills placeholders, writes output HTML.
 *
 * Usage:
 *   node scripts/build-pitch.mjs examples/example-proposal.json
 *   node scripts/build-pitch.mjs examples/example-proposal.json --style business
 *   node scripts/build-pitch.mjs examples/example-proposal.json -o my-pitch.html
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── CLI args ──────────────────────────────────────────────
const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help')) {
  console.log('Usage: node build-pitch.mjs <proposal.json> [--style tech|business|minimal] [-o output.html]');
  process.exit(0);
}

let proposalPath = args[0];
let style = 'tech';
let outputFile = '';

for (let i = 1; i < args.length; i++) {
  if (args[i] === '--style' && args[i + 1]) { style = args[++i]; }
  else if (args[i] === '-o' && args[i + 1]) { outputFile = args[++i]; }
}

// ── Load proposal ─────────────────────────────────────────
const absProposal = resolve(proposalPath);
if (!existsSync(absProposal)) {
  console.error(`Proposal not found: ${absProposal}`);
  process.exit(1);
}
const proposal = JSON.parse(readFileSync(absProposal, 'utf-8'));

// ── Load config ───────────────────────────────────────────
const configPath = join(ROOT, 'config.json');
const config = existsSync(configPath)
  ? JSON.parse(readFileSync(configPath, 'utf-8'))
  : { styles: { tech: {} }, output: {} };

// ── Load template ─────────────────────────────────────────
const templateFile = config.output?.template || 'templates/pitch-template.html';
const templatePath = join(ROOT, templateFile);
if (!existsSync(templatePath)) {
  console.error(`Template not found: ${templatePath}`);
  process.exit(1);
}
let html = readFileSync(templatePath, 'utf-8');

// ── Build placeholder map ─────────────────────────────────
const p = proposal;
const map = {
  PROJECT_NAME: p.projectName || '',
  PROJECT_BADGE: `创新提案 · ${style}`,
  PAIN_POINT_STATEMENT: p.painPoint || '',
  ONE_LINE_SOLUTION: p.oneLineSolution || '',
  PROBLEM_CONTEXT: p.problem?.context || '',
  PERSONA_INITIAL: (p.targetUser?.name || '用')[0],
  PERSONA_NAME: p.targetUser?.name || '',
  PERSONA_DESCRIPTION: p.targetUser?.description || '',
  PAIN_DATA_1: p.problem?.pains?.[0]?.data || '',
  PAIN_UNIT_1: p.problem?.pains?.[0]?.unit || '',
  PAIN_TITLE_1: p.problem?.pains?.[0]?.title || '',
  PAIN_DETAIL_1: p.problem?.pains?.[0]?.detail || '',
  PAIN_DATA_2: p.problem?.pains?.[1]?.data || '',
  PAIN_UNIT_2: p.problem?.pains?.[1]?.unit || '',
  PAIN_TITLE_2: p.problem?.pains?.[1]?.title || '',
  PAIN_DETAIL_2: p.problem?.pains?.[1]?.detail || '',
  PAIN_DATA_3: p.problem?.pains?.[2]?.data || '',
  PAIN_UNIT_3: p.problem?.pains?.[2]?.unit || '',
  PAIN_TITLE_3: p.problem?.pains?.[2]?.title || '',
  PAIN_DETAIL_3: p.problem?.pains?.[2]?.detail || '',
  SOLUTION_INTRO: `核心方案：${p.oneLineSolution || ''}`,
  SOLUTION_ICON_1: '1',
  SOLUTION_TITLE_1: p.solution?.points?.[0]?.title || '',
  SOLUTION_DESC_1: p.solution?.points?.[0]?.desc || '',
  SOLUTION_ICON_2: '2',
  SOLUTION_TITLE_2: p.solution?.points?.[1]?.title || '',
  SOLUTION_DESC_2: p.solution?.points?.[1]?.desc || '',
  SOLUTION_ICON_3: '3',
  SOLUTION_TITLE_3: p.solution?.points?.[2]?.title || '',
  SOLUTION_DESC_3: p.solution?.points?.[2]?.desc || '',
  DIFFERENTIATION: p.differentiation || '',
  VALUE_INTRO: `覆盖 ${(p.scale?.users || '')}，释放巨大组织效能`,
  VALUE_NUM_1: p.scale?.users || '',
  VALUE_LABEL_1: '目标用户',
  VALUE_NUM_2: p.scale?.efficiency || '',
  VALUE_LABEL_2: '效率提升',
  VALUE_NUM_3: p.scale?.savings || '',
  VALUE_LABEL_3: '年度节省',
  MVP_PHASE_1: p.mvpPlan?.[0]?.phase || '',
  MVP_PHASE_DESC_1: p.mvpPlan?.[0]?.desc || '',
  MVP_PHASE_2: p.mvpPlan?.[1]?.phase || '',
  MVP_PHASE_DESC_2: p.mvpPlan?.[1]?.desc || '',
  MVP_PHASE_3: p.mvpPlan?.[2]?.phase || '',
  MVP_PHASE_DESC_3: p.mvpPlan?.[2]?.desc || '',
  MVP_PHASE_4: p.mvpPlan?.[3]?.phase || '',
  MVP_PHASE_DESC_4: p.mvpPlan?.[3]?.desc || '',
  CTA_HEADLINE: p.tenYearTest || '让我们一起把这个想法变成现实',
  CTA_SUMMARY: `${p.projectName || ''} — ${p.oneLineSolution || ''}`,
  CTA_BUTTON: '立即加入',
  TEAM_INFO: `资源需求：${p.resourcesNeeded || '待定'}`,
};

// ── Replace placeholders ──────────────────────────────────
for (const [key, value] of Object.entries(map)) {
  html = html.replaceAll(`{{${key}}}`, value);
}

// ── Write output ──────────────────────────────────────────
if (!outputFile) {
  const slug = (p.projectName || 'pitch').replace(/\s+/g, '-');
  outputFile = `pitch-${slug}.html`;
}
const outputPath = resolve(outputFile);
writeFileSync(outputPath, html, 'utf-8');

console.log(`Pitch generated: ${outputPath}`);
console.log(`Style: ${style} | Template: ${templateFile}`);
console.log(`Open with: node scripts/preview.mjs "${outputPath}"`);
