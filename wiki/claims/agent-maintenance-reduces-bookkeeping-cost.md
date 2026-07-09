# Claim: Agent Maintenance Reduces Bookkeeping Cost

## Claim

Agent 维护能显著降低知识库持续更新的 bookkeeping 成本，让作者把精力放在方向、判断和问题上。

## Why it matters

人类往往不是因为不会思考而放弃 wiki，而是因为链接、归档、更新、查重和清理太耗时。Psychogram 把这部分工作交给 agent，使 wiki 维护成本接近可持续。

## Supports

- [[../concepts/agent]]
- [[../concepts/workflow]]
- [[../workflows/ingest]]
- [[../workflows/lint]]

## Challenges

- Agent 可能误判作者意图。
- Agent 如果不受 schema 约束，可能把 wiki 写成普通 notes folder。
- 维护成本降低不等于可以无限写入。

## Related questions

- [[../questions/how-much-context-should-an-agent-read]]
- [[../questions/what-counts-as-source-when-input-is-thought]]

## Related tensions

- [[../tensions/human-readable-vs-agent-readable]]
- [[../tensions/semantic-agent-role-vs-runtime-subagent]]

## Related workflows

- [[../workflows/ingest]]
- [[../workflows/lint]]
- [[../../agents/router]]
