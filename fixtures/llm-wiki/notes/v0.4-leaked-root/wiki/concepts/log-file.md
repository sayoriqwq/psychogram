# Log File

## Definition

`log.md` 是按时间记录 wiki 演化的语义日志。它记录 ingest、query 写回、lint、结构调整和重大理论决策。

## Is not

它不是 git diff 的替代品，也不是每个小拼写修复的流水账。

## Role in psychogram

Log 让 agent 和作者理解最近发生了什么、为什么发生，以及哪些结构选择已经被采纳。

## Common confusions

- Git 记录文件变化；log 记录语义事件。
- Log 应 append-only，避免改写历史判断，除非明确修正错误。

## Related

- [[index-file]]
- [[../workflows/update-index-and-log]]
- [[../../log]]
