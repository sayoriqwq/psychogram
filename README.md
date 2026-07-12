# Psychogram

Psychogram 是一个把“一个概念”组织成独立 wiki 的通用 harness。

它不是某个具体理论的 wiki，也不是一个 Obsidian vault 模板本身。它负责定义如何设计、生成、维护、测试和投射 concept wiki。

## What this repo contains

- `harness/` — psychogram 系统本身：概念、规则、workflow、agent role 和 lint 标准。
- `template/` — 生成新 concept wiki 时使用的空骨架，不包含具体领域内容。
- `fixtures/` — 用来测试 harness 和 template 的样例输入、输出和观察记录。
- `projections/` — 将 psychogram 投射到具体 runtime 的说明。

## Core rule

一个概念生成一个独立 wiki。Fixture 和 instance 的内容不能泄漏进 harness 或 template。

## How to read

先读 [[harness/lead]]，再读 [[harness/glossary]] 和 [[harness/index]]。如果你要生成新 concept wiki，从 [[harness/workflows/design-concept-wiki]] 和 [[harness/workflows/instantiate-concept-wiki]] 开始。

## What this is not

- 不是某个具体概念的 wiki。
- 不是业务 wiki。
- 不是长期收集 raw input 的仓库。
- 不是 runtime-specific agent 配置的源头。

## Prelude Artifact release

Artifact 使用精确的 `pnpm@10.33.2`，并通过提交的 `pnpm-lock.yaml` 从
registry 解析 `@sayoriqwq/prelude-contract`。发布由
`.github/workflows/npm-publish.yml` 执行；流水线先用 `pnpm verify` 验证
build、typecheck、test 和 assets，再检查并发布 pack 结果。npm 发布身份由
GitHub Actions trusted publisher 提供。
