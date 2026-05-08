#!/usr/bin/env node

/**
 * build-report.mjs
 *
 * Read a JSON data file and the HTML template, replace all {{PLACEHOLDER}} values,
 * and write the final HTML report.
 *
 * Usage:
 *   node scripts/build-report.mjs --data research-data.json --out report.html
 *   node scripts/build-report.mjs --data examples/example-research-data.json
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Parse args ──────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--') && i + 1 < args.length) {
      opts[args[i].slice(2)] = args[++i];
    }
  }
  if (!opts.data) {
    console.error('Usage: node scripts/build-report.mjs --data <data.json> [--out <output.html>]');
    process.exit(1);
  }
  return opts;
}

// ── Flatten JSON into {{KEY}} mappings ─────────────────────────
function flatten(obj, prefix = '') {
  const map = {};
  for (const [key, val] of Object.entries(obj)) {
    const path = prefix ? `${prefix}_${key}` : key;
    if (val === null || val === undefined) continue;
    if (typeof val === 'string' || typeof val === 'number') {
      map[path.toUpperCase()] = String(val);
    } else if (Array.isArray(val)) {
      // Handle flat arrays (timeline, competitors) with indexed keys
      val.forEach((item, i) => {
        if (typeof item === 'object' && item !== null) {
          Object.assign(map, flatten(item, `${path}_${i + 1}`));
        } else {
          map[`${path.toUpperCase()}_${i + 1}`] = String(item);
        }
      });
    } else if (typeof val === 'object') {
      Object.assign(map, flatten(val, path));
    }
  }
  return map;
}

// ── Map structured data to template placeholders ───────────────
function mapToPlaceholders(data) {
  const p = {};

  // Header
  p.REPORT_TITLE = data.title || '';
  p.TARGET_NAME  = data.target || '';
  p.REPORT_DATE  = data.date || '';
  p.VERSION      = data.version || '1.0';
  p.ANALYST      = data.analyst || 'Innovation Toolkit';

  // Definition
  p.ONE_LINE_DEFINITION = data.definition || '';
  const tags = data.tags || ['研究', '行业扫描', '竞品分析'];
  tags.forEach((t, i) => { p[`TAG_${i + 1}`] = t; });

  // Timeline (up to 8 milestones)
  const milestones = data.timeline || [];
  milestones.forEach((m, i) => {
    const n = i + 1;
    p[`MILESTONE_${n}_YEAR`]  = m.year || '';
    p[`MILESTONE_${n}_TITLE`] = m.event || '';
    p[`MILESTONE_${n}_DESC`]  = m.description || '';
  });

  // Competitors (up to 6)
  const comps = data.competitors || [];
  comps.forEach((c, i) => {
    const n = i + 1;
    p[`COMP_${n}_NAME`]            = c.name || '';
    p[`COMP_${n}_TAGLINE`]         = c.positioning || '';
    p[`COMP_${n}_DIFFERENTIATOR`]  = c.differentiation || '';
  });

  // Insights
  const opps = data.insights?.opportunity || [];
  opps.forEach((o, i) => { p[`OPPORTUNITY_${i + 1}`] = o; });
  const risks = data.insights?.risk || [];
  risks.forEach((r, i) => { p[`RISK_${i + 1}`] = r; });

  p.ENTRY_POINT_DESC = data.insights?.entryPoint?.description || '';
  const actions = data.insights?.entryPoint?.actions || [];
  actions.forEach((a, i) => { p[`ENTRY_ACTION_${i + 1}`] = a; });

  p.DATA_CUTOFF_DATE = data.dataCutoffDate || data.date || '';

  return p;
}

// ── Replace placeholders in template ───────────────────────────
function replacePlaceholders(html, placeholders) {
  return html.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return placeholders[key] !== undefined ? placeholders[key] : match;
  });
}

// ── Main ───────────────────────────────────────────────────────
function main() {
  const { data: dataPath, out: outPath } = parseArgs();

  const dataFile = resolve(dataPath);
  if (!existsSync(dataFile)) {
    console.error(`Data file not found: ${dataFile}`);
    process.exit(1);
  }

  const templateFile = join(ROOT, 'templates', 'research-template.html');
  if (!existsSync(templateFile)) {
    console.error(`Template not found: ${templateFile}`);
    process.exit(1);
  }

  // Load files
  const data     = JSON.parse(readFileSync(dataFile, 'utf-8'));
  const template = readFileSync(templateFile, 'utf-8');

  // Build and fill
  const placeholders = mapToPlaceholders(data);
  const html = replacePlaceholders(template, placeholders);

  // Write output
  const output = outPath
    ? resolve(outPath)
    : dataFile.replace(/\.json$/, '-report.html');

  writeFileSync(output, html, 'utf-8');
  console.log(`Report generated: ${output}`);
  console.log(`Replaced ${Object.keys(placeholders).length} placeholders.`);
}

main();
