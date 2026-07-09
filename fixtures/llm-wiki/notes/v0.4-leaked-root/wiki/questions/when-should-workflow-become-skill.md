# Question: When Should Workflow Become Skill?

## Question

什么时候一个 Markdown workflow 应该被投射成 runtime skill？

## Why this is a question

Workflow 文档便于人和 agent 共同维护，但稳定流程最终可能需要更强的 runtime 执行能力。过早 skill 化会固化尚未成熟的理论结构；过晚 skill 化会让重复维护成本偏高。

## Current answer

当 workflow 的输入、步骤、失败模式和完成标准足够稳定，并且重复执行成本明显高于维护文档成本时，再考虑投射成 skill。当前优先顺序是 lint、ingest、query。

## Non-answer

“能做成 skill 就做成 skill”不是答案，因为 runtime 能力不应反向决定理论主库。

## Related claims

- [[../claims/agent-maintenance-reduces-bookkeeping-cost]]

## Related tensions

- [[../tensions/workflow-doc-vs-runtime-skill]]
- [[../tensions/semantic-agent-role-vs-runtime-subagent]]

## Related workflows

- [[../workflows/lint]]
- [[../workflows/ingest]]
- [[../workflows/query]]
