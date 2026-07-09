# LLM-wiki

## Definition

LLM-wiki 是一种让 LLM 增量维护持久 Markdown wiki 的知识管理模式。wiki 会随着新输入、好问题和高价值回答持续复利，而不是每次提问时从原始材料重新开始。

## Is not

它不是普通文件上传问答，也不是只依赖 query-time retrieval 的 RAG 流程。

## Role in psychogram

Psychogram 继承 LLM-wiki 的骨架：persistent wiki、agent-maintained、schema、ingest/query/lint、index/log 和 Obsidian as IDE。

## Common confusions

- LLM-wiki 的重点不是“LLM 能读很多文件”，而是“LLM 持续维护中间层 wiki”。
- raw source 可以重要，但 psychogram v0.4 不默认维护长期 raw source 层。

## Related

- [[psychogram]]
- [[../claims/wiki-is-a-compounding-artifact]]
- [[../workflows/ingest]]
- [[../workflows/query]]
