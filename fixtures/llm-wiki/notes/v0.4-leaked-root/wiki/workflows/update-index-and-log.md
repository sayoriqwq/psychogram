# Workflow: Update Index and Log

## Purpose

在页面创建、重要修改或结构调整后，同步内容索引和语义日志。

## Update index after

- 新建 starter 或主库页面。
- 页面类型、标题、核心主张或 Related links 发生重要变化。
- 新增 guide、agent role、workflow 或 projection。
- 某页面变成后续 query 的重要入口。

## How to update index

1. 把页面放入正确 section。
2. 使用 Obsidian wiki link。
3. 每页写一行说明，说明它在 psychogram 中的用途。
4. 不把 `index.md` 写成时间线。
5. 不让 `index.md` 复制 `guide/theory-map.md` 的阅读叙事。

## Append log after

- ingest 导致主库变化。
- query answer 被写回。
- lint 修复结构问题。
- 目录或页面类型规则发生变化。
- 重要理论决策被采纳。

## How to append log

使用格式：

```markdown
## [YYYY-MM-DD] kind | short description
- Semantic event.
```

Log 记录为什么发生和语义影响；git 记录具体 diff。

## Distinction

`index.md` 是内容导向，回答“有哪些页面、在哪里、做什么”。`log.md` 是时间导向，回答“什么时候发生了什么结构或理论变化”。

## Done when

- 所有新增和重要页面都能从 `index.md` 找到。
- 实质变更都有对应 `log.md` 条目。
- Index 没有变成流水账，log 没有变成全量目录。

## Related

- [[ingest]]
- [[query]]
- [[lint]]
- [[../concepts/index-file]]
- [[../concepts/log-file]]
