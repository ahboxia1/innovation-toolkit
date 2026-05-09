<div align="center">

# Innovation Toolkit

### 创新脚手架

**三步，从模糊想法到能立项的一页纸。**

基于 Stanford d.school 设计思维前三阶段，为 Claude Code 蒸馏。

`Design Thinking` `AI Native` `Claude Code Skill`

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude-Code-orange?logo=anthropic)](https://claude.ai/code)
[![d.school](https://img.shields.io/badge/methodology-d.school-9B59B6)](https://dschool.stanford.edu/resources)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js)](https://nodejs.org)

</div>

---

## How it works

```
  Step 0          Step 1            Step 2            Step 3
  引导      ──▶  Empathize    ──▶   Define     ──▶   Ideate
（你是谁？）      （摸清赛道）       （定义问题）       （想出方案）
                   行业扫描           POV + HMW         立项一页纸
                                        │
                                  ┌─────┴─────┐
                              方向验证Gate
                            不通过 → 打回 Step 2
```

> 不是最后让 AI 润色，而是**从第一天就跟 AI 一起想、一起被挑战、一起迭代。**

---

## Features

| Module | What it does | Trigger |
|--------|-------------|---------|
| **00-onboard** | 引导 — 不知道从哪开始？先聊你是谁 | `创新脚手架` |
| **01-research** | 双轴行业调研（时间线 + 竞品对比） | `调研一下XX赛道` |
| **02-define** | POV + HMW + 四巨头方向验证 gate | `帮我把问题说清楚` |
| **03-ideate** | 发散方案 → 收敛到立项一页纸 | `帮我想方案` |
| **04-pitch** | 一页纸 → HTML 路演展示页（3种风格） | `做个路演展示` |
| **05-review** | 四巨头完整版评审（雷达图 + 深度分析） | `帮我审一下这个idea` |
| **06-knowledge-base** | 组织创新记忆，避免重复造轮子 | `历史idea` |

### Two Gates

| Gate | Where | What | Stops |
|------|-------|------|-------|
| **Direction Gate** | Step 2 → 3 | 四巨头快审 | Wrong direction |
| **Duan Yongping Gate** | Step 3 output | Commercial feasibility | Unviable proposal |

---

## Quick Start

```bash
# Clone
git clone https://github.com/ahboxia1/innovation-toolkit.git

# Install
cd innovation-toolkit
# Windows:
install.bat
# Mac / Linux:
chmod +x install.sh && ./install.sh

# Verify
node scripts/check-env.mjs
```

Then open Claude Code and say:

```
创新脚手架
```

---

## Project Structure

```
innovation-toolkit/
├── SKILL.md                    # Entry point
├── README.md                   # This file
├── LICENSE                     # MIT
├── install.bat / install.sh    # One-click install
│
├── 00-onboard/                 # Step 0: Guidance
├── 01-research/                # Step 1: Industry research
│   ├── spider.mjs              #   Playwright web scraper
│   └── templates/              #   HTML report template
├── 02-define/                  # Step 2: Problem definition
│   └── templates/              #   POV card template
├── 03-ideate/                  # Step 3: Ideation
│   └── templates/              #   Proposal template
├── 04-pitch/                   # Optional: Pitch deck
│   └── templates/              #   3 visual styles
├── 05-review/                  # Optional: Full review
│   ├── personas/               #   Buffett / Musk / Naval / Karpathy
│   └── templates/              #   Radar chart + review cards
├── 06-knowledge-base/          # Optional: Org memory
├── presentation/               # Demo & presentation materials
│   ├── user-story.md           #   Full walkthrough (2 gate rejections)
│   ├── research-report.html    #   Step 1 output sample
│   ├── proposal-one-pager.html #   Step 3 output sample
│   ├── pitch-deck.html         #   04-pitch output sample
│   └── review-report.html      #   05-review output sample
└── references/                 # Methodology source docs
```

---

## Methodology & Credits

Built on top of these open-source projects and methodologies:

| Source | Usage | License |
|--------|-------|---------|
| [Stanford d.school Bootleg](https://dschool.stanford.edu/resources) | Framework (Empathize → Define → Ideate), POV, HMW | — |
| [hv-analysis](https://github.com/KKKKhazix/khazix-skhazix-skills/tree/main/hv-analysis) by 数字生命卡兹克 | Dual-axis research method | MIT |
| [buffett-perspective](https://github.com/will2025btc/buffett-perspective) | Buffett persona distillation | — |
| [elon-musk-skill](https://github.com/alchaincyf/elon-musk-skill) | Musk persona distillation | — |
| [naval-skill](https://github.com/alchaincyf/naval-skill) | Naval persona distillation | — |
| [karpathy-skill](https://github.com/alchaincyf/karpathy-skill) | Karpathy persona distillation | — |
| [nuwa-skill](https://github.com/alchaincyf/nuwa-skill) by 花叔 | Persona framework methodology | MIT |
| [段永平雪球问答](https://xueqiu.com/u/6199573275) | Commercial feasibility filter | — |

<div align="center">

---

**MIT License** · Made with Claude Code

</div>
