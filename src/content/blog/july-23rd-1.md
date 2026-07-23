---
title: July 23rd
description: react native知识总括
type: knowledge
pubDate: Jul 23 2026
updatedDate: Jul 23 2026
---
## 一、 React 核心理念与 Hooks 深度解析

### 1. 核心思想拆解

#### ① 声明式 UI（Declarative UI）: $UI = f(State)$

* 传统命令式（Imperative，如 jQuery / 原生 JS）：你需要手动操纵 DOM。“找到那个按钮，改变它的文字，隐藏那个 input，再往列表里 append 一个 `<li>`”。
* React 声明式：你只需定义当前状态（State）下页面应该长成什么样。当 $State$ 改变时，React 内部会自动通过虚拟 DOM（Virtual DOM）计算出差异，并把最终正确的 $UI$ 渲染出来。开发者不再直接触碰真实 DOM。

#### ② 组件化（Component-Based）

将复杂的页面拆分为独立、高复用、相互隔离的微型单元（组件）。每个组件拥有自己的结构（HTML/JSX）、样式（CSS）和行为逻辑（JS）。组件间可以像乐高积木一样层层嵌套。

#### ③ 单向数据流（Unidirectional Data Flow）

数据只能从父组件通过 `Props` 传递给子组件，就像水往低处流一样。

* 子组件只读（Read-Only） `Props`，不能在内部强行修改父组件传过来的 `Props`。
* 如果子组件需要修改父组件的数据，必须由父组件通过 `Props` 传递一个回调函数给子组件，子组件调用该函数触发父组件更新。这种限制大幅降低了应用数据的混乱程度。

### 2. 核心 Hooks 详细图解与代码

Hooks 是 React 16.8 引入的机制，允许你在不编写类组件（Class Component）的情况下，使用状态和其他 React 特性。

#### ① `useState`：响应式数据驱动

用于在函数组件中声明本地“响应式”变量。

#### ② `useEffect`：管理组件副作用（Side Effects）

副作用指任何脱离 React 纯粹渲染逻辑的操作（如：网络请求、DOM 手动修改、定时器、事件监听）。

#### ③ `useContext`：破解属性层层传递（Prop Drilling）

默认情况下，数据要穿透 10 层组件，需要每一层都通过 `Props` 手手相传。`useContext` 创建了一个全局的“数据广播站”。

#### ④ `useMemo` 与 `useCallback`：性能优化

React 中，父组件重新渲染时，默认会重新创建内部的所有函数和局部变量，这会导致所有子组件被无意义地重新渲染。

* `useMemo`：缓存计算出来的“结果”。只有依赖项变化时才重新计算（类似 Vue 的 computed）。
* `useCallback`：缓存“函数引用地址”。防止每次渲染都创建新的函数对象传给子组件，导致子组件缓存失效。

## 二、 React (Web) vs React Native (Mobile) 深入对比

### 1. 本质定位区别：React Native 不是全栈框架

这是一个极其常见的误区：

* React Native (RN) 不是全栈框架：RN 的定位只是客户端前端框架。它只负责在 iOS / Android 手机设备上画出页面、接收用户点击、播放动画。
* 它依然需要后端接口：一个能够运行登录、存取聊天记录、购物下订单的 RN 应用，后台必须有一个服务器（例如使用 Node.js / Go / Java 搭建的 API 接口以及云端数据库如 PostgreSQL / MongoDB）。RN 必须通过 HTTPS 请求向后端拉取 JSON 数据。

### 2. 突破 DOM 的局限：底层的彻底蜕变

#### ① 渲染目标从 Web DOM 彻底转向操作系统原生控件

* Web 浏览器环境（React DOM）：

  你编写的 `<div/>`、`<p/>`，经过虚拟 DOM 运算后，最终由浏览器引擎创建出标准的 HTML DOM 节点。渲染效率受限于浏览器的绘图管线。
* React Native 环境：

  完全抛弃了 HTML 与 DOM 的概念。你编写的 `<View/>`、`<Text/>`，通过 RN 的底层的桥接与架构（JSI / Bridge），会直接映射为 iOS 和 Android 操作系统的原生基础控件
