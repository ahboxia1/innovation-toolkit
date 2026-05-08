---
name: innovation-knowledge-base
description: >
  创新知识库。记录所有经过评审的idea及其结果，形成组织创新记忆。
  当用户提出新idea时，自动检索历史相似idea供参考。
  触发词：「历史idea」「有没有做过类似的」「创新知识库」「查一下历史」
---

# 创新知识库

组织级创新记忆。每次有idea走完流程（特别是经过AI预审），记录下来。
下次有人提类似idea时，可以参考历史——避免重复，也避免遗忘好想法。

## 数据存储

所有idea记录在 `06-knowledge-base/ideas.json`，一个JSON数组。

每条记录：
```json
{
  "id": 1715000000000,
  "name": "AI会议纪要助手",
  "status": "reviewed",
  "score": 5.8,
  "tags": ["AI", "会议", "效率"],
  "source": "DT-AI季度探索-2026Q2",
  "date": "2026-05-08"
}
```

## 写入时机

- idea经过AI预审后 → 自动写入（reviewed状态 + 评审分数）
- 立项通过后 → 更新状态为approved
- 结项后 → 更新状态为completed/failed，记录结果

## 检索时机

- 用户开始创意孵化时 → 搜索相关历史idea，说"之前有人提过类似的方向"
- 用户准备立项时 → 检查有没有重复idea

## 工具

```bash
node 06-knowledge-base/kb.mjs add --name "XX" --status reviewed --score 7.2 --tags "AI,效率"
node 06-knowledge-base/kb.mjs list
node 06-knowledge-base/kb.mjs search "会议"
node 06-knowledge-base/kb.mjs stats
```
