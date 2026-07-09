# Workflow: Query

## Purpose

基于 psychogram wiki 回答问题，并判断回答中是否产生值得写回主库的内容。

## Read first

1. [[../../glossary]]
2. [[../lead]]
3. [[../../agents/roles/query]]
4. [[../../index]]
5. 与问题相关的目标页面和 Related links。

## Steps

1. 先读 `index.md`，确定相关页面范围。
2. 读取相关 concept、claim、question、tension 和 workflow 页面。
3. 基于 wiki 回答问题；不要把未记录的猜测包装成 wiki 事实。
4. 标出回答依赖的关键页面链接。
5. 判断回答是否产生可复用内容。
6. 如果回答值得写回，更新对应页面或新建合适页面。
7. 如果 wiki 有变化，更新 `index.md` 并追加 `log.md`。

## File-back criteria

回答满足任一条件时，应考虑写回：

- 回答了开放 question。
- 澄清或改变了 tension 的 resolution。
- 形成可复用 claim 或挑战既有 claim。
- 改进了 ingest、query、lint 或辅助 workflow。
- 产生未来会反复使用的比较、分类或判断标准。

## Do not file back

- 只服务当前上下文的临时解释。
- 没有稳定价值的措辞优化。
- 未经证据或作者确认的强判断。

## Done when

- 回答明确基于已读 wiki 页面。
- 可复用内容已按需写回。
- 若发生写回，index/log 已更新。

## Related

- [[ingest]]
- [[update-index-and-log]]
- [[../claims/good-query-answers-should-be-filed-back]]
- [[../questions/when-should-query-answers-be-filed-back]]
