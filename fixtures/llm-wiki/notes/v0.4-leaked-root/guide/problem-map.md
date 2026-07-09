# Problem Map

## Open questions

- [[../wiki/questions/what-counts-as-source-when-input-is-thought]]
- [[../wiki/questions/when-should-query-answers-be-filed-back]]
- [[../wiki/questions/how-much-context-should-an-agent-read]]
- [[../wiki/questions/when-should-workflow-become-skill]]

## Working answers

- 输入来自当前想法或聊天时，不默认长期保存原文；只有能改变主库结构或判断的内容才进入 `wiki/`。
- query answer 是否写回，取决于它是否可复用、是否稳定、是否改变 claim/question/tension/workflow。
- agent 上下文读取应先按 `AGENTS.md` 的 read order 走，再根据任务读取目标页面。
- workflow 先作为 Markdown source of truth，稳定后再考虑 skill 化。

## Active tensions

- [[../wiki/tensions/compounding-vs-clutter]]
- [[../wiki/tensions/simple-structure-vs-expressive-power]]
- [[../wiki/tensions/human-readable-vs-agent-readable]]
- [[../wiki/tensions/workflow-doc-vs-runtime-skill]]
- [[../wiki/tensions/semantic-agent-role-vs-runtime-subagent]]

## Provisionally resolved tensions

- 当前阶段选择简单目录结构，而不是额外扩展层。
- 当前阶段选择 workflow 文档作为 source of truth，而不是立刻创建 runtime skills。

## Question–tension clusters

- [[../wiki/questions/when-should-query-answers-be-filed-back]] ↔ [[../wiki/tensions/compounding-vs-clutter]]
- [[../wiki/questions/how-much-context-should-an-agent-read]] ↔ [[../wiki/tensions/human-readable-vs-agent-readable]]
- [[../wiki/questions/when-should-workflow-become-skill]] ↔ [[../wiki/tensions/workflow-doc-vs-runtime-skill]]

## Related

- [[start-here]]
- [[theory-map]]
- [[../wiki/lead]]
