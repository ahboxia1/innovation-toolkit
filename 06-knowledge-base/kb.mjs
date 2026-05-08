// knowledge-base 读写工具
// 用法：
//   node kb.mjs add --name "AI会议纪要助手" --status reviewed --score 5.8 --tags "AI,会议,效率"
//   node kb.mjs list                              // 列出所有idea
//   node kb.mjs search "会议"                     // 按关键词搜索
//   node kb.mjs stats                             // 统计数据

import fs from 'fs';
import path from 'path';

const KB_FILE = path.join(path.dirname(import.meta.url.replace('file:///', '')), 'ideas.json');

function load() {
  if (!fs.existsSync(KB_FILE)) return [];
  return JSON.parse(fs.readFileSync(KB_FILE, 'utf-8'));
}

function save(data) {
  fs.writeFileSync(KB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function add(args) {
  const getArg = (name) => args[args.indexOf('--' + name) + 1];
  const idea = {
    id: Date.now(),
    name: getArg('name') || '未命名',
    status: getArg('status') || 'draft',
    score: parseFloat(getArg('score')) || null,
    tags: (getArg('tags') || '').split(',').map(t => t.trim()).filter(Boolean),
    source: getArg('source') || null,
    date: new Date().toISOString().slice(0, 10),
  };
  const data = load();
  data.push(idea);
  save(data);
  console.log(`Added: #${idea.id} ${idea.name} [${idea.status}]`);
}

function list() {
  const data = load();
  if (data.length === 0) { console.log('No ideas yet.'); return; }
  console.log(`Total: ${data.length} ideas\n`);
  for (const idea of data) {
    const score = idea.score ? ` (${idea.score}/10)` : '';
    console.log(`#${idea.id} ${idea.name} [${idea.status}]${score} ${idea.date}`);
  }
}

function search(keyword) {
  const data = load();
  const results = data.filter(i =>
    i.name.includes(keyword) ||
    (i.tags || []).some(t => t.includes(keyword)) ||
    (i.source || '').includes(keyword)
  );
  if (results.length === 0) { console.log(`No results for "${keyword}"`); return; }
  console.log(`Found ${results.length} matches for "${keyword}":\n`);
  for (const idea of results) {
    console.log(`#${idea.id} ${idea.name} [${idea.status}] ${idea.date}`);
  }
}

function stats() {
  const data = load();
  const byStatus = {};
  for (const i of data) {
    byStatus[i.status] = (byStatus[i.status] || 0) + 1;
  }
  console.log(`Total ideas: ${data.length}`);
  for (const [status, count] of Object.entries(byStatus)) {
    console.log(`  ${status}: ${count}`);
  }
}

const [,, cmd, ...rest] = process.argv;
switch (cmd) {
  case 'add': add(rest); break;
  case 'list': list(); break;
  case 'search': search(rest[0] || ''); break;
  case 'stats': stats(); break;
  default: console.log('Usage: node kb.mjs <add|list|search|stats>');
}
