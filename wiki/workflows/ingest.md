# Workflow: Ingest

## Purpose

把当前输入吸收到 psychogram 主库，更新受影响的概念、主张、问题、张力和 workflow，并清理 staging。

## Read first

1. [[../../glossary]]
2. [[../lead]]
3. [[../../agents/roles/ingest]]
4. [[../../index]]
5. [[../../_staging/current]]

## Inputs

- 当前聊天上下文。
- 作者提供的 NOTE.md 或临时材料。
- `_staging/current.md` 中尚未处理的内容。

## Steps

1. 判断输入是否有长期理论价值。
2. 识别新概念、新 claim、新 question、新 tension 或新 workflow。
3. 先更新已有页面；只有现有页面无法承载时才新建页面。
4. 如果出现新的共享术语，按 [[update-glossary]] 更新 `glossary.md`。
5. 如果新增或大改页面，按 [[update-index-and-log]] 更新 `index.md` 和 `log.md`。
6. 将已吸收内容从 `_staging/current.md` 中清除或压缩。
7. 丢弃没有长期价值的临时材料，不为它们建立治理负担。

## Page creation rules

- 理论承重主张进入 `wiki/claims/`。
- 重要未知进入 `wiki/questions/`。
- 重要取舍进入 `wiki/tensions/`。
- 可执行维护流程进入 `wiki/workflows/`。
- 句子级 assertion 留在相关页面正文。

## Done when

- 有价值输入已经进入合适的 wiki 页面。
- 新术语、index 和 log 已按需更新。
- `_staging/current.md` 不再保存已处理材料。
- 没有创建不必要页面类型。

## Related

- [[query]]
- [[lint]]
- [[update-glossary]]
- [[update-index-and-log]]
- [[../tensions/compounding-vs-clutter]]
