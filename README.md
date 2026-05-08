<div align="center">

# 创新脚手架 · Innovation Toolkit

**三步，从模糊想法到能立项的一页纸。**

基于 Stanford d.school 设计思维前三阶段（Empathize → Define → Ideate），为 Claude Code 环境蒸馏。

`Design Thinking` `AI Native` `Claude Code Skill`

---

</div>

## 为什么需要这个？

**不只是工具，是AI native的思维框架。**

传统创新流程：人做研究 → 人写文档 → 人做PPT → 人汇报 → 人被质疑。AI只是最后的润色工具。

AI native流程：**每一步都跟AI协同**——从第一天就跟AI一起想、一起写、一起迭代。用三次对话，养成AI native做项目的习惯。

**核心定位：帮员工从模糊想法走到可立项的一页纸。**

搞懂战场、定义问题、想出方案——三步到位。最终交付物是一张**立项一页纸**，直接对应数科平台（DT）和千丁数科各自的立项机制——AI季度探索（7项一页纸）或蜂巢/敏捷立项（8项商业计划书），拿去就能申报，让创意真正生出商业价值。

---

## 方法论：Stanford d.school 设计思维

基于 [Stanford d.school](https://dschool.stanford.edu/) **设计思维**（Design Thinking Bootleg, 2018）——斯坦福大学哈索·普拉特纳设计学院开发的创新方法论。

d.school的五阶段不是线性瀑布，而是一组可以反复进入的思考模式。本工具包覆盖前三阶段（Empathize → Define → Ideate），后两阶段（Prototype → Test）交给外部。

---

## 三步流程

```
  ┌──────────┐    ┌──────────┐    ┌──────────┐
  │ EMPATHIZE│───▶│  DEFINE  │───▶│  IDEATE  │
  │  (共情)   │    │  (定义)   │    │  (孵化)   │
  └──────────┘    └──────────┘    └──────────┘
   Step 1          Step 2          Step 3
   行业研究         定义问题         发散方案
```

> **非线性。** d.school强调这五步不是严格的线性流程。你可以在Define时发现需要重新Empathize，在Ideate时发现POV定义得不对。本工具包支持从任意步骤进入。

### Step 1 — Empathize / Research（共情 · 行业研究）

> *"Empathy is the foundation of human-centered design."（共情是以人为本设计的基石）— d.school Bootleg*

**做什么：** 快速摸清一个赛道/公司/产品。不是万字研究报告，是**千字级行业扫描**——足够判断"这个方向值不值得深入"。

d.school的共情有三种方式：Observe（观察用户行为）、Engage（与用户对话访谈）、Immerse（穿上用户的鞋走一英里）。本工具包把Observe和Engage转化为AI联网搜索 + Playwright爬虫抓取一手资料。

**不知道从哪开始？** 没关系。系统会先用三个小问题帮你打开思路——关键是把你往**客户痛点和商业机会**方向引，而不是"我工作好烦"：

1. **你最近有没有注意到什么「客户在抱怨但没人解决」的事？** — 三选一 + 自由输入
2. **你在什么业务线/岗位？你直接接触客户吗？** — 帮你找到客户视角
3. **如果让你做一件事让客户愿意付费，你觉得是什么？** — 自由输入，引出研究方向

引导完成后，AI建议研究方向，你确认后进入正式调研。

**正式调研流程：**
1. AI联网搜索，双轴并行收集信息：
   - **纵轴（时间线）**：发展历程、关键节点、当前格局
   - **横轴（竞品对比）**：主要玩家、核心差异、用户口碑
2. 如需深度抓取，启动 Playwright 爬虫
3. 输出千字级行业扫描 HTML 报告

**底层工具：** 横纵分析法 + Playwright 网页爬虫

**触发词：** 「帮我调研一下XX」「行业扫描」「竞品分析」

---

### Step 2 — Define（定义 · 问题定义）

> *"The define mode is when you unpack your empathy findings into needs and insights and scope a meaningful challenge."（定义阶段是将共情发现拆解为需求和洞察，界定有意义的挑战）— d.school Bootleg*

**做什么：** 把调研结果/模糊信息拆解成**needs（需求）和insights（洞察）**，形成POV（Point of View，观点陈述）——一个清晰的问题陈述。

d.school的Define不是简单地说"问题是什么"，而是形成一个独特的设计视角：你在解决谁的什么问题，为什么这个问题值得解决，什么是game-changing的方向。

**POV框架：**
```
1. We met: [你遇到了谁——具体的人，不是笼统的群体]
2. We were surprised to notice: [你惊讶地发现了什么——反直觉的观察]
3. We wonder if this means: [你猜测这意味着什么——深层需求]
4. It would be game-changing to: [如果能怎样将是颠覆性的——方向]
```

**怎么做：**
1. AI帮你从调研结果中提取关键发现
2. 提炼needs和insights
3. 形成POV
4. 从POV推导出"How Might We"问题（我们不妨怎样，发散方案的起点）
5. 触发**方向验证gate**

**底层工具：** d.school POV框架 + HMW问题

**触发词：** 「帮我把问题说清楚」「定义问题」「找到核心痛点」

---

#### 方向验证gate

POV形成后、进入Step 3之前，用四巨头轻量版快速验证方向：

| 评审官 | 快判问题 |
|--------|---------|
| 巴菲特 | 护城河潜力——这个问题被解决了，别人能轻易复制吗？ |
| 马斯克 | 问题该存在吗——是在解决真问题，还是在优化不该存在的流程？ |
| 纳瓦尔 | 杠杆——解决这个问题需要谁的许可？能无需许可地扩展吗？ |
| Karpathy | 数据飞轮——这个问题有没有积累数据、越做越好的潜力？ |

- ✅ 多 → 通过，进入Step 3
- ❌ 多 → 打回Step 2重新定义问题
- 分歧 → 跟用户讨论

**为什么gate放在这里？** 不在错误方向上浪费时间。如果你的POV指向的是"内部效率工具"而不是"有商业价值的客户产品"，纳瓦尔会直接说"没有无需许可的杠杆"，巴菲特会说"零护城河"——趁早打回比做完一页纸再发现强。

---

### Step 3 — Ideate（孵化 · 方案发散与收敛）

> *"Ideate is the mode in which you generate radical design alternatives — a mode of 'flaring' instead of 'focus'."（孵化阶段是生成激进的备选方案——是"发散"而非"收敛"的模式）— d.school Bootleg*

**做什么：** 基于POV和HMW问题发散方案，收敛到一张**立项一页纸**。

d.school的Ideate不是漫无目的地想idea——是**基于定义好的问题发散**。先追求数量和多样性（Go Wide，发散），再收敛到最有潜力的方案（Narrow In，收敛）。

**怎么做：**
1. **发散（Go Wide）**：每个HMW问题至少3个方案，施加约束激发创意
2. **收敛（Narrow In）**：用户投票选出最感兴趣的2-3个方案
3. **深化（Describe Your Concept）**：选中的方案叫什么、为谁做、做什么
4. **输出一页纸**：支持DT（7项）和千丁（8项）两套模板

**Hard Gate：** 输出前必须通过段永平商业过滤器——
- 方案是在解决真问题，还是在找问题来配方案？
- 核心价值能量化吗？（"提升效率"→不合格，"缩短3天→1天"→合格）
- 如果失败了，最大的风险是什么？
- 有没有"不该做但为了创新而做"的部分？

**触发词：** 「帮我想方案」「头脑风暴」「写立项一页纸」

---

## 快速开始

### 环境要求

- **Claude Code** 已安装并可用
- **Node.js** >= 18（Step 1 行业研究的爬虫需要）

### 安装

**Windows：**
```bat
install.bat
```

**Mac / Linux：**
```bash
chmod +x install.sh
./install.sh
```

### 验证

```bash
node scripts/check-env.mjs
```

### 使用

打开 Claude Code，说：

```
创新工具包
```

或者直接跳到任意步骤：
```
帮我调研一下智能家居赛道    # → Step 1 Empathize
帮我把问题说清楚             # → Step 2 Define
帮我想方案 / 写立项一页纸    # → Step 3 Ideate
```

---

## 可选附加模块

以下模块不在核心三步流程中，需要时可单独调用：

| 模块 | 功能 | 触发方式 |
|------|------|---------|
| **04-pitch** | 把一页纸转化为HTML路演展示页（3种风格） | 「做个路演展示」 |
| **05-review** | 四巨头完整版评审（200-400字深度分析 + 雷达图） | 「帮我审一下这个idea」 |
| **06-knowledge-base** | 组织创新记忆，记录历史idea避免重复 | 「历史idea」「查一下做过类似的」 |

方向验证gate已经内嵌在Step 2中（轻量版四巨头快审），05-review是完整版。

---

## 项目结构

```
innovation-toolkit/
│
├── SKILL.md                          主入口skill定义，三步流程总指引
├── README.md                         本文件
├── LICENSE                           MIT License
├── install.bat / install.sh          Windows / Mac-Linux 安装脚本
├── .gitignore                        Git忽略规则（node_modules、内部文件等）
│
├── scripts/
│   └── check-env.mjs                 环境健康检查脚本（验证Node.js、Playwright等）
│
├── 01-research/                      Step 1: Empathize（共情 · 行业研究）
│   ├── SKILL.md                         skill定义：引导流程 + 横纵分析法 + 输出规范
│   ├── spider.mjs                       Playwright网页爬虫（支持headless/登录态/指定深度）
│   ├── config.json                      模块配置
│   ├── package.json                     依赖声明（playwright等）
│   ├── setup.bat / setup.sh            爬虫环境初始化脚本
│   ├── scripts/
│   │   ├── build-report.mjs             行业扫描HTML报告生成
│   │   ├── quick-research.mjs           快速研究脚本
│   │   └── research-data-schema.json    研究数据JSON Schema
│   ├── examples/
│   │   └── example-research-data.json   研究数据示例
│   └── templates/
│       └── research-template.html       行业扫描HTML报告模板
│
├── 02-define/                        Step 2: Define（定义 · 问题定义）
│   ├── SKILL.md                         skill定义：POV框架 + 方向验证gate
│   ├── templates/
│   │   └── idea-card-template.html      POV/Idea卡片HTML模板
│   └── scripts/                         实时展示系统（Express + WebSocket）
│       ├── index.js                      Express服务器
│       ├── helper.js                     前端交互脚本
│       ├── frame-template.html           展示框架模板
│       └── package.json                  依赖声明
│
├── 03-ideate/                        Step 3: Ideate（孵化 · 方案收敛）
│   ├── SKILL.md                         skill定义：发散收敛 + DT/千丁双模板 + 段永平Hard Gate
│   ├── config.json                      模块配置（必填字段、本分检查规则等）
│   ├── scripts/
│   │   ├── proposal-template.json        立项模板JSON结构
│   │   └── validate-proposal.mjs         立项文档结构校验
│   ├── examples/
│   │   └── example-proposal.md           立项一页纸示例
│   └── templates/
│       └── proposal-template.html        立项一页纸HTML模板
│
├── 04-pitch/                         可选: 路演材料生成器
│   ├── SKILL.md                         skill定义：五段式结构 + 3种风格
│   ├── config.json                      模块配置
│   ├── scripts/
│   │   ├── build-pitch.mjs              路演HTML构建脚本
│   │   ├── preview.mjs                  浏览器预览脚本
│   │   └── proposal-schema.json         立项数据JSON Schema
│   ├── examples/
│   │   └── example-proposal.json        立项数据示例
│   └── templates/
│       └── pitch-template.html           路演HTML模板（品牌色、渐变、CSS动画、响应式）
│
├── 05-review/                        可选: 四巨头完整版评审
│   ├── SKILL.md                         skill定义：完整评审流程 + HTML报告输出
│   ├── config.json                      模块配置
│   ├── personas/                        四巨头人格文件（方向验证gate也读取此处）
│   │   ├── buffett.md                    巴菲特：护城河、能力圈、安全边际、5分钟规则
│   │   ├── musk.md                       马斯克：渐近极限法、白痴指数、五步算法
│   │   ├── naval.md                      纳瓦尔：杠杆思维、特定知识、无需许可原则
│   │   └── karpathy.md                   Karpathy：Software 3.0、March of Nines、数据飞轮
│   ├── scripts/
│   │   ├── build-review.mjs             评审报告HTML构建脚本
│   │   ├── preview.mjs                  浏览器预览脚本
│   │   ├── radar-calc.mjs               四维雷达图计算
│   │   └── review-schema.json           评审数据JSON Schema
│   ├── examples/
│   │   └── example-review.json          评审数据示例
│   └── templates/
│       └── review-template.html          评审报告HTML模板（雷达图 + 评审官卡片）
│
└── 06-knowledge-base/                可选: 组织创新记忆
    ├── SKILL.md                         skill定义：写入/检索时机 + CLI用法
    ├── ideas.json                       idea记录库（当前为空）
    └── kb.mjs                           增删查改CLI（add/list/search/stats）
```

---

## 方法论来源

| 方法 | 来源 | 用在哪 |
|------|------|--------|
| 设计思维五阶段 | Stanford d.school Bootleg (2018) | 整体框架 |
| POV框架（观点陈述） | d.school Define阶段 | Step 2 |
| HMW问题（我们不妨怎样） | d.school Define → Ideate衔接 | Step 2 → Step 3 |
| 发散收敛（Go Wide / Narrow In） | d.school Ideate阶段 | Step 3 |
| 横纵分析法 | 数字生命卡兹克（MIT License） | Step 1 |
| 段永平商业过滤器 | 雪球公开问答 | Step 3 Hard Gate |
| 四巨头人格蒸馏 | buffett/musk/naval/karpathy skill | Step 2 方向验证gate |

注入了龙湖集团 / 蜂巢创新大赛的内部评审标准。

---

## 许可

[MIT License](LICENSE)

---

*Built with Claude Code, coffee, and design thinking.*
