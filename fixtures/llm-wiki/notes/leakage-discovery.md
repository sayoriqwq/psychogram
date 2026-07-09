# Fixture Observation: LLM-wiki Leakage Into Harness

## Observation

The first psychogram architecture mixed LLM-wiki fixture content into the psychogram harness.

## Why this matters

Psychogram should be a generic concept-wiki harness. If a fixture leaks into the harness, the system becomes domain-specific and stops being reusable across concepts.

## Resolution

Separate `harness/`, `template/`, `fixtures/`, and external `instances/`.

## Evidence preserved

The previous v0.4 scaffold is preserved under `fixtures/llm-wiki/notes/v0.4-leaked-root/` as a failure artifact.

## Follow-up rule

Fixture output can reveal harness problems, but fixture content must not be copied into harness or template.
