# Tension: Human-readable vs Agent-readable

## Tension

Psychogram 需要对作者在 Obsidian 中好读，也需要对 agent 可执行、可检查、可维护。

## Pole A

Human-readable：页面应该清楚、自然、适合作者阅读和判断。

## Pole B

Agent-readable：页面需要稳定 heading、明确模板和可预测链接，方便 agent 执行 workflow。

## Why they conflict

过多模板会让页面像表格，降低阅读体验；过少结构会让 agent 难以判断页面类型、缺口和维护动作。

## Current resolution

保留轻量模板和稳定 heading，同时用中文正文解释内容。重要页面保留 `Related`，不强依赖复杂 frontmatter 或插件。

## Tradeoff

页面会带有一定结构感，但避免变成只有机器能读的配置文件。

## Revisit when

当作者阅读成本明显升高，或 agent 经常漏掉必填结构时，重新审视模板强度。

## Related questions

- [[../questions/how-much-context-should-an-agent-read]]

## Related claims

- [[../claims/agent-maintenance-reduces-bookkeeping-cost]]

## Related workflows

- [[../workflows/query]]
- [[../workflows/lint]]
- [[../workflows/update-glossary]]
