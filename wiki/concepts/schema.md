# Schema

## Definition

Schema 是约束 agent 如何维护 wiki 的规则层。在 psychogram 中，顶层 schema 主要由 `AGENTS.md`、`agents/router.md`、角色文件和 workflow 文件共同构成。

## Is not

它不是数据库 schema，也不是某个 runtime 的配置文件。

## Role in psychogram

Schema 把通用聊天模型约束为 wiki maintainer：先读什么、能写什么、何时建页、何时更新 index/log、什么不该做。

## Common confusions

- 不应把 projection 当成 schema 的来源。
- 不应把 README 写成维护协议；README 面向外部读者。

## Related

- [[psychogram]]
- [[agent]]
- [[workflow]]
- [[projection]]
