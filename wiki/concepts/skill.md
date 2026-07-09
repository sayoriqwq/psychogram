# Skill

## Definition

Skill 是稳定 workflow 被投射到某个 runtime 后形成的可执行能力，例如 Codex skill 或其他 agent runtime 能力。

## Is not

Skill 不是 psychogram 当前阶段的 source of truth，也不是必须提前创建的目录结构。

## Role in psychogram

Psychogram 先用 Markdown workflow 固化语义和流程，未来在流程足够稳定后，再考虑把 lint、ingest 或 query 投射成 skill。

## Common confusions

- 不要因为某个 runtime 支持 skill，就提前让 skill 决定理论结构。
- Skill 应从 workflow 生成或同步，而不是替代 workflow。

## Related

- [[workflow]]
- [[projection]]
- [[../questions/when-should-workflow-become-skill]]
- [[../tensions/workflow-doc-vs-runtime-skill]]
