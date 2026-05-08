#!/usr/bin/env node

/**
 * quick-research.mjs
 *
 * Given a research target, output suggested search queries for
 * vertical analysis (timeline) and horizontal analysis (competitors)
 * following the hv-analysis methodology.
 *
 * Usage:
 *   node scripts/quick-research.mjs "Notion"
 *   node scripts/quick-research.mjs "AI Agent" --lang en
 */

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Helpers ────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const lang = 'zh';
  let target = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--lang' && args[i + 1]) i++;
    else if (!args[i].startsWith('--')) target = args[i];
  }
  if (!target) {
    console.error('Usage: node scripts/quick-research.mjs "<target>" [--lang zh|en]');
    console.error('Example: node scripts/quick-research.mjs "Notion"');
    process.exit(1);
  }
  return { target };
}

// ── Query generators ───────────────────────────────────────────

function verticalQueries(target) {
  return [
    `${target} 发展历程 起源`,
    `${target} 发展历程 里程碑事件`,
    `${target} 融资历史 投资方 估值`,
    `${target} 战略转型 产品重大更新`,
    `${target} 2025 2026 最新动态 现状`,
    `"${target}" site:36kr.com OR site:latepost.com`,
  ];
}

function horizontalQueries(target) {
  return [
    `${target} 竞品分析 对比`,
    `${target} 替代品 类似产品 推荐`,
    `${target} vs competitor comparison`,
    `${target} 用户评价 优缺点 知乎 OR Reddit`,
    `${target} GitHub stars issues alternatives`,
    `${target} 市场份额 行业报告 2025`,
  ];
}

function sourceQueries(target) {
  return [
    `${target} 官方博客 OR 官方公告`,
    `${target} 创始人 公开演讲 访谈`,
    `${target} 用户吐槽 痛点 问题 site:zhihu.com OR site:v2ex.com`,
  ];
}

// ── Main ───────────────────────────────────────────────────────

function main() {
  const { target } = parseArgs();

  console.log(`\n========================================`);
  console.log(`  hv-analysis 搜索建议: ${target}`);
  console.log(`========================================\n`);

  console.log(`--- 纵轴（时间线）---`);
  verticalQueries(target).forEach((q, i) => console.log(`  [V${i + 1}] ${q}`));

  console.log(`\n--- 横轴（竞品对比）---`);
  horizontalQueries(target).forEach((q, i) => console.log(`  [H${i + 1}] ${q}`));

  console.log(`\n--- 一手来源补充 ---`);
  sourceQueries(target).forEach((q, i) => console.log(`  [S${i + 1}] ${q}`));

  console.log(`\n--- 使用提示 ---`);
  console.log(`  1. 按编号顺序搜索，V轴优先（确定脉络再对比）`);
  console.log(`  2. 每个搜索只看前 3 条结果，避免信息过载`);
  console.log(`  3. 一手来源 > 二手分析 > 转载`);
  console.log(`  4. 搜不到的标「暂缺」，不编造\n`);
}

main();
