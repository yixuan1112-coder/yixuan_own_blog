---
title: August 6th
description: 想做一个类似gan的攻防型AI agent 套装
type: knowledge
pubDate: Aug 06 2026
updatedDate: Aug 06 2026
---
# AI Agent Framework Summary

## Core Components

一个完整的 AI Agent 通常由六个核心模块组成：

### 1. Role（角色）

定义 Agent 的身份、职责、目标以及能力边界。

主要内容包括：

* Agent 的定位（例如：CTF Solver、Research Assistant、Writing Assistant）
* 可以完成的任务
* 不应该完成的任务
* 输出格式要求
* 行为准则（Rules）

### 2. Skills（技能）

Skill 并不是代码，而是解决某类问题的方法论和标准流程。

每一个 Skill 一般包含：

* 适用场景（When to use）
* 输入（Inputs）
* 分析步骤（Workflow）
* 输出格式（Outputs）
* 常见检查清单（Checklist）
* 最佳实践（Best Practices）

例如：

* Web Recon
* Reverse Engineering
* RSA Analysis
* Report Writing
* Research Analysis

Skill 的作用是让 Agent 在面对不同类型任务时，采用一致且高质量的思考方式，而不是每次重新组织思路。

### 3. Tools（工具）

Tool 是 Agent 可以实际调用的能力。

例如：

* 文件读取
* Python
* Shell（受限制）
* Browser
* HTTP Request
* Database
* OCR
* Search
* Git
* Docker

一个好的 Tool 系统应该：

* 功能单一
* 权限明确
* 可记录日志
* 有调用限制
* 可重复使用

Tool 负责执行，Skill 负责指导。

### 4. Workflow（工作流）

Workflow 定义 Agent 如何完成一个任务。

典型流程如下：

Receive Task

↓

Understand Context

↓

Collect Facts

↓

Generate Hypotheses

↓

Select Skill

↓

Call Tool

↓

Evaluate Result

↓

Update Memory

↓

Repeat (if necessary)

↓

Generate Final Report

Workflow 的作用是避免 Agent 跳步骤、重复尝试或凭空猜测。

### 5. Memory（记忆）

Memory 负责保存经验和上下文，而不是简单保存所有聊天内容。

通常可分为：

**Short-term Memory**

* 当前任务信息
* 当前上下文
* 已完成步骤
* 已失败尝试

**Long-term Memory**

* 成功经验
* 常见模式
* 常用解决方案
* 用户偏好

**Knowledge Memory**

* 文档
* Cheat Sheet
* 技术资料
* Prompt Library

Memory 的目标是帮助 Agent 学会复用经验，而不是重复劳动。

### 6. Guardrails（约束）

Guardrails 用于限制 Agent 的行为，确保其稳定、安全、符合预期。

包括：

* 权限限制
* 工具调用限制
* 最大循环次数
* 最大 Token
* 输出格式限制
* 安全边界
* 错误处理机制

Guardrails 可以防止 Agent：

* 无限循环
* 重复调用工具
* 越权执行
* 幻觉推理
* 偏离任务目标

# 整体运行流程

一个成熟的 AI Agent 通常按照以下顺序工作：

1. 接收任务（Receive Task）
2. 理解需求（Understand Goal）
3. 判断任务类型（Classification）
4. 选择对应 Skill（Select Skill）
5. 制定执行计划（Planning）
6. 调用所需 Tools（Tool Execution）
7. 分析执行结果（Reasoning）
8. 更新 Memory（Memory Update）
9. 判断是否完成（Verification）
10. 输出最终结果（Reporting）

如果任务未完成，则根据最新结果继续循环执行，直到达到目标或触发停止条件。

# 模块之间的关系

Role
↓
决定 Agent 的职责

↓

Workflow
↓
决定 Agent 如何工作

↓

Skill
↓
决定 Agent 如何思考

↓

Tool
↓
决定 Agent 能做什么

↓

Memory
↓
记录经验与上下文

↓

Guardrails
↓
确保整个过程安全、稳定、可控
