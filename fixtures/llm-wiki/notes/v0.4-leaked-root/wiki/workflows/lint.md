# Workflow: Lint

## Purpose

检查 psychogram wiki 的结构健康度，发现断链、孤页、缺失字段、术语漂移、index/log 漏更新和 stale staging。

## Read first

1. [[../../glossary]]
2. [[../lead]]
3. [[../../agents/roles/lint]]
4. [[../../index]]
5. [[../../log]]
6. [[../../_staging/current]]

## Checks

- Orphan pages: 页面没有合理入口或 Related links。
- Missing Related: 重要页面缺少 `Related` 或等价关联区。
- Questions: question 页缺少 `Why this is a question`。
- Tensions: tension 页缺少 `Pole A`、`Pole B`、`Why they conflict`、`Current resolution`、`Tradeoff` 或 `Revisit when`。
- Claims: claim 页没有 challenges、related questions、related tensions 或 related workflows。
- Glossary: 术语缺少对应页面，或定义与页面正文明显冲突。
- Index: 新页面或重要页面未出现在 `index.md`。
- Log: 实质修改没有在 `log.md` 记录。
- Staging: `_staging/current.md` 保留了已处理或 stale 内容。
- Forbidden structure: 不应出现 guide 禁止的长期 raw、distill 或 assertion 目录。

## Output

Lint 输出应优先列出具体问题、文件路径和建议动作。能直接修的小问题可以修；涉及理论判断的冲突应进入 question 或 tension。

## Done when

- 已列出并修复可确定的问题。
- 无法直接修复的问题已写入合适的 question 或 tension。
- 如果 lint 导致 wiki 变化，index/log 已更新。

## Related

- [[ingest]]
- [[query]]
- [[update-index-and-log]]
- [[../questions/how-much-context-should-an-agent-read]]
