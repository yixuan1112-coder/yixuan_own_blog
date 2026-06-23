---
title: June 24th daily reflection
description: day2 of the Harvard study
pubDate: Jun 24 2026
updatedDate: Jun 24 2026
---
# Cloud infrastructures

1: Kubernetes的核心组件与概念

（1) 基础单元和架构

Pod:最基础的部署单元，里面包裹着一个或者多个容器

Node:运行pod的工作机器（worker machine)

Cluster: 由一组节点组成的，作为一个整体系统进行管理的集合

（2) 部署与网络

Deployment: 对应用程序进行声明式规范/定义的组件

Service: 为访问Pod提供一个稳定的端点

Ingress:负责将集群外部的流量路由到内部的服务

（3) 配置和管理

ConfigMap/ Secret:用于将配置文件和敏感数据与代码分离并且外部化

Scheduler：负责决定将哪些Pod分配到哪些合适的节点上

（4) 高可用性

Scaling和Self-Healing

2:什么时候选择Gpu什么时候选择CPU

首先GPU要比CPU快10-50倍；但是CPU 可以处理更多的复杂的逻辑分支，更适合multi-task,但是GPU很多时候做的事是基于CPU的

所以总结而言：

· 选择传统云（Traditional Cloud）的场景：适合不需要重度并行数学计算的常规应用。·

托管网站或 Web 应用程序

运行企业数据库

存储和分发/提供文件

执行脚本和自动化任务

· 选择 GPU 云（GPU Cloud）的场景：

适合需要进行大量矩阵、张量运算和大规模并行处理的场景。

训练或运行机器学习（ML）模型

深度学习研究

3D 图形或视频渲染

大规模科学模拟

 

(注：今天还学习了一下multi-cloud, private cloud， public cloud和hybrid cloud等等的知识）
