# Workflow

## Definition

Workflow 是 agent 可执行的维护流程。psychogram v0.4 的主流程是 ingest、query 和 lint，辅助流程是 update-glossary 与 update-index-and-log。

## Is not

Workflow 不是必须立刻程序化的 runtime skill，也不是一次性任务清单。

## Role in psychogram

Workflow 把维护行为写成可重复的 Markdown source of truth，使人、agent、Obsidian 和 git 都能读取。

## Common confusions

- 稳定 workflow 可以被投射成 skill，但 skill 不能反向成为主规则。
- Query 也是 workflow，因为有价值答案可能写回 wiki。

## Related

- [[skill]]
- [[projection]]
- [[../workflows/ingest]]
- [[../workflows/query]]
- [[../workflows/lint]]
