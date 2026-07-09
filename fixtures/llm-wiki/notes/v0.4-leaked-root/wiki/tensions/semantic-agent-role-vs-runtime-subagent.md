# Tension: Semantic Agent Role vs Runtime Subagent

## Tension

Psychogram 需要清楚定义 ingest、query、lint 等语义角色，但这些角色不应被某个 runtime 的 subagent 机制提前绑定。

## Pole A

Semantic agent role：角色应表达维护职责、读写范围和完成标准。

## Pole B

Runtime subagent：具体平台可能需要把角色投射成独立 agent、skill 或命令。

## Why they conflict

语义 role 越抽象，越能跨 runtime；runtime subagent 越具体，越能执行但越容易反向约束系统设计。

## Current resolution

`agents/roles/` 保存语义角色，`agents/projections/` 只记录 runtime 适配。不要把 projection 当作 source of truth。

## Tradeoff

当前需要 agent 自行读取 role 和 workflow，但保留了跨 runtime 的可迁移性。

## Revisit when

当某个 runtime 成为长期主要执行环境，且角色边界已经稳定时，再考虑生成 runtime-specific 配置。

## Related questions

- [[../questions/how-much-context-should-an-agent-read]]
- [[../questions/when-should-workflow-become-skill]]

## Related claims

- [[../claims/agent-maintenance-reduces-bookkeeping-cost]]

## Related workflows

- [[../../agents/router]]
- [[../../agents/projections/codex]]
