# Workflow: Query

## Definition

Query is the operation where the LLM answers from the maintained wiki.

## Role in LLM-wiki

Query uses the index and relevant pages before synthesizing an answer. Reusable answers can be filed back.

## Risks

- Answering from memory rather than the wiki.
- Failing to file back reusable synthesis.

## Related

- [[../concepts/index-file]]
- [[../questions/when-should-good-answers-be-filed-back]]
- [[lint]]
