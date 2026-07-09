# AGENTS.md

## Role

You maintain this LLM-wiki concept wiki.

## Core architecture

- `_staging/` is temporary.
- `wiki/` is the concept content library.
- `guide/` is author-facing navigation.
- `agents/` defines maintenance routing, workflows, and roles.
- `glossary.md` defines shared terms.
- `index.md` catalogs content.
- `log.md` records chronological changes.

## Read order

1. `glossary.md`
2. `wiki/lead.md`
3. `agents/router.md`
4. relevant role under `agents/roles/`
5. relevant workflow under `agents/workflows/`
6. `index.md`
7. target wiki pages

## Rules

- Maintain this as an independent concept wiki.
- Do not treat psychogram harness files as part of this wiki.
- File reusable answers back into the wiki.
- Keep maintenance workflows under `agents/workflows/`.
- Keep concept content under `wiki/`.
