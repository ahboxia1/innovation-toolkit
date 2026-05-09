<div align="center">

# 创新脚手架

### Innovation Toolkit

**三步，从模糊想法到能立项的一页纸。**

基于 Stanford d.school 设计思维前三阶段，为 Claude Code 蒸馏。

千丁与数科人力团队出品，服务龙湖集团 AI 创新生态。

`设计思维` `AI Native` `Claude Code Skill`

[![MIT 许可证](https://img.shields.io/badge/许可-MIT-blue.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude-Code-orange?logo=anthropic)](https://claude.ai/code)
[![d.school](https://img.shields.io/badge/方法论-d.school-9B59B6)](https://dschool.stanford.edu/resources)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js)](https://nodejs.org)

</div>

---

## 背景与定位

龙湖集团大力推行 AI 创新。千丁和数科已落地创新立项机制：

> **DT** → "AI 季度探索"（3个月周期、最高30万经费、≤3人组队）
> **千丁** → "蜂巢 / 敏捷立项"（2-4周 POC 验证、快速试错）

通道有了，但走到通道口的那段路是断的。"创新"这个词太大了——做调研、定义问题、想方案、写立项文档，门槛高、周期长。好的想法往往死在"不知道从哪下手"。

**千丁与数科人力团队**做了这个创新脚手架：用经过验证的方法论，把"从想法到立项"拆成三步可操作的流程，配上 AI 协同，让员工能把想法变成可以申报的一页纸。

---

## 工作流程

```
  Step 0          Step 1            Step 2            Step 3
  引导      ──▶  共情调研      ──▶   定义问题     ──▶   方案孵化
（你是谁？）      （摸清赛道）       （POV + HMW）      （立项一页纸）
                   行业扫描           方向验证Gate       段永平Gate
                                        │
                                  不通过 → 打回 Step 2
```

> 不是最后让 AI 润色，而是**从第一天就跟 AI 一起想、一起被挑战、一起迭代。**

---

## 功能模块

| 模块 | 功能 | 触发方式 |
|------|------|---------|
| **00-onboard** | 引导 — 不知道从哪开始？先聊你是谁 | `创新脚手架` |
| **01-research** | 双轴行业调研（时间线 + 竞品对比） | `调研一下XX赛道` |
| **02-define** | POV + HMW + 四巨头方向验证 gate | `帮我把问题说清楚` |
| **03-ideate** | 发散方案 → 收敛到立项一页纸 | `帮我想方案` |
| **04-pitch** | 一页纸 → HTML 路演展示页（3种风格） | `做个路演展示` |
| **05-review** | 四巨头完整版评审（雷达图 + 深度分析） | `帮我审一下这个idea` |
| **06-knowledge-base** | 组织创新记忆，避免重复造轮子 | `历史idea` |

### 两道质量关卡

| 关卡 | 位置 | 作用 | 拦什么 |
|------|------|------|--------|
| **方向验证 Gate** | Step 2 → 3 | 四巨头快审方向 | 方向错误 |
| **段永平 Hard Gate** | Step 3 输出前 | 商业可行性检查 | 商业不可行 |

---

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/ahboxia1/innovation-toolkit.git

# 安装
cd innovation-toolkit
# Windows:
install.bat
# Mac / Linux:
chmod +x install.sh && ./install.sh

# 环境检查
node scripts/check-env.mjs
```

然后打开 Claude Code，输入：

```
创新脚手架
```

---

## 项目结构

```
innovation-toolkit/
├── SKILL.md                    # 总入口
├── README.md                   # 本文件
├── LICENSE                     # MIT 许可证
├── install.bat / install.sh    # 一键安装
│
├── 00-onboard/                 # Step 0: 引导模块
├── 01-research/                # Step 1: 行业研究
│   ├── spider.mjs              #   Playwright 网页爬虫
│   └── templates/              #   HTML 报告模板
├── 02-define/                  # Step 2: 问题定义
│   └── templates/              #   POV 卡片模板
├── 03-ideate/                  # Step 3: 方案发散
│   └── templates/              #   立项一页纸模板
├── 04-pitch/                   # 可选: 路演展示
│   └── templates/              #   3种视觉风格
├── 05-review/                  # 可选: 完整评审
│   ├── personas/               #   巴菲特 / 马斯克 / 纳瓦尔 / Karpathy
│   └── templates/              #   雷达图 + 评审卡片
├── 06-knowledge-base/          # 可选: 组织创新记忆
├── presentation/               # 宣讲材料与演示产出物
│   ├── user-story.md           #   完整用户故事（两道Gate打回）
│   ├── research-report.html    #   Step 1 行业扫描报告示例
│   ├── proposal-one-pager.html #   Step 3 立项一页纸示例
│   ├── pitch-deck.html         #   04-pitch 路演展示页示例
│   └── review-report.html      #   05-review 评审报告示例
└── references/                 # 方法论原始文档
```

---

## 方法论来源与致谢

| 来源 | 使用方式 | 许可 |
|------|---------|------|
| [Stanford d.school Bootleg](https://dschool.stanford.edu/resources) | 整体框架、POV、HMW、发散收敛 | — |
| [hv-analysis](https://github.com/KKKKhazix/khazix-skhazix-skills/tree/main/hv-analysis) by 数字生命卡兹克 | 双轴分析法 | MIT |
| [buffett-perspective](https://github.com/will2025btc/buffett-perspective) | 巴菲特人格蒸馏 | — |
| [elon-musk-skill](https://github.com/alchaincyf/elon-musk-skill) | 马斯克人格蒸馏 | — |
| [naval-skill](https://github.com/alchaincyf/naval-skill) | 纳瓦尔人格蒸馏 | — |
| [karpathy-skill](https://github.com/alchaincyf/karpathy-skill) | Karpathy人格蒸馏 | — |
| [nuwa-skill](https://github.com/alchaincyf/nuwa-skill) by 花叔 | 人物思维框架蒸馏 | MIT |
| [段永平雪球](https://xueqiu.com/u/1247347556) | 商业模式过滤器（Hard Gate） | — |

另融合龙湖集团内部评审标准：DT《AI季度探索项目立项与管理办法》、千丁《创新项目敏捷立项机制》及《蜂巢创新大赛设计方案》。

<div align="center">

---

**MIT License** · Made with Claude Code

</div>
