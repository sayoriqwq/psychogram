# Agent Prompt: Implement Psychogram Wiki Architecture

You are an implementation agent. Your task is to create or update a Markdown/Obsidian wiki repository according to the **psychogram v0.4** architecture.

Psychogram is an agent-maintained, Obsidian-readable theory wiki system. It transforms current input, chat context, NOTE.md files, and evolving thoughts into a stable, interconnected Markdown wiki.

The user is the author. The agent maintains the wiki. The author judges meaning, direction, and acceptance.

---

## 1. Core intent

Build a minimal but complete psychogram vault/repo.

This system must preserve the LLM-wiki pattern:

1. A persistent Markdown wiki is maintained over time.
2. The wiki compounds through input, questions, answers, and maintenance.
3. The agent writes and maintains the wiki; the human directs and evaluates.
4. `AGENTS.md` acts as the schema / maintenance protocol.
5. Main operations are `ingest`, `query`, and `lint`.
6. `index.md` is the content-oriented catalog.
7. `log.md` is the chronological record.
8. Obsidian is the author-facing IDE for browsing links, graph structure, and guide pages.

Do not implement this as a generic notes folder. Implement it as an agent-maintained theory wiki.

---

## 2. Required directory structure

Create this structure exactly unless the user has an existing repo that requires merging:

```text
psychogram/
  README.md
  AGENTS.md
  glossary.md
  index.md
  log.md

  _staging/
    current.md

  guide/
    start-here.md
    theory-map.md
    problem-map.md

  wiki/
    lead.md

    concepts/
    claims/
    questions/
    tensions/
    workflows/

  agents/
    router.md

    roles/
      ingest.md
      query.md
      lint.md
      glossary.md
      maintainer.md

    projections/
      codex.md
```

Do not create these directories unless explicitly asked:

```text
foundations/
applications/
handoff/
briefs/
assertions/
capture/
distilled/
skills/
```

Do not use `canon` as a system term.

---

## 3. Naming and audience rules

### Project name

The system is named:

```text
psychogram
```

Use lowercase `psychogram` for repo/directory naming. Use `Psychogram` in prose when needed.

### README

`README.md` is for external readers who are encountering the project for the first time.

It should answer:

- What is psychogram?
- What problem does it solve?
- How should an outsider read this repo?
- What is this project not?

Keep it concise and welcoming. Do not put author-private navigation here.

### guide

`guide/` is for the author.

It should help the author re-enter the theory in Obsidian. It is not the same as README.

### agents

`agents/` is for agent routing and role definition.

It is a semantic layer, not a runtime-specific config layer. Runtime configs should be treated as projections.

---

## 4. Required root files

### `README.md`

Create a concise external-facing README with this structure:

```markdown
# Psychogram

## What this is

## Why it exists

## How to read this repo

## What this is not

## Entry points
- [[wiki/lead]]
- [[glossary]]
- [[index]]
```

### `AGENTS.md`

Create a maintenance protocol for all agents.

It must include:

```markdown
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
```

### `glossary.md`

Create the glossary as a term contract, not an encyclopedia.

Use this format:

```markdown
## Term
**Is:** ...  
**Is not:** ...  
**Location / Page type:** ...
```

Required terms:

```text
Psychogram
wiki / main library
lead
staging
guide
agent
workflow
concept
claim
assertion
question
tension
index
log
skill
projection
```

### `index.md`

Create a content-oriented catalog. Include all starter pages with one-line descriptions.

Suggested sections:

```markdown
# Index

## Core files

## Guide

## Concepts

## Claims

## Questions

## Tensions

## Workflows

## Agents
```

### `log.md`

Create an append-only chronological log.

Initial entry:

```markdown
# Log

## [YYYY-MM-DD] architecture | initialize psychogram v0.4
- Created psychogram structure.
- Added `wiki/lead.md` as the main library entry page.
- Added guide, glossary, index, log, workflows, and agent routing.
```

Use the current date if available. If not, use `YYYY-MM-DD` and leave it for the user to correct.

---

## 5. Required staging file

Create:

```text
_staging/current.md
```

Content:

```markdown
# Current Staging

This file is temporary. Its goal is to be cleared or reduced after ingest.

## Pending input

## Candidate wiki updates

## Candidate questions

## Candidate tensions

## To merge

## To discard
```

Rules:

- Do not treat staging as a long-term capture layer.
- Do not treat staging as a distillation layer.
- Move useful content into `wiki/` as quickly as possible.
- Delete or reduce stale staging content after each ingest.

---

## 6. Required guide files

### `guide/start-here.md`

Author-facing Obsidian homepage.

Include:

```markdown
# Start Here

## What this is

## Read first
1. [[../wiki/lead]]
2. [[../glossary]]
3. [[theory-map]]
4. [[problem-map]]

## Current center

## Core claims

## Core questions

## Core tensions

## Recent log
- [[../log]]
```

### `guide/theory-map.md`

Author-facing theory map. Do not duplicate `index.md`.

Include:

```markdown
# Theory Map

## Core loop
Input → Ingest → Wiki Update → Query → File Back → Lint → Wiki Update

## LLM-wiki inheritance

## Psychogram structure

## Core concepts

## Core claims

## Core workflows
```

### `guide/problem-map.md`

Author-facing map of questions and tensions.

Include:

```markdown
# Problem Map

## Open questions

## Working answers

## Active tensions

## Provisionally resolved tensions

## Question–tension clusters
```

---

## 7. Required wiki lead page

Create:

```text
wiki/lead.md
```

This replaces any `foundations/` or `spine.md` design.

Template:

```markdown
# Lead

## One-sentence thesis
Psychogram is an agent-maintained, Obsidian-readable theory wiki system for turning current thought and input into a stable, interconnected Markdown main library.

## What this system is

## What this system is not

## Core loop
Input → Ingest → Wiki Update → Query → File Back → Lint → Wiki Update

## Core page types
- [[concepts]]
- [[claims]]
- [[questions]]
- [[tensions]]
- [[workflows]]

## Current structure

## Read next
- [[../glossary]]
- [[../guide/theory-map]]
- [[../guide/problem-map]]
- [[../index]]

## Related
```

---

## 8. Required starter concept pages

Create these concept pages:

```text
wiki/concepts/psychogram.md
wiki/concepts/llm-wiki.md
wiki/concepts/schema.md
wiki/concepts/staging.md
wiki/concepts/guide.md
wiki/concepts/agent.md
wiki/concepts/workflow.md
wiki/concepts/claim.md
wiki/concepts/assertion.md
wiki/concepts/question.md
wiki/concepts/tension.md
wiki/concepts/index-file.md
wiki/concepts/log-file.md
wiki/concepts/skill.md
wiki/concepts/projection.md
```

Each concept page should use this concise template:

```markdown
# Concept Name

## Definition

## Is not

## Role in psychogram

## Common confusions

## Related
```

Do not over-expand. Starter pages should be useful but short.

---

## 9. Required starter claim pages

Create these claim pages:

```text
wiki/claims/wiki-is-a-compounding-artifact.md
wiki/claims/agent-maintenance-reduces-bookkeeping-cost.md
wiki/claims/good-query-answers-should-be-filed-back.md
```

Claim template:

```markdown
# Claim: Title

## Claim

## Why it matters

## Supports

## Challenges

## Related questions

## Related tensions

## Related workflows
```

Rules:

- A claim is a theory-bearing proposition.
- Do not create a claim page for every assertion.
- If a statement is only a local judgment, keep it inside the relevant page body.

---

## 10. Required starter question pages

Create these question pages:

```text
wiki/questions/what-counts-as-source-when-input-is-thought.md
wiki/questions/when-should-query-answers-be-filed-back.md
wiki/questions/how-much-context-should-an-agent-read.md
wiki/questions/when-should-workflow-become-skill.md
```

Question template:

```markdown
# Question: Title

## Question

## Why this is a question

## Current answer

## Non-answer

## Related claims

## Related tensions

## Related workflows
```

Critical rule:

> Every question page must explain why this is a real question. If it cannot explain that, do not create the page.

---

## 11. Required starter tension pages

Create these tension pages:

```text
wiki/tensions/compounding-vs-clutter.md
wiki/tensions/simple-structure-vs-expressive-power.md
wiki/tensions/human-readable-vs-agent-readable.md
wiki/tensions/workflow-doc-vs-runtime-skill.md
wiki/tensions/semantic-agent-role-vs-runtime-subagent.md
```

Tension template:

```markdown
# Tension: X vs Y

## Tension

## Pole A

## Pole B

## Why they conflict

## Current resolution

## Tradeoff

## Revisit when

## Related questions

## Related claims

## Related workflows
```

Critical rule:

> A tension is not a normal question. It is a conflict between two reasonable demands. It requires tradeoff, not just an answer.

---

## 12. Required workflow pages

Create these workflow pages:

```text
wiki/workflows/ingest.md
wiki/workflows/query.md
wiki/workflows/lint.md
wiki/workflows/update-glossary.md
wiki/workflows/update-index-and-log.md
```

### `wiki/workflows/ingest.md`

Must cover:

- read current input from chat, NOTE.md, or `_staging/current.md`;
- identify new concepts, claims, questions, tensions, workflows;
- update affected wiki pages;
- update glossary if new terms appear;
- update index;
- append log;
- clear or reduce staging.

### `wiki/workflows/query.md`

Must cover:

- read `index.md` first;
- read relevant pages;
- answer from the wiki;
- identify whether the answer produced reusable content;
- file back valuable answers when appropriate;
- update index/log if wiki changes.

### `wiki/workflows/lint.md`

Must cover checks for:

- orphan pages;
- pages missing `Related`;
- question pages missing `Why this is a question`;
- tension pages missing poles, resolution, or tradeoff;
- claims with no challenges or related pages;
- glossary terms missing pages or mismatching page content;
- pages missing from `index.md`;
- meaningful changes missing from `log.md`;
- stale staging content.

### `wiki/workflows/update-glossary.md`

Must cover:

- when to add a term;
- when to update a term;
- how to write `Is` / `Is not`;
- how to avoid turning glossary into an encyclopedia.

### `wiki/workflows/update-index-and-log.md`

Must cover:

- how to update index after page creation or major edits;
- how to append log after substantial work;
- distinction between content index and chronological log.

---

## 13. Required agent routing files

### `agents/router.md`

Create intent routing:

```markdown
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
```

### `agents/roles/*.md`

Create these roles:

```text
agents/roles/ingest.md
agents/roles/query.md
agents/roles/lint.md
agents/roles/glossary.md
agents/roles/maintainer.md
```

Role template:

```markdown
# Role: Name

## Mission

## Read first

## May edit

## Must not edit

## Done when
```

### `agents/projections/codex.md`

Create a projection note. Keep it generic unless the user asks for runtime-specific files.

Must include:

```markdown
# Codex Projection

Psychogram maintains semantic agent roles in `agents/roles/` and workflow docs in `wiki/workflows/`.

Runtime-specific Codex agents, subagents, or skills may be generated from these files later.

Do not treat runtime projection files as the source of truth.

Source of truth:
- `AGENTS.md`
- `agents/router.md`
- `agents/roles/*.md`
- `wiki/workflows/*.md`
```

Do not create `.codex/` or `.agents/skills/` unless the user explicitly asks.

---

## 14. Obsidian requirements

Make the vault usable in Obsidian without plugins.

Rules:

1. Use wiki links where useful.
2. Add a `Related` section to important pages.
3. Keep `guide/start-here.md` as the author-facing homepage.
4. Keep `guide/theory-map.md` as a manually curated MOC, not a duplicate of `index.md`.
5. Keep `guide/problem-map.md` focused on questions and tensions.
6. Do not require Dataview.
7. Optional frontmatter is allowed but must stay light.

Suggested minimal frontmatter:

```yaml
---
type: question
status: open
updated: YYYY-MM-DD
---
```

---

## 15. Writing style

Use Chinese for prose by default. Use English slug filenames for filesystem stability.

Good:

```text
wiki/questions/when-should-query-answers-be-filed-back.md
# 什么时候 query answer 应该写回 wiki？
```

Avoid overly abstract or academic writing. Pages should be clear enough for both the author and future agents.

---

## 16. Acceptance criteria

The implementation is complete when:

1. The exact psychogram directory structure exists.
2. Root files exist: `README.md`, `AGENTS.md`, `glossary.md`, `index.md`, `log.md`.
3. `_staging/current.md` exists and clearly says it is temporary.
4. `guide/start-here.md`, `guide/theory-map.md`, and `guide/problem-map.md` exist and serve the author.
5. `wiki/lead.md` exists and replaces any `foundations/` or `spine.md` design.
6. Starter concept, claim, question, tension, and workflow pages exist.
7. `agents/router.md`, `agents/roles/*.md`, and `agents/projections/codex.md` exist.
8. No forbidden directories were created.
9. `index.md` lists all starter pages with one-line summaries.
10. `log.md` has an initialization entry.
11. Question pages include `Why this is a question`.
12. Tension pages include poles, conflict, resolution, tradeoff, and revisit conditions.
13. Important pages include `Related` links.
14. The result can be opened in Obsidian and navigated from `guide/start-here.md`.

---

## 17. Final response expected from implementation agent

After implementation, report:

```markdown
## Completed
- ...

## Files created
- ...

## Key decisions encoded
- ...

## Notes / uncertainties
- ...
```

If any part could not be completed, say exactly what was not completed and why. Do not claim success for missing files.
