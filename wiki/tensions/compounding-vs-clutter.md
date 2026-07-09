# Tension: Compounding vs Clutter

## Tension

Psychogram 需要让 wiki 因输入和 query 持续复利，但每次都写入又会制造 clutter。

## Pole A

Compounding：有价值的输入、问题和回答应该沉淀下来，供未来复用。

## Pole B

Clutter control：主库必须保持清晰，避免被一次性判断、原始片段和低价值页面污染。

## Why they conflict

写入越积极，越容易保留潜在价值；但写入越积极，主库越可能变得难读、难查、难维护。

## Current resolution

只把能改变概念、claim、question、tension、workflow 或未来查询路径的内容写入 `wiki/`。短期材料留在 `_staging/current.md`，并在 ingest 后清空或压缩。

## Tradeoff

这个取舍可能丢掉一些边缘想法，但换来主库稳定性和长期可读性。

## Revisit when

当 query 反复需要被丢弃的材料，或 `_staging/` 经常堆积无法清理时，重新审视写入标准。

## Related questions

- [[../questions/when-should-query-answers-be-filed-back]]
- [[../questions/what-counts-as-source-when-input-is-thought]]

## Related claims

- [[../claims/wiki-is-a-compounding-artifact]]
- [[../claims/good-query-answers-should-be-filed-back]]

## Related workflows

- [[../workflows/ingest]]
- [[../workflows/query]]
- [[../workflows/lint]]
