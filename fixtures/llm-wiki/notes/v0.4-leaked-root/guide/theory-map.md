# Theory Map

## Core loop

Input → Ingest → Wiki Update → Query → File Back → Lint → Wiki Update

## LLM-wiki inheritance

Psychogram 继承 LLM-wiki 的核心模式：知识不只在 query 时被临时检索和综合，而是被 agent 持续维护进一个持久 wiki。这个 wiki 是会复利的 artifact，`index.md` 和 `log.md` 分别承担内容导航和演化记录。

## Psychogram structure

- [[../_staging/current]] 暂存当前材料。
- [[../wiki/lead]] 统领主库。
- `wiki/concepts/` 解释关键术语。
- `wiki/claims/` 保存理论承重主张。
- `wiki/questions/` 保存影响理解或行动的开放问题。
- `wiki/tensions/` 保存两个合理需求之间的取舍。
- `wiki/workflows/` 保存 agent 可执行的维护流程。
- `agents/` 保存语义角色、路由和 runtime projection。

## Core concepts

- [[../wiki/concepts/psychogram]]
- [[../wiki/concepts/llm-wiki]]
- [[../wiki/concepts/schema]]
- [[../wiki/concepts/workflow]]
- [[../wiki/concepts/projection]]

## Core claims

- [[../wiki/claims/wiki-is-a-compounding-artifact]]
- [[../wiki/claims/agent-maintenance-reduces-bookkeeping-cost]]
- [[../wiki/claims/good-query-answers-should-be-filed-back]]

## Core workflows

- [[../wiki/workflows/ingest]]
- [[../wiki/workflows/query]]
- [[../wiki/workflows/lint]]

## Related

- [[start-here]]
- [[problem-map]]
- [[../wiki/lead]]
