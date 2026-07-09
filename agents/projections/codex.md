# Codex Projection

Psychogram maintains semantic agent roles in `agents/roles/` and workflow docs in `wiki/workflows/`.

Runtime-specific Codex agents, subagents, or skills may be generated from these files later.

Do not treat runtime projection files as the source of truth.

Source of truth:

- `AGENTS.md`
- `agents/router.md`
- `agents/roles/*.md`
- `wiki/workflows/*.md`

## Current stance

当前阶段不创建 `.codex/`、runtime subagents 或 skill 目录。Codex 只应读取这里的语义角色和 workflow，并按当前任务投射执行。

## Future projection candidates

- Lint 最适合优先投射，因为检查项稳定。
- Ingest 可在页面类型和写回标准稳定后投射。
- Query 最晚投射，因为问题形态最开放。

## Related

- [[../router]]
- [[../roles/lint]]
- [[../../wiki/concepts/projection]]
- [[../../wiki/concepts/skill]]
- [[../../wiki/tensions/workflow-doc-vs-runtime-skill]]
