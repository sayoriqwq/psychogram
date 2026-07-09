# Projection

## Definition

Projection 是把 psychogram 的语义层适配到具体 runtime 的说明或产物。Codex agents、subagents 或 skills 都可以是 projection。

## Is not

Projection 不是主规则本身，也不应反向决定 `wiki/` 的页面类型。

## Role in psychogram

`agents/projections/` 记录 runtime 适配方式，同时明确 source of truth 仍是 `AGENTS.md`、`agents/router.md`、角色文件和 workflow 文件。

## Common confusions

- 语义 role 可以投射成 runtime subagent，但二者不是同一个层级。
- Projection 应轻量，直到 workflow 足够稳定。

## Related

- [[agent]]
- [[workflow]]
- [[skill]]
- [[../../agents/projections/codex]]
