# Agent Router

## Intent: ingest current input
Role: [[roles/ingest]]  
Workflow: [[../wiki/workflows/ingest]]

## Intent: answer from wiki
Role: [[roles/query]]  
Workflow: [[../wiki/workflows/query]]

## Intent: health check / lint
Role: [[roles/lint]]  
Workflow: [[../wiki/workflows/lint]]

## Intent: maintain glossary
Role: [[roles/glossary]]  
Workflow: [[../wiki/workflows/update-glossary]]

## Intent: general wiki maintenance
Role: [[roles/maintainer]]  
Workflow: [[../wiki/workflows/update-index-and-log]]

## Routing notes

- 如果任务同时包含 ingest 和 query，先 query 现有 wiki，再把新内容按 ingest 写回。
- 如果任务涉及结构健康或缺失链接，使用 lint role。
- 如果任务涉及 runtime 适配，只能更新 projection，不要直接改变 source of truth。

## Related

- [[roles/ingest]]
- [[roles/query]]
- [[roles/lint]]
- [[projections/codex]]
