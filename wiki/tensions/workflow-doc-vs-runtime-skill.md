# Tension: Workflow Doc vs Runtime Skill

## Tension

Psychogram 的 workflow 需要稳定可执行，但当前理论仍在演化，过早 runtime skill 化会固化结构。

## Pole A

Workflow doc：Markdown 文档适合人、agent、Obsidian 和 git 共同维护。

## Pole B

Runtime skill：稳定流程可以通过 runtime skill 获得更强执行力和一致性。

## Why they conflict

文档灵活但执行依赖 agent 自觉；skill 可执行但会把流程绑定到特定 runtime，并提高修改成本。

## Current resolution

当前以 `wiki/workflows/` 作为 source of truth。未来只有当 workflow 足够稳定时，才通过 `agents/projections/` 记录 skill 化方案。

## Tradeoff

短期会牺牲一些自动化能力，但保护理论结构不被过早固化。

## Revisit when

当某个 workflow 的步骤、输入、错误和完成标准长期稳定，并且重复执行成本明显升高时，考虑 skill 化。

## Related questions

- [[../questions/when-should-workflow-become-skill]]

## Related claims

- [[../claims/agent-maintenance-reduces-bookkeeping-cost]]

## Related workflows

- [[../workflows/lint]]
- [[../workflows/ingest]]
- [[../workflows/query]]
