#!/usr/bin/env node
/**
 * validate-proposal.mjs
 * 校验立项一页纸 JSON 是否覆盖全部7个必填字段。
 * 用法: node validate-proposal.mjs <proposal.json>
 */

import { readFileSync } from "fs";

const REQUIRED_FIELDS = [
  {
    key: "一句话定义",
    label: "一句话定义",
    minLength: 6,
    vaguePatterns: ["待定", "TODO", "TBD", "暂未确定", "还没想好"],
  },
  {
    key: "问题",
    requiredSubFields: ["谁", "痛点", "现状"],
  },
  {
    key: "方案",
    label: "方案",
    minLength: 10,
  },
  {
    key: "商业模式过滤",
    requiredSubFields: ["价值", "10年检验", "壁垒"],
  },
  {
    key: "目标用户",
    requiredSubFields: ["首批", "规模"],
  },
  {
    key: "需要什么",
    requiredSubFields: ["人", "时间", "其他"],
  },
  {
    key: "第一步",
    label: "第一步（2周MVP）",
    minLength: 10,
  },
];

function loadProposal(path) {
  try {
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch (e) {
    console.error(`读取失败: ${e.message}`);
    process.exit(1);
  }
}

function isVague(text) {
  if (!text || typeof text !== "string") return true;
  const trimmed = text.trim();
  if (trimmed.length < 4) return true;
  // 纯提问语气 = 还是提示语，不是真实内容
  if (trimmed.endsWith("？") || trimmed.endsWith("?")) return true;
  const vague = ["待定", "TODO", "TBD", "暂未确定", "还没想好", "不清楚"];
  return vague.some((v) => trimmed.includes(v));
}

function validate(proposal) {
  const issues = [];

  for (const field of REQUIRED_FIELDS) {
    const value = proposal[field.key];

    // 字段缺失
    if (!value) {
      issues.push(`[缺失] 「${field.key}」未填写`);
      continue;
    }

    // 有子字段的结构
    if (field.requiredSubFields) {
      for (const sub of field.requiredSubFields) {
        if (isVague(value[sub])) {
          issues.push(`[不完整] 「${field.key}.${sub}」内容为空或太模糊`);
        }
      }
      continue;
    }

    // 纯文本字段
    if (typeof value === "string") {
      if (value.trim().length < (field.minLength || 1)) {
        issues.push(`[太短] 「${field.key}」内容不够具体，至少${field.minLength}字`);
      }
      if (field.vaguePatterns?.some((p) => value.includes(p))) {
        issues.push(`[模糊] 「${field.key}」包含占位词，需要填写真实内容`);
      }
    }
  }

  return issues;
}

// --- main ---
const filePath = process.argv[2];
if (!filePath) {
  console.error("用法: node validate-proposal.mjs <proposal.json>");
  process.exit(1);
}

const proposal = loadProposal(filePath);
const issues = validate(proposal);

if (issues.length === 0) {
  console.log("PASS - 立项文档7个必填字段全部就绪，可以进入评审。");
} else {
  console.log("FAIL - 发现以下问题：\n");
  issues.forEach((msg, i) => console.log(`  ${i + 1}. ${msg}`));
  console.log(`\n共 ${issues.length} 个问题，补完后再校验一次。`);
  process.exit(1);
}
