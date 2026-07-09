# Glossary

## Psychogram
**Is:** 一个由 agent 维护、由作者在 Obsidian 中阅读和判断的理论 wiki 系统。  
**Is not:** 普通笔记库、聊天记录仓库、长期 raw source 仓库。  
**Location / Page type:** 系统整体；核心概念页见 [[wiki/concepts/psychogram]]。

## wiki / main library
**Is:** `wiki/` 中被持续维护的理论主库，保存稳定概念、主张、问题、张力和 workflow。  
**Is not:** 临时输入区、原始材料库、随手摘录集合。  
**Location / Page type:** `wiki/`；入口页见 [[wiki/lead]]。

## lead
**Is:** 主库的中轴入口页，概述系统定义、核心 loop、页面类型和阅读路径。  
**Is not:** 全量目录、外部 README、agent 操作协议。  
**Location / Page type:** [[wiki/lead]]。

## staging
**Is:** 当前尚未吸收到 wiki 的短期材料和 pending items。  
**Is not:** 长期 capture 层、长期 distill 层、知识库。  
**Location / Page type:** [[_staging/current]]。

## guide
**Is:** 作者在 Obsidian 中重新进入理论的导航层。  
**Is not:** 外部介绍、agent runtime 配置、全量索引。  
**Location / Page type:** `guide/`；入口见 [[guide/start-here]]。

## agent
**Is:** 维护 wiki 的执行者，负责整理、链接、更新、检查和写回。  
**Is not:** 理论方向的最终裁判；作者才判断意义和接受度。  
**Location / Page type:** 角色定义见 `agents/roles/` 和 [[wiki/concepts/agent]]。

## workflow
**Is:** agent 可执行的维护流程，例如 ingest、query、lint。  
**Is not:** 必须立刻固化成 runtime skill 的程序。  
**Location / Page type:** `wiki/workflows/`；概念见 [[wiki/concepts/workflow]]。

## concept
**Is:** 需要稳定解释、边界和关联的关键术语。  
**Is not:** 每个普通词、每个局部判断、百科条目。  
**Location / Page type:** `wiki/concepts/`。

## claim
**Is:** 理论需要承担论证责任的核心主张。  
**Is not:** 任意一句陈述、事实、定义或局部判断。  
**Location / Page type:** `wiki/claims/`；概念见 [[wiki/concepts/claim]]。

## assertion
**Is:** 页面正文中的句子级判断。  
**Is not:** 默认需要单独建页的一等页面类型。  
**Location / Page type:** 留在相关页面正文；概念见 [[wiki/concepts/assertion]]。

## question
**Is:** 仍缺答案、但会影响理解、设计或行动的问题。  
**Is not:** 普通待办、已解决事项、两个好需求之间的持续取舍。  
**Location / Page type:** `wiki/questions/`；概念见 [[wiki/concepts/question]]。

## tension
**Is:** 两个合理要求之间的持续拉扯，需要记录取舍和阶段性解决方式。  
**Is not:** 普通问题、bug、单边错误。  
**Location / Page type:** `wiki/tensions/`；概念见 [[wiki/concepts/tension]]。

## index
**Is:** 内容导向的 catalog，帮助作者和 agent 定位 wiki 页面。  
**Is not:** 时间线、变更日志、自动数据库。  
**Location / Page type:** [[index]]；概念见 [[wiki/concepts/index-file]]。

## log
**Is:** 按时间记录 ingest、query 写回、lint 和结构决策的语义日志。  
**Is not:** git diff 的替代品、全量工作记录。  
**Location / Page type:** [[log]]；概念见 [[wiki/concepts/log-file]]。

## skill
**Is:** 将稳定 workflow 投射到某个 runtime 后形成的可执行能力。  
**Is not:** 当前阶段的 source of truth。  
**Location / Page type:** 未来 projection；概念见 [[wiki/concepts/skill]]。

## projection
**Is:** 把 psychogram 的语义层适配到具体 runtime 的说明或产物。  
**Is not:** 主规则本身，也不应反向支配 wiki 架构。  
**Location / Page type:** `agents/projections/`；概念见 [[wiki/concepts/projection]]。
