# Fixture: LLM-wiki

## Purpose

This fixture tests whether psychogram can turn a concept description into an independent concept wiki without leaking fixture-specific content into the harness or template.

## Input

- [[input/llm-wiki]]

## Output

- [[output/wiki/lead]]

## Notes

- [[notes/fixture-observations]]
- [[notes/leakage-discovery]]

## Fixture rule

The output may contain LLM-wiki-specific content. The harness and template must not.
