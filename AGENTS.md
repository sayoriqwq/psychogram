# AGENTS.md

## Role

You maintain the psychogram harness.

## Core architecture

- `harness/` is the source of truth for psychogram as a concept-wiki generation system.
- `template/` is the domain-neutral skeleton for generated concept wikis.
- `fixtures/` contains test inputs, generated outputs, and fixture observations.
- `projections/` contains runtime adaptation notes.
- Root is not a generated concept wiki. Do not recreate root-level `wiki/`, `guide/`, `_staging/`, `agents/`, `glossary.md`, `index.md`, or `log.md`.

## Artifact classes

Psychogram must keep four artifact classes separate:

1. `harness` — the generic system.
2. `template` — the empty generated-wiki skeleton.
3. `fixture` — a test input/output pair used to validate the system.
4. `instance` — a real generated concept wiki that can stand alone outside the harness.

## Read order

1. `harness/glossary.md`
2. `harness/lead.md`
3. `harness/agents/router.md`
4. the relevant role under `harness/agents/roles/`
5. the relevant workflow under `harness/workflows/`
6. `harness/index.md`
7. target harness, template, fixture, or projection files

## Core operations

- Design a concept wiki.
- Instantiate a concept wiki from `template/`.
- Run and inspect fixtures.
- Lint the harness for fixture leakage.
- Update template and projection notes.

## Rules

- Harness must not store fixture-specific content.
- Template must not store domain-specific content.
- Fixture output may contain domain-specific content, but it must not be promoted into harness as content.
- Promote fixture observations into harness rules only when they generalize across concept wikis.
- Generated concept wikis must be independently readable.
- Agent workflows belong under `agents/workflows/`; concept content belongs under `wiki/`.
- Runtime-specific details belong under `projections/`.
- Sentence-level assertions stay inside page bodies; theory-bearing propositions become claims only when they govern the harness.
- Important unresolved unknowns become `harness/questions/`.
- Important tradeoffs become `harness/tensions/`.

## Writing rules

- 正文默认使用中文。
- 文件名和 slug 使用英文。
- 使用 Obsidian wikilinks where useful.
- Keep harness pages domain-neutral.
