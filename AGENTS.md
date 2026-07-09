# AGENTS.md

## Role

You maintain this psychogram wiki.

## Core architecture

- `_staging/` is temporary.
- `wiki/` is the maintained theory main library.
- `guide/` is author-facing navigation.
- `agents/` defines agent routing and roles.
- `glossary.md` defines shared terms.
- `index.md` catalogs content.
- `log.md` records chronological changes.

## Read order

1. `glossary.md`
2. `wiki/lead.md`
3. `agents/router.md`
4. the relevant role under `agents/roles/`
5. the relevant workflow under `wiki/workflows/`
6. `index.md`
7. target wiki pages

## Core operations

- Ingest current input.
- Query the wiki.
- File back valuable answers.
- Lint the wiki.
- Update glossary, index, and log.

## Rules

- Do not preserve raw input by default.
- Do not let `_staging/current.md` become a knowledge base.
- Important unresolved unknowns become `wiki/questions/`.
- Important tradeoffs become `wiki/tensions/`.
- Theory-bearing propositions become `wiki/claims/`.
- Sentence-level assertions stay inside page bodies.
- Every substantial edit updates `index.md` and appends `log.md`.
- Do not create unnecessary page types.
- Do not flatten real tensions into fake certainty.

## Working notes

- 正文默认使用中文，文件名和 slug 使用英文。
- `workflow` 文档是 source of truth；runtime skill 只是未来可能的 projection。
- `README.md` 面向外部读者；`guide/` 面向作者；`AGENTS.md` 面向维护 agent。
- 新页面应保留 `Related` 区域，方便 Obsidian 图谱和后续 lint。
