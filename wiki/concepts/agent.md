# Agent

## Definition

Agent 是维护 psychogram wiki 的执行者。它负责读取上下文、整理输入、更新页面、建立链接、维护 index/log，并在 lint 时发现结构问题。

## Is not

它不是作者本人，也不是理论方向的最终裁判。

## Role in psychogram

Agent 通过 `agents/router.md` 进入合适 role，再按 `wiki/workflows/` 中的流程执行维护工作。

## Common confusions

- 语义 role 不等于 runtime subagent。
- Agent 可以建议取舍，但重要理论判断需要作者确认或在 tension 中记录。

## Related

- [[schema]]
- [[workflow]]
- [[projection]]
- [[../tensions/semantic-agent-role-vs-runtime-subagent]]
