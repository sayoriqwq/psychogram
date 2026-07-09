# Lead

## One-sentence thesis

Psychogram is an agent-maintained, Obsidian-readable theory wiki system for turning current thought and input into a stable, interconnected Markdown main library.

## What this system is

Psychogram 是一个理论建设系统。作者负责方向、判断和接受；agent 负责把当前输入、聊天讨论、NOTE.md 和临时想法整理进一个可读、可查询、可争论、可演化的 Markdown 主库。

它继承 LLM-wiki 的核心思路：wiki 是持续维护的 compounding artifact，而不是每次 query 时重新临时综合的答案。

## What this system is not

Psychogram 不是普通 notes folder，不是聊天记录仓库，不是长期 raw source 层，也不是把所有 assertion 都页面化的知识数据库。它也不把 runtime-specific skill 或 subagent 当作主规则。

## Core loop

Input → Ingest → Wiki Update → Query → File Back → Lint → Wiki Update

## Core page types

- Concepts: [[concepts/psychogram]]
- Claims: [[claims/wiki-is-a-compounding-artifact]]
- Questions: [[questions/when-should-query-answers-be-filed-back]]
- Tensions: [[tensions/compounding-vs-clutter]]
- Workflows: [[workflows/ingest]]

## Current structure

- `_staging/` 保存短期输入，目标是清空或压缩。
- `guide/` 帮助作者在 Obsidian 中重新进入理论。
- `wiki/` 是被维护的理论主库。
- `agents/` 定义 agent 路由、角色和 runtime projection。
- `glossary.md`、`index.md`、`log.md` 分别维护术语、内容目录和演化记录。

## Read next

- [[../glossary]]
- [[../guide/theory-map]]
- [[../guide/problem-map]]
- [[../index]]

## Related

- [[concepts/llm-wiki]]
- [[workflows/ingest]]
- [[workflows/query]]
- [[workflows/lint]]
