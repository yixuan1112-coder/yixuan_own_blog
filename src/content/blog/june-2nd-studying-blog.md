---
title: June 2nd studying blog
description: the first class
pubDate: Jun 23 2026
updatedDate: Jun 23 2026
---
1：3-3-3 rules

2:sources

Google scholars, research rabbit, harvard library

## Module 1

1：What is system?

2：The open system and the close systems?

3:Cloud is a system

Compute, memory, network, storage(performance, quality, cost）

解释：

Compute计算：通常指的是计算机cpu或者GPU的能力，执行代码和处理业务的能力

Memory：通常指的是RAM，先加载到内存中，内存是易失性的，但是读写的速度决定了可以并发处理多少数据

Network:把用户请求送进云端，然后把计算机运算的结果返回给用户

Storage:系统的“永久仓库”，通常指的是硬盘。就算服务器关机了，数据库和图片之类的还是会安全保存在这里

（三大权衡的维度：

1:performance性能：系统跑的有多快？

2：quality质量：系统有多稳？数据是否安全持久

3：cost成本：要花多少钱：云计算是按量付费的

（performance and quality linked to cost)

4:multi-cloud

1：防止厂商锁定；

2：提高灾备和容灾能力

3:利用各家所长

（multi-cloud是两个或多个公共云；但是hybrid cloud指的是公共云和企业私有的云的综合）

4：risk：运维成本飙升；数据传输费用egress fees;安全边界变大（technical; organizational; environmental)

# Self studying of module 2

1:the difference between the container and virtual machine

虚拟机是虚拟出 CPU、内存、硬盘等硬件，然后在其上安装一个完整的操作系统（Guest OS）（它可能比较笨重，启动比较慢，但是是完全隔离的环境）

Container容器不需要虚拟的硬件，也不要自带的操作系统，而是共用主机的操作系统，再隔离出独自的一些运行环境。

2. What is Cloud Native? What is Kubernetes?

·  Cloud Native（云原生）： 它不是一种具体的某种软件，而是一套方法论和设计哲学。它指导你如何充分利用云计算的优势（如弹性、自动化、分布式）来构建和运行应用程序。传统的软件是“搬到”云上运行，而云原生的软件是“生在云上、长在云上”的。

·  Kubernetes（简称 K8s）： 它是云原生时代的“操作系统”。当一个公司有成千上万个容器在运行时，靠人工管理是不可能的。K8s 就是专门用来自动部署、扩展和管理这些容器集群的开源系统（编排工具）。

3：Some re-definitions of the cloud natives

(1) micro-services

一种软件架构风格。将一个庞大臃肿的单体应用（Monolith）拆分成一组小而独立、各司其职的微型服务。

(2) Containers

云原生应用的标准打包和运行单元（如 Docker）。它把代码和它运行所需的所有依赖（库、配置文件）打包在一起，确保程序在任何环境（开发、测试、生产环境）下运行的结果完全一致。

(3) Orchestration

它决定哪个容器该在什么时候启动，流量大了该往哪边分，哪个容器挂了要立刻拉一个新的起来替代。

(4) Dev/Ops

让开发和运维紧密合作，共同对产品的整个生命周期负责，提高软件交付的速度。

(5) CI/CD

·  CI (Continuous Integration - 持续集成)： 程序员一提交代码，系统自动触发编译、打包和自动化测试，确保新代码没有破坏原有功能。

·  ·  CD (Continuous Delivery/Deployment - 持续交付/部署)： 测试通过后，系统自动将新版本的代码发布到生产环境，实现无人值守的自动化升级。

(6) Declarative APIs

一种人机交互的指令方式。你只需要告诉系统“我想要达到的最终状态

(7) Service Mesh

专门负责微服务之间通信的基础设施层。让微型服务更专注于自己的任务，不用考虑过多的中途的连接。

(8) Severless

一种计算模型。用户只需要编写并上传核心业务代码（函数），完全不需要关心、购买和管理底层的服务器

(9) Resilience

系统在面临局部网络故障、机房断电或硬件损坏等异常情况时，能够自我修复并保持服务不中断的能力。
