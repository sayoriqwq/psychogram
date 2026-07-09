# Index

## Core files

- [[README]] — 面向外部初次读者的项目介绍。
- [[AGENTS]] — 所有维护 agent 必须遵守的 wiki 维护协议。
- [[glossary]] — 术语契约，用来稳定概念边界。
- [[index]] — 内容导向 catalog，帮助定位 wiki 页面。
- [[log]] — 按时间记录 wiki 演化事件。
- [[_staging/current]] — 当前短期待处理材料区，目标是清空或压缩。

## Guide

- [[guide/start-here]] — 作者在 Obsidian 中重新进入 psychogram 的首页。
- [[guide/theory-map]] — 手工维护的理论结构地图。
- [[guide/problem-map]] — 开放问题、工作答案和核心张力地图。

## Lead

- [[wiki/lead]] — 主库中轴入口页，说明系统定义、loop 和页面类型。

## Concepts

- [[wiki/concepts/psychogram]] — psychogram 作为 agent-maintained theory wiki 的定义。
- [[wiki/concepts/llm-wiki]] — psychogram 继承的持久 wiki 模式。
- [[wiki/concepts/schema]] — 通过维护协议约束 agent 行为的 schema 层。
- [[wiki/concepts/staging]] — 短期吸收区的边界和用途。
- [[wiki/concepts/guide]] — 作者-facing 导航层。
- [[wiki/concepts/agent]] — 维护 wiki 的 agent 角色。
- [[wiki/concepts/workflow]] — agent 可执行的维护流程。
- [[wiki/concepts/claim]] — 理论承重主张的页面类型。
- [[wiki/concepts/assertion]] — 留在正文中的句子级判断。
- [[wiki/concepts/question]] — 会影响理解或行动的开放问题。
- [[wiki/concepts/tension]] — 两个合理需求之间的持续取舍。
- [[wiki/concepts/index-file]] — 内容导向 catalog 的角色。
- [[wiki/concepts/log-file]] — 语义时间线的角色。
- [[wiki/concepts/skill]] — 由稳定 workflow 投射出的 runtime 能力。
- [[wiki/concepts/projection]] — 语义层到 runtime 的适配层。

## Claims

- [[wiki/claims/wiki-is-a-compounding-artifact]] — wiki 的价值来自持续维护后的知识复利。
- [[wiki/claims/agent-maintenance-reduces-bookkeeping-cost]] — agent 维护降低知识库持续更新的 bookkeeping 成本。
- [[wiki/claims/good-query-answers-should-be-filed-back]] — 有复用价值的 query answer 应写回 wiki。

## Questions

- [[wiki/questions/what-counts-as-source-when-input-is-thought]] — 当输入来自想法或聊天时，什么算 source。
- [[wiki/questions/when-should-query-answers-be-filed-back]] — query answer 何时应该进入主库。
- [[wiki/questions/how-much-context-should-an-agent-read]] — agent 每次工作前应读取多少上下文。
- [[wiki/questions/when-should-workflow-become-skill]] — workflow 何时应被 runtime skill 化。

## Tensions

- [[wiki/tensions/compounding-vs-clutter]] — 知识复利与 wiki 污染之间的取舍。
- [[wiki/tensions/simple-structure-vs-expressive-power]] — 简单结构与表达能力之间的取舍。
- [[wiki/tensions/human-readable-vs-agent-readable]] — 人类可读与 agent 可执行之间的取舍。
- [[wiki/tensions/workflow-doc-vs-runtime-skill]] — Markdown workflow 与 runtime skill 之间的取舍。
- [[wiki/tensions/semantic-agent-role-vs-runtime-subagent]] — 语义 agent 角色与 runtime subagent 之间的取舍。

## Workflows

- [[wiki/workflows/ingest]] — 将当前输入吸收到主库的流程。
- [[wiki/workflows/query]] — 基于 wiki 回答问题并判断是否写回的流程。
- [[wiki/workflows/lint]] — 检查 wiki 健康度的流程。
- [[wiki/workflows/update-glossary]] — 新增或修订术语契约的流程。
- [[wiki/workflows/update-index-and-log]] — 同步内容索引和语义日志的流程。

## Agents

- [[agents/router]] — 根据用户意图选择 role 和 workflow。
- [[agents/roles/ingest]] — ingest role 的使命、读写范围和完成标准。
- [[agents/roles/query]] — query role 的使命、读写范围和完成标准。
- [[agents/roles/lint]] — lint role 的使命、读写范围和完成标准。
- [[agents/roles/glossary]] — glossary role 的使命、读写范围和完成标准。
- [[agents/roles/maintainer]] — general maintainer role 的使命、读写范围和完成标准。
- [[agents/projections/codex]] — Codex runtime projection 的说明。
