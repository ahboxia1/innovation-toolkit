# 创新脚手架 · Innovation Toolkit

> 千丁与数科人力团队出品的AI Skill——基于Stanford d.school设计思维，帮员工从模糊想法走到能立项的一页纸。

---

## 背景：让创新真正落地

创新对业务的价值不需要多解释。尤其在AI时代，不创新就是在等死。

公司大力推行AI创新。我们也一直在想：**作为HR团队，除了喊"大家去创新"，还能做什么？**

我们做了两件事：

> **一是建机制。**
> 数科团队已经落地了AI创新立项机制：
> - DT → "AI季度探索"（3个月周期、最高30万经费、≤3人组队）
> - 千丁 → "蜂巢/敏捷立项"（2-4周POC验证、快速试错）
>
> 通道有了。创新想法可以申报，可以拿到资源。

> **二是给工具。**
> 通道有了，但走到通道口的那段路是断的。
>
> "创新"这个词太大了——做调研、定义问题、想方案、写立项文档，门槛高、周期长。好的想法往往死在"不知道从哪下手"。
>
> 所以我们做了这个创新脚手架：用经过验证的方法论，把"从想法到立项"拆成三步可操作的流程，配上AI协同，让员工能把想法变成可以申报的一页纸。

**本次分享的三个insights：**

| # | Insight | 一句话 |
|---|---------|--------|
| 1 | 方法论比热情重要 | 创新需要框架，不能只靠"鼓励" |
| 2 | AI Native是核心思路 | 不是最后让AI润色，而是从第一天就跟AI一起想、一起写、一起迭代。这也正是公司当前AI创新的主旋律 |
| 3 | HR可以做什么 | HR不只是在后面推流程，可以主动搭工具、建机制，直接赋能业务创新 |

---

## 方法论基础：Stanford d.school 设计思维

这个工具包的底层框架来自 **Stanford d.school**（斯坦福哈索·普拉特纳设计学院）的 **设计思维**（Design Thinking）。

**d.school是什么？**

2005年，IDEO创始人David Kelley在斯坦福大学创办了d.school。它提出的五阶段模型：

```
Empathize → Define → Ideate → Prototype → Test
  (共情)      (定义)    (孵化)     (原型)     (测试)
```

这套方法论已成为全球企业创新的事实标准：
- IBM基于它搭建了Enterprise Design Thinking体系，培训数万人
- Google Ventures的Design Sprint也是从这里延伸出来的

**我们为什么只做前三步？**

后两步（Prototype → Test）需要具体业务场景——做产品原型、找真实用户验证。这不是通用工具包能替代的。

前三步的产出是一份**立项一页纸**，拿着它走公司已有的立项流程即可。

> **参考资料**：Stanford d.school, *"Design Thinking Bootleg"*, 2018. https://dschool.stanford.edu/resources

---

## 三步流程

```
  Step 0          Step 1            Step 2            Step 3
  引导      ──▶  Empathize    ──▶   Define     ──▶   Ideate
（你是谁？）      （摸清赛道）       （定义问题）       （想出方案）
                   行业扫描           POV + HMW         立项一页纸
                                        │
                                  ┌─────┴─────┐
                              方向验证Gate
                            不通过→打回Step 2
```

每一步的产出是下一步的输入。不一定从Step 0开始——已经有明确方向的话，可以直接从任意步骤进入。

---

### Step 0 — 引导（不知道从哪开始？）

很多人听到"创新"就愣住了。Step 0不急着问"你想做什么"，先了解你是谁：

1. **你在什么团队/岗位？** → 摸清业务语境
2. **你日常工作主要在忙什么？** → 了解你离客户有多远

然后AI根据你的职能建议2-3个方向。最后收窄到具体问题：

3. **你最近有没有注意到什么「客户在抱怨但没人解决」的事？**
4. **如果让你做一件事让客户愿意付费，你觉得是什么？**

> 从"你是谁" → "大方向" → "具体问题"，逐步收窄。核心原则：**把员工往客户痛点和商业机会方向引导。**

---

### Step 1 — Empathize / 行业研究

> *"Empathy is the foundation of human-centered design."*（共情是以人为本设计的基石）— d.school Bootleg

**目标**：快速摸清一个赛道，判断"这个方向值不值得继续往下走"。

**AI联网做双轴调研：**

| 轴 | 追什么 | 关键问题 |
|----|--------|---------|
| 纵轴（时间线） | 赛道的发展脉络 | 怎么来的？经历了什么关键节点？现在格局如何？ |
| 横轴（竞品对比） | 同期玩家全景 | 谁在做？差异在哪？用户怎么说？ |

需要深挖时，会启动 **Playwright**（网页自动化工具）——自动抓取网页内容，代替手动翻页和复制。

**产出**：一份千字级行业扫描HTML报告，浏览器直接打开。

> **方法论来源**：双轴分析法基于开源项目 hv-analysis（horizontal-vertical analysis，横纵分析）蒸馏而来。hv-analysis 是一套用AI辅助行业研究的结构化方法，核心思路是用两条轴覆盖一个赛道。我们将这套分析框架提取出来，融入Step 1流程。
>
> 作者：数字生命卡兹克 | 许可：MIT License
> 原项目：https://github.com/KKKKhazix/khazix-skhazix-skills/tree/main/hv-analysis

---

### Step 2 — Define / 问题定义

> *"The define mode is when you unpack your empathy findings into needs and insights and scope a meaningful challenge."*（定义阶段是将共情发现拆解为需求和洞察，界定有意义的挑战）— d.school Bootleg

**目标**：把Step 1的调研结果（或用户的模糊想法）拆明白，形成清晰的POV（Point of View，观点陈述）。

AI不会让用户直接填表格。分四步引导：

**第一步：梳理发现**

- 有Step 1调研结果 → AI从中提取关键发现
- 没有 → AI通过对话引导："你在关注什么领域？""哪里不对劲？""谁在承受这个痛点？"

一步步把模糊感觉变成具体描述。

**第二步：提炼Needs和Insights**

AI从描述中区分两个层次：

| | 定义 | 例子 |
|--|------|------|
| **Need（需求）** | 用户需要什么？ | "需要快速找到可用的会议室" |
| **Insight（洞察）** | 为什么还没被满足？反直觉的发现是什么？ | "员工其实不是找不到会议室，是不知道哪个会议室适合当前会议类型" |

> 洞察是POV的灵魂。不是显而易见的事，是反直觉的观察。

**第三步：形成POV**

用d.school的POV框架，把前面的发现组装成一句话问题陈述：

| # | 维度 | 要回答什么 |
|---|------|----------|
| 1 | We met | 你遇到了谁？——具体的人，不是笼统的群体 |
| 2 | Surprised to notice | 你惊讶地发现了什么？——反直觉的观察 |
| 3 | Wonder if this means | 你猜测这意味着什么？——深层需求 |
| 4 | Game-changing to | 如果能怎样将是颠覆性的？——方向 |

**POV必须满足：**
- 描述具体的用户（不是"所有人"）
- 包含有力的洞察（不是显而易见的事）
- 不预设具体解决方案

**第四步：推导HMW问题**

从POV推导出2-3个 **HMW问题**（How Might We，我们不妨怎样）。

HMW是Step 3发散方案的起点。好的HMW要恰好在中间：
- 太窄 → "HMW做一个不滴水的冰淇淋筒"
- 太宽 → "HMW重新设计甜点"
- 恰好 → "HMW让冰淇淋更便携"

---

#### 方向验证Gate

POV形成后，进入Step 3之前，先过一道关卡。

**为什么要在这设一道关？** 趁还没花时间想方案，先用商业视角快速筛一遍。方向不对趁早打回，比做完一页纸再发现成本低得多。

**这四位评审官是怎么来的？**

我们把四位知名企业家/投资人的思维方式**蒸馏**成了AI人格——把他们公开的投资哲学、决策习惯、思维框架提炼成结构化指令，AI激活后就能用那套逻辑来分析问题。这就是"人格蒸馏"。

**为什么选这四个人？** 因为他们分别盯着商业价值的四个不同维度，组合在一起能覆盖大部分方向性错误：

| 评审官 | 他是谁 | 关注维度 | 核心问题 |
|--------|--------|---------|---------|
| **巴菲特** | 伯克希尔·哈撒韦董事长，价值投资代表 | 护城河 | 这个问题被解决了，别人能轻易复制吗？——没有壁垒的方向不值得投入 |
| **马斯克** | Tesla/SpaceX创始人，第一性原理代表 | 第一性原理 | 这问题该存在吗？——你在解决真问题，还是在优化一个不该存在的流程？ |
| **纳瓦尔** | AngelList联合创始人，杠杆理论代表 | 杠杆 | 解决这个问题需要谁的许可？——能无需许可地扩展才有规模效应 |
| **Karpathy** | OpenAI创始成员、AI教育者，数据驱动代表 | 数据飞轮 | 有没有越做越好、数据越积越多的潜力？——没有飞轮的事情做不长 |

**判定规则：**
- 3个以上通过 → 进Step 3
- 2个以上不通过 → 打回Step 2重新定义问题

> **人格来源**：四巨头分别基于以下开源Claude Code Skill蒸馏——
> - 巴菲特：https://github.com/will2025btc/buffett-perspective
> - 马斯克：https://github.com/alchaincyf/elon-musk-skill
> - 纳瓦尔：https://github.com/alchaincyf/naval-skill
> - Karpathy：https://github.com/alchaincyf/karpathy-skill
>
> 每个人格保留了原作者提炼的核心心智模型和表达风格，在本项目中被裁剪为轻量版（方向验证gate，快审）和完整版（05-review模块，深度分析+雷达图）两种形态。

---

### Step 3 — Ideate / 方案发散与收敛

> *"Ideate is the mode in which you generate radical design alternatives."*（构思阶段用来生成大胆的、突破性的备选方案）— d.school Bootleg

**目标**：基于POV和HMW问题发散方案，收敛到一张立项一页纸。

**四步走：**

| 步骤 | 做什么 | 要点 |
|------|--------|------|
| 1. 发散（Go Wide） | 每个HMW问题至少想3个方案 | 施加约束激发创意："预算为零呢？""只能用手机呢？" |
| 2. 收敛（Narrow In） | 选出最感兴趣的2-3个 | 不只选一个，保留多样性 |
| 3. 深化 | 方案叫什么、为谁做、做什么 | 一句话说清核心机制 |
| 4. 输出一页纸 | DT走7项模板，千丁走8项模板 | 结构化立项文档 |

**输出前过段永平Hard Gate：**

| 检查项 | 不合格 | 合格 |
|--------|--------|------|
| 解决真问题？ | 找问题来配方案 | 确实存在痛点 |
| 核心价值能量化？ | "提升效率" | "缩短3天→1天" |
| 风险是什么？ | 没想过 | 想清楚了，教训值得 |
| 有没有为了创新而创新？ | 有凑数部分 | 每一项都有存在理由 |

> 过不了就说，不帮忙粉饰。

**产出**：一份HTML格式的立项一页纸，浏览器直接打开，可打印。

> **方法论来源**：段永平商业过滤器基于段永平在雪球平台的公开投资问答录提炼。段永平是步步高/OPPO/vivo创始人，以"本分"经营理念著称。本项目将他的投资哲学转化为创新项目的商业可行性过滤器。

---

## 质量保障：两道关

| 关卡 | 位置 | 做什么 | 拦什么 |
|------|------|--------|--------|
| 方向验证Gate | Step 2 → Step 3 | 四巨头快审方向 | 拦方向错误——不在错误方向上浪费时间 |
| 段永平Hard Gate | Step 3 输出前 | 商业可行性检查 | 拦商业不可行——不产出漂亮但落不了地的方案 |

---

## 可选附加模块

核心三步之外，需要时单独调用：

| 模块 | 功能 | 触发方式 |
|------|------|---------|
| 04-pitch | 把一页纸转化为HTML路演展示页 | 「做个路演展示」 |
| 05-review | 四巨头完整版评审（深度分析+雷达图） | 「帮我审一下这个idea」 |
| 06-knowledge-base | 组织创新记忆，记录历史idea避免重复 | 「历史idea」 |

> Step 2的方向验证gate用的是四巨头轻量版（快审），05-review是完整版。

完整的用户体验演示见 [user-story.md](presentation/user-story.md)——包含核心三步、两道Gate打回、以及可选模块（路演展示、四巨头完整评审、组织创新记忆）的详细交互过程。

---

## 快速开始

**环境要求**：Claude Code + Node.js >= 18

**安装**：
```bash
# Windows
install.bat

# Mac / Linux
chmod +x install.sh && ./install.sh
```

**使用**：打开Claude Code，说 `创新脚手架` 从头开始，或直接跳到任意步骤：

```bash
帮我调研一下智能家居赛道    # Step 1: 行业研究
帮我把问题说清楚             # Step 2: 问题定义
帮我想方案 / 写立项一页纸    # Step 3: 方案发散
```

---

## 方法论来源与致谢

本工具包基于以下开源项目和方法论构建，在此致谢：

| 来源 | 原始内容 | 本项目使用方式 |
|------|---------|--------------|
| [Stanford d.school](https://dschool.stanford.edu/resources) | Design Thinking Bootleg (2018) | 整体框架（前三阶段），POV框架，HMW问题，发散收敛方法 |
| [数字生命卡兹克](https://github.com/KKKKhazix/khazix-skhazix-skills/tree/main/hv-analysis) (MIT) | hv-analysis 行业分析方法 | 双轴分析法蒸馏（纵轴时间线+横轴竞品对比） |
| [buffett-perspective](https://github.com/will2025btc/buffett-perspective) | 开源Claude Code Skill | 巴菲特人格蒸馏（护城河、能力圈、安全边际等） |
| [elon-musk-skill](https://github.com/alchaincyf/elon-musk-skill) | 开源Claude Code Skill | 马斯克人格蒸馏（第一性原理、五步算法等） |
| [naval-skill](https://github.com/alchaincyf/naval-skill) | 开源Claude Code Skill | 纳瓦尔人格蒸馏（杠杆思维、无需许可原则等） |
| [karpathy-skill](https://github.com/alchaincyf/karpathy-skill) | 开源Claude Code Skill | Karpathy人格蒸馏（数据飞轮、Software 3.0等） |
| [花叔 / nuwa-skill](https://github.com/alchaincyf/nuwa-skill) (MIT) | 开源Claude Code Skill | 人物思维框架蒸馏，用于引导逻辑 |
| [段永平](https://xueqiu.com/u/1247347556) | 雪球平台公开投资问答录 | 商业模式过滤器，转化为Hard Gate |

所有人格蒸馏均保留了原作者提炼的核心心智模型和表达风格，在本项目中被裁剪和重组以适配创新评审场景。

另融合了龙湖集团内部评审标准：DT《AI季度探索项目立项与管理办法》、千丁《创新项目敏捷立项机制》及《蜂巢创新大赛设计方案》。

---

## 许可

[MIT License](LICENSE)

---

## 附录：项目文件结构与说明

```
innovation-toolkit/
│
├── SKILL.md                          # 总入口：定义触发词和三步流程总指引
├── README.md                         # GitHub风格项目说明（面向技术用户）
├── PRESENTATION.md                   # 本文件：HR4HR宣讲材料
├── LICENSE                           # MIT开源许可证
│
├── install.bat / install.sh          # 一键安装脚本（Windows / Mac·Linux）
│
├── scripts/
│   └── check-env.mjs                 # 环境健康检查（Node.js、Playwright等）
│
├── references/
│   └── stanford-dschool-*.md         # d.school设计思维Bootleg原文存档
│
├── 00-onboard/                       # Step 0: 引导模块
│   └── SKILL.md                      #   三层引导（了解你→给方向→收窄问题）
│
├── 01-research/                      # Step 1: 行业研究模块
│   ├── SKILL.md                      #   双轴分析法 + 输出规范
│   ├── spider.mjs                    #   Playwright网页爬虫
│   ├── config.json / package.json    #   配置与依赖
│   ├── setup.bat / setup.sh          #   爬虫环境初始化（安装Chromium）
│   ├── scripts/
│   │   ├── build-report.mjs          #   研究数据 → HTML报告
│   │   ├── quick-research.mjs        #   快速研究辅助
│   │   └── research-data-schema.json #   研究数据结构定义
│   ├── examples/                     #   研究数据示例
│   └── templates/
│       └── research-template.html    #   行业扫描HTML报告模板
│
├── 02-define/                        # Step 2: 问题定义模块
│   ├── SKILL.md                      #   POV框架 + 方向验证gate
│   ├── templates/
│   │   └── idea-card-template.html   #   POV/Idea卡片HTML模板
│   └── scripts/
│       ├── index.js                  #   Express服务器（实时预览）
│       ├── helper.js                 #   前端交互
│       └── frame-template.html       #   展示框架模板
│
├── 03-ideate/                        # Step 3: 方案发散与收敛模块
│   ├── SKILL.md                      #   发散收敛 + DT/千丁双模板 + 段永平Gate
│   ├── config.json                   #   模块配置（必填字段、本分检查等）
│   ├── scripts/
│   │   ├── proposal-template.json    #   立项文档JSON结构
│   │   └── validate-proposal.mjs     #   立项文档校验
│   ├── examples/                     #   立项一页纸示例
│   └── templates/
│       └── proposal-template.html    #   立项一页纸HTML模板
│
├── 04-pitch/                         # 可选: 路演材料生成器
│   ├── SKILL.md                      #   五段式路演结构 + 3种视觉风格
│   ├── scripts/                      #   路演HTML构建 + 预览
│   └── templates/
│       └── pitch-template.html       #   路演HTML模板（品牌色、渐变、动画）
│
├── 05-review/                        # 可选: 四巨头完整版评审
│   ├── SKILL.md                      #   完整评审流程 + HTML报告
│   ├── personas/                     #   四巨头人格文件
│   │   ├── buffett.md                #     巴菲特：护城河、能力圈、安全边际
│   │   ├── musk.md                   #     马斯克：第一性原理、白痴指数、五步算法
│   │   ├── naval.md                  #     纳瓦尔：杠杆思维、无需许可原则
│   │   └── karpathy.md               #     Karpathy：数据飞轮、Software 3.0
│   ├── scripts/                      #   评审报告构建 + 雷达图计算
│   └── templates/
│       └── review-template.html      #   评审报告HTML模板（雷达图+评审官卡片）
│
└── 06-knowledge-base/                # 可选: 组织创新记忆
    ├── SKILL.md                      #   写入/检索时机 + CLI用法
    ├── ideas.json                    #   idea记录库（JSON）
    └── kb.mjs                        #   CLI工具（add/list/search/stats）
```

**关键脚本一览：**

| 文件 | 类型 | 作用 |
|------|------|------|
| spider.mjs | Playwright爬虫 | 自动访问网页、提取内容，用于Step 1深度抓取 |
| build-report.mjs | 报告生成 | 研究数据 → HTML行业扫描报告 |
| build-pitch.mjs | 报告生成 | 立项数据 → HTML路演展示页 |
| build-review.mjs | 报告生成 | 评审数据 → HTML评审报告（含雷达图） |
| radar-calc.mjs | 数据计算 | 四巨头打分 → 雷达图坐标 |
| validate-proposal.mjs | 数据校验 | 检查立项文档是否包含所有必填字段 |
| check-env.mjs | 环境检查 | 验证Node.js版本、Playwright是否就绪 |
| kb.mjs | CLI工具 | 组织创新记忆的增删查改 |
