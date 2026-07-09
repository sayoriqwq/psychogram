# Psychogram 总纲

> 版本：v0.4  
> 状态：已定稿为第一版可实现架构  
> 用途：说明 psychogram 作为一个理论 wiki 系统的目录、页面类型、维护规则、Obsidian 使用方式和 agent 分工方式。

---

## 1. 一句话定义

**Psychogram** 是一个由 agent 维护、由作者在 Obsidian 中阅读和判断的理论 wiki 系统。它把当前输入、聊天讨论、NOTE.md 或临时想法吸收到一个稳定、互联、可持续维护的 Markdown 主库中。

它不是普通笔记库，也不是聊天记录仓库；它是一套把思想持续编织成可读、可查询、可争论、可演化理论主库的结构。

---

## 2. 继承自 LLM-wiki 的核心骨架

Psychogram 保留 LLM-wiki 理论的承重结构：

1. **Persistent wiki**：知识不是每次 query 时重新综合，而是被维护进一个持久 wiki。
2. **Compounding artifact**：wiki 会因为每次输入、每次好问题、每次有价值回答而复利。
3. **Agent-maintained**：作者负责方向、判断和问题；agent 负责整理、链接、更新、检查和维护。
4. **Schema / AGENTS.md**：通过顶层维护协议把 agent 从普通聊天模型约束为 wiki maintainer。
5. **Ingest / Query / Lint**：三条主 workflow 构成系统运转方式。
6. **index.md / log.md**：前者是内容索引，后者是时间线。
7. **Obsidian as IDE**：Obsidian 是作者浏览、检查、理解 wiki 的界面；Markdown repo 是知识 codebase。

Psychogram 的变化在于：它不默认维护长期 raw source 层，也不维护长期 distill 层。对于源于作者脑中、聊天上下文或临时 NOTE 的理论建设，输入只是短期原材料；真正目标是把内容吸收到稳定主库。

---

## 3. 总目录结构

```text
psychogram/
  README.md
  AGENTS.md
  glossary.md
  index.md
  log.md

  _staging/
    current.md

  guide/
    start-here.md
    theory-map.md
    problem-map.md

  wiki/
    lead.md

    concepts/
    claims/
    questions/
    tensions/
    workflows/

  agents/
    router.md

    roles/
      ingest.md
      query.md
      lint.md
      glossary.md
      maintainer.md

    projections/
      codex.md
```

---

## 4. 顶层文件职责

### `README.md`

面向第一次接触这个项目的外部读者。

它只回答：

- psychogram 是什么？
- 这个 repo 怎么读？
- 外人应该从哪里开始？
- 这个项目不是什么？

`README.md` 不承担作者日常导航，也不承担 agent 维护规则。它应该简短、外向、低门槛。

---

### `AGENTS.md`

面向所有 agent。

它是 psychogram 的维护协议，也就是 schema 层。它说明：

- agent 的角色是什么；
- 哪些文件必须先读；
- 哪些目录代表主库、导航、临时区、agent 分工；
- 什么情况下创建概念、主张、问题、张力、workflow；
- 每次实质修改后如何更新 `index.md` 和 `log.md`；
- `_staging/current.md` 为什么必须短命；
- agent 不应该做什么。

`AGENTS.md` 不应该写成长论文。它只保存所有 agent 每次都必须遵守的规则。

---

### `glossary.md`

面向人和 agent 的术语一致性契约。

每个关键术语使用固定格式：

```markdown
## Term
**Is:** ...  
**Is not:** ...  
**Location / Page type:** ...
```

`glossary.md` 不是百科。它只负责避免误解。

必须包含的核心词：

- Psychogram
- wiki / 主库
- lead
- staging
- guide
- agent
- workflow
- concept
- claim
- assertion
- question
- tension
- index
- log
- skill
- projection

---

### `index.md`

内容导向索引。

它是 agent 查询 wiki 时的第一入口，也是作者快速定位页面的目录。每个重要页面一行：

```markdown
- [[wiki/claims/wiki-is-a-compounding-artifact]] — wiki 的价值来自持续维护后的知识复利。
```

`index.md` 应该随着新增页面和重要修改持续更新，但不需要成为复杂数据库。

---

### `log.md`

时间顺序记录。

它记录 ingest、query 后写回、lint、结构调整、重大理论决策。它不替代 git；git 记录 diff，`log.md` 记录语义事件。

推荐格式：

```markdown
## [2026-07-09] architecture | finalize psychogram v0.4
- Use `wiki/lead.md` instead of `wiki/foundations/` or `wiki/spine.md`.
- Keep `guide/` author-facing and `README.md` external-facing.
```

---

## 5. `_staging/`：短期吸收区

```text
_staging/current.md
```

`_staging` 只保存当前还没吸收到 wiki 的材料。它可以来自：

- 当前聊天上下文；
- 作者丢给 agent 的 NOTE.md；
- 临时想法；
- 一次尚未处理完的讨论；
- agent 当前工作中的 pending items。

规则：

1. `_staging` 不是长期 capture 层。
2. `_staging` 不是长期 distill 层。
3. `_staging/current.md` 的目标是被清空或压缩。
4. 能进入主库的内容尽快进入 `wiki/`。
5. 不稳定但重要的内容进入 `questions/` 或 `tensions/`。
6. 没有长期价值的内容直接丢弃，不必治理。

推荐模板：

```markdown
# Current Staging

## Pending input

## Candidate wiki updates

## Candidate questions

## Candidate tensions

## To merge

## To discard
```

---

## 6. `guide/`：作者入口

`guide/` 面向作者，不面向外人，也不承担 agent runtime 配置。

它是作者在 Obsidian 中进入 wiki 的导航层。

```text
guide/
  start-here.md
  theory-map.md
  problem-map.md
```

### `guide/start-here.md`

作者打开 Obsidian vault 时的首页。

它应该包含：

- 当前 psychogram 的一句话说明；
- 推荐阅读顺序；
- 当前最重要的 claims；
- 当前最重要的 questions；
- 当前最重要的 tensions；
- 最近一次重要 log 链接。

### `guide/theory-map.md`

理论结构图，不是全量目录。

它展示：

- LLM-wiki 核心 loop；
- psychogram 的核心结构；
- concept / claim / question / tension / workflow 之间的关系；
- 哪些页面是理解该理论的 hub。

### `guide/problem-map.md`

问题和张力地图。

它集中展示：

- 当前开放问题；
- 已有临时回答的问题；
- 当前核心 tension；
- 已有阶段性 resolution 的 tension；
- 哪些 question / tension 互相连接。

---

## 7. `wiki/`：主库

`wiki/` 是当前被维护的理论主库。它不是原始输入仓库，也不是中间态仓库。

```text
wiki/
  lead.md
  concepts/
  claims/
  questions/
  tensions/
  workflows/
```

---

### `wiki/lead.md`

`lead.md` 是主库的中轴入口页。它替代之前讨论过的 `foundations/` 或 `spine.md`。

它回答：

- 这个理论是什么？
- 它为什么存在？
- 它不是什么？
- 它的核心 loop 是什么？
- 它目前接受哪些结构？
- 应该先读哪些页面？

推荐结构：

```markdown
# Lead

## One-sentence thesis

## What this system is

## What this system is not

## Core loop
Input → Ingest → Wiki Update → Query → File Back → Lint → Wiki Update

## Core page types
- [[concepts]]
- [[claims]]
- [[questions]]
- [[tensions]]
- [[workflows]]

## Read next
- [[../glossary]]
- [[../guide/theory-map]]
- [[../guide/problem-map]]
```

---

## 8. 主库页面类型

### `concepts/`

概念页解释关键术语。

它和 `glossary.md` 的区别是：

- `glossary.md` 负责短定义和边界；
- `concepts/` 负责展开解释、关联页面、常见误解。

只给关键概念建页，不给每个词建页。

---

### `claims/`

claim 是理论承重主张。

**Claim is:** 理论需要为之承担论证责任的核心判断。  
**Claim is not:** 任意一句陈述、事实、定义、局部判断。

只有满足以下条件时才建 claim 页：

- 会被反复引用；
- 会被挑战；
- 会影响 workflow；
- 会回应或解决重要 tension；
- 是理论骨架；
- 一旦误解会导致 agent 行为跑偏。

普通 assertion 不建页，只写在正文里。

---

### `questions/`

question 是理论中尚未回答、但会影响理解、设计或行动的问题。

每个 question 页必须包含：

```markdown
## Why this is a question
```

写不出为什么它是问题，就不应该建页。

Question 的方向是：寻找当前答案。

---

### `tensions/`

Tension 是两个合理要求之间的持续拉扯。

它不是普通问题，也不是 bug。它的典型形态是：

```text
X vs Y
```

每个 tension 页必须包含：

```markdown
## Pole A
## Pole B
## Why they conflict
## Current resolution
## Tradeoff
## Revisit when
```

Tension 的方向是：记录取舍、代价和阶段性解决方式。

---

### `workflows/`

workflow 是 agent 可执行的维护流程。

主 workflow 只保留三条：

```text
ingest.md
query.md
lint.md
```

辅助 workflow：

```text
update-glossary.md
update-index-and-log.md
```

workflow 先用 Markdown 文档描述，不急着做成 runtime skill。

---

## 9. Assertion / Claim / Question / Tension 的边界

### Assertion

Assertion 是页面正文中的句子级判断。

例：

```text
_staging/current.md 应该保持短命。
```

它不建目录，不一定建页。

### Claim

Claim 是理论承重主张。

例：

```text
wiki 的价值来自持续维护后的知识复利，而不是单纯保存信息。
```

它值得建页，因为它会影响整个系统如何设计和维护。

### Question

Question 是缺答案。

例：

```text
什么时候一个 query answer 应该写回 wiki？
```

它需要回答判断标准。

### Tension

Tension 是两个好东西互相拉扯。

例：

```text
知识复利 vs wiki 污染。
```

它需要记录当前取舍。

一句话区分：

> Assertion 是一句判断；Claim 是理论为之负责的判断；Question 要答案；Tension 要取舍。

---

## 10. `agents/`：agent 分工与投射机制

`agents/` 面向 agent 分工，但不直接绑定某个 runtime。

```text
agents/
  router.md

  roles/
    ingest.md
    query.md
    lint.md
    glossary.md
    maintainer.md

  projections/
    codex.md
```

### `agents/router.md`

负责把用户意图路由到合适的 role 和 workflow。

例：

```markdown
## Intent: ingest current input
Role: [[roles/ingest]]  
Workflow: [[../wiki/workflows/ingest]]

## Intent: answer from wiki
Role: [[roles/query]]  
Workflow: [[../wiki/workflows/query]]

## Intent: health check
Role: [[roles/lint]]  
Workflow: [[../wiki/workflows/lint]]
```

### `agents/roles/*.md`

定义不同 agent role 的使命、读写范围、禁止事项和完成标准。

### `agents/projections/codex.md`

记录如何把 psychogram 的语义层投射到 Codex runtime，例如 custom agents、subagents 或 skills。它不是主规则，只是运行时适配说明。

原则：

> `agents/` 是语义层；runtime 配置是投射层。

---

## 11. Workflow 和 Skill 的关系

三条主 workflow：

```text
ingest
query
lint
```

当前阶段先写成 Markdown 文档。

原因：

1. workflow 还会随理论建设调整；
2. 文档同时适合人、agent、Obsidian、git；
3. 过早 skill 化会让执行层先于理论层固化；
4. runtime 可能变化，不应把理论主库绑死在某个平台。

未来可以把稳定 workflow 投射成 skill。

推荐 skill 化顺序：

```text
lint > ingest > query
```

- `lint` 最适合 skill，因为检查项稳定、可脚本化；
- `ingest` 第二适合，因为流程稳定但判断依赖输入；
- `query` 最晚 skill 化，因为 query 的形态最开放。

原则：

> workflow doc 是 source of truth；skill 是 runtime adapter。

---

## 12. Obsidian 使用原则

Psychogram 应该在没有任何插件时也能工作，但在 Obsidian 中更好用。

### Obsidian 入口

推荐把 `guide/start-here.md` 作为作者首页。

### `guide` 和 `index` 的分工

```text
guide/theory-map.md = 作者理解路径
index.md = 内容索引与 agent 检索入口
```

不要让它们重复。

### 每页保留 `Related`

主库页面底部建议有：

```markdown
## Related
- [[...]]
- [[...]]
```

这比复杂 metadata 更重要。Obsidian 的价值来自链接结构。

### 轻量 frontmatter

可选最小 frontmatter：

```yaml
---
type: question
status: open
updated: 2026-07-09
---
```

不强依赖 Dataview，但未来可用 Dataview 自动生成问题列表、张力列表、最近更新列表。

### Graph view 用于 lint

Graph view 不只是好看。它可以辅助检查：

- orphan pages；
- hub 是否合理；
- claim 是否被连接；
- question 是否连接到 tension；
- workflow 是否连接到 claim 和 glossary。

---

## 13. 明确不做什么

Psychogram v0.4 不做以下事情：

1. 不使用 `canon` 作为术语。
2. 不创建 `foundations/`。
3. 不创建 `applications/`。
4. 不创建 `handoff/`。
5. 不创建 `briefs/`。
6. 不创建 `assertions/`。
7. 不长期维护 capture 层。
8. 不长期维护 distill 层。
9. 不把每个 assertion 页面化。
10. 不把业务 wiki 放进当前 wiki 的 application 子目录。
11. 不一开始创建 runtime-specific skills 或 subagents。

业务 wiki 应该作为另一个 psychogram / LLM-wiki 实例，而不是当前理论 wiki 的子目录。

---

## 14. 当前定稿决策

1. 系统名：**psychogram**。
2. README 面向外部初次接触者。
3. guide 面向作者本人。
4. 主库入口页使用 `wiki/lead.md`。
5. 删除 `foundations/`，不使用 `spine.md`。
6. `_staging/current.md` 是短期吸收区，目标是清空。
7. 主库只保留：`concepts/`、`claims/`、`questions/`、`tensions/`、`workflows/`。
8. `assertion` 只写在正文，不建目录。
9. question 和 tension 都是一等页面类型。
10. question 必须解释为什么这是问题。
11. tension 必须解释两极、冲突、当前取舍和代价。
12. 三条主 workflow 是 ingest、query、lint。
13. workflow 先文档化，未来稳定后再投射为 skill。
14. agent 分工使用 `agents/`，并通过 projection 适配 Codex 等 runtime。
15. Obsidian 通过 `guide/start-here.md`、`theory-map.md`、`problem-map.md`、Related links 和 graph view 支持作者理解。

---

## 15. 最短描述

**Psychogram** 是一个面向理论建设的 LLM-maintained wiki 系统：输入短暂进入 `_staging`，被吸收到 `wiki` 主库，通过 `guide` 被作者理解，通过 `agents` 被 agent 分工执行，并由 `AGENTS.md / glossary.md / index.md / log.md` 保持持续维护、术语一致、内容导航和演化记录。
