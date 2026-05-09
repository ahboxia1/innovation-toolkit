<div align="center">

# 创新脚手架 · Innovation Toolkit

三步，从模糊想法到能立项的一页纸。

基于 Stanford d.school 设计思维前三阶段，为 Claude Code 蒸馏。

`Design Thinking` `AI Native` `Claude Code Skill`

---

</div>

## 安装

```bash
# Windows
install.bat

# Mac / Linux
chmod +x install.sh && ./install.sh
```

环境要求：Claude Code + Node.js >= 18

## 使用

```bash
创新脚手架                              # 从头开始，Step 0 引导
帮我调研一下XX赛道                      # Step 1: 行业研究
帮我把问题说清楚                         # Step 2: 问题定义
帮我想方案 / 写立项一页纸                # Step 3: 方案发散
```

验证安装：`node scripts/check-env.mjs`

## 三步流程

```
Step 0   引导       → 不知道从哪开始？先聊你是谁，给方向
Step 1   Empathize  → 双轴调研（时间线+竞品），千字级行业扫描
Step 2   Define     → POV + HMW + 四巨头方向验证gate
Step 3   Ideate     → 发散方案 → 收敛到立项一页纸（DT/千丁双模板）
```

d.school五步不是瀑布流，可跳可回。后两步（Prototype → Test）交给具体业务场景。

详细说明见 [PRESENTATION.md](PRESENTATION.md)。

## 项目结构

```
innovation-toolkit/
├── SKILL.md                    # 总入口：三步流程指引
├── README.md                   # 本文件
├── PRESENTATION.md             # HR4HR宣讲材料（推荐先读这个）
├── LICENSE                     # MIT License
│
├── 00-onboard/                 # Step 0: 引导（你是谁→给方向→收窄问题）
├── 01-research/                # Step 1: 行业研究
│   ├── SKILL.md                # 双轴分析法 + 输出规范
│   ├── spider.mjs              # Playwright网页爬虫
│   └── templates/              # HTML报告模板
├── 02-define/                  # Step 2: 问题定义
│   ├── SKILL.md                # POV框架 + 方向验证gate
│   └── templates/
├── 03-ideate/                  # Step 3: 方案发散与收敛
│   ├── SKILL.md                # 发散收敛 + DT/千丁双模板 + 段永平Hard Gate
│   └── templates/
│
├── 04-pitch/                   # 可选: 路演材料生成
├── 05-review/                  # 可选: 四巨头完整版评审
│   └── personas/               # 巴菲特 / 马斯克 / 纳瓦尔 / Karpathy
├── 06-knowledge-base/          # 可选: 组织创新记忆
├── references/                 # 方法论原始文档
└── scripts/                    # 工具脚本
```

## 方法论来源

| 来源 | 用途 | 许可 |
|------|------|------|
| [Stanford d.school Bootleg (2018)](https://dschool.stanford.edu/resources) | 整体框架，POV，HMW，发散收敛 | — |
| [hv-analysis](https://github.com/KKKKhazix/khazix-skhazix-skills/tree/main/hv-analysis) by 数字生命卡兹克 | 双轴分析法 | MIT |
| [buffett-perspective](https://github.com/will2025btc/buffett-perspective) | 巴菲特人格蒸馏 | — |
| [elon-musk-skill](https://github.com/alchaincyf/elon-musk-skill) | 马斯克人格蒸馏 | — |
| [naval-skill](https://github.com/alchaincyf/naval-skill) | 纳瓦尔人格蒸馏 | — |
| [karpathy-skill](https://github.com/alchaincyf/karpathy-skill) | Karpathy人格蒸馏 | — |
| [nuwa-skill](https://github.com/alchaincyf/nuwa-skill) by 花叔 | 人物思维框架 | MIT |
| [段永平雪球问答](https://xueqiu.com/u/1247347556) | 商业过滤器（Hard Gate） | — |

融合龙湖内部标准：DT《AI季度探索项目立项与管理办法》、千丁《创新项目敏捷立项机制》。

## 许可

[MIT License](LICENSE)
