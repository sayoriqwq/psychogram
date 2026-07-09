# Question: What Counts as Source When Input Is Thought?

## Question

当输入来自作者脑中的想法、聊天上下文或临时 NOTE.md 时，什么算 source？

## Why this is a question

LLM-wiki 常以外部文档为 raw source，但 psychogram 的理论材料经常来自当前思考和对话。如果不定义 source 边界，agent 可能要么过度保存原文，要么丢掉重要语义证据。

## Current answer

当前答案是：psychogram 不默认长期保存 raw input。当前想法和聊天可以作为 ingest 的短期 source，但只有能改变概念、claim、question、tension 或 workflow 的内容才进入 `wiki/`。

## Non-answer

“所有输入都保存下来”不是答案，因为它会把 `_staging/` 变成长期 capture 层。

## Related claims

- [[../claims/wiki-is-a-compounding-artifact]]
- [[../claims/agent-maintenance-reduces-bookkeeping-cost]]

## Related tensions

- [[../tensions/compounding-vs-clutter]]
- [[../tensions/human-readable-vs-agent-readable]]

## Related workflows

- [[../workflows/ingest]]
- [[../workflows/lint]]
