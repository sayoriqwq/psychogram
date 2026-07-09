# Workflow: Update Glossary

## Purpose

维护 `glossary.md` 作为术语契约，避免作者和 agent 对核心词产生漂移理解。

## When to add a term

新增术语应满足至少一个条件：

- 它会在多个页面中反复出现。
- 它影响页面类型、workflow 或 agent 行为。
- 它容易被误解。
- 它需要和相近概念区分。

## When to update a term

当 wiki 页面中的用法发生稳定变化，或 lint 发现术语定义与页面内容冲突时，更新 glossary。

## How to write entries

使用固定格式：

```markdown
## Term
**Is:** ...  
**Is not:** ...  
**Location / Page type:** ...
```

`Is` 写正向定义，`Is not` 写边界，`Location / Page type` 写实际落点或页面类型。

## Avoid encyclopedia drift

Glossary 不解释所有背景，不承载完整论证，不替代 concept 页。需要展开时，更新或创建 `wiki/concepts/` 页面，并从 glossary 链过去。

## Done when

- 术语定义短、准、有边界。
- 相关 concept 页和 glossary 不冲突。
- 如有实质变更，index/log 已按需更新。

## Related

- [[ingest]]
- [[lint]]
- [[../concepts/schema]]
- [[../../glossary]]
