# Tension: Simple Structure vs Expressive Power

## Tension

Psychogram 需要足够简单的目录结构，也需要表达概念、主张、问题、张力和流程之间的复杂关系。

## Pole A

Simple structure：目录少、页面类型少，agent 更容易遵守，作者更容易浏览。

## Pole B

Expressive power：理论建设需要区分 claim、question、tension、workflow 等不同语义。

## Why they conflict

页面类型越多，表达越精确，但维护规则越复杂；页面类型越少，结构越简单，但不同语义容易混在一起。

## Current resolution

v0.4 只保留 `concepts/`、`claims/`、`questions/`、`tensions/` 和 `workflows/`。Assertion 不建目录，留在正文中。

## Tradeoff

这个结构牺牲了一些细粒度分类，但避免早期 wiki 被目录设计拖慢。

## Revisit when

当某类材料反复无法放入现有页面类型，且混放已经影响 query 或 lint 时，重新审视结构。

## Related questions

- [[../questions/when-should-query-answers-be-filed-back]]

## Related claims

- [[../claims/wiki-is-a-compounding-artifact]]

## Related workflows

- [[../workflows/ingest]]
- [[../workflows/lint]]
