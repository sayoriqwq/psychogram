# Question: How Much Context Should an Agent Read?

## Question

Agent 每次维护 psychogram 前应该读取多少上下文？

## Why this is a question

读太少会误改页面、重复建页或错过已有 tension；读太多会浪费上下文，并可能让 agent 被无关材料带偏。Psychogram 需要一个可执行的读取顺序，而不是全量读取。

## Current answer

先遵守 `AGENTS.md` 的 read order：`glossary.md`、`wiki/lead.md`、`agents/router.md`、相关 role、相关 workflow、`index.md`、目标页面。只有任务需要时，再追踪 Related links。

## Non-answer

“把整个 repo 都读一遍”不是可持续答案。

## Related claims

- [[../claims/agent-maintenance-reduces-bookkeeping-cost]]

## Related tensions

- [[../tensions/human-readable-vs-agent-readable]]
- [[../tensions/semantic-agent-role-vs-runtime-subagent]]

## Related workflows

- [[../workflows/query]]
- [[../workflows/lint]]
