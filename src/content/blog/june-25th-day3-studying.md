---
title: June 25th day3 studying
description: Wednesday and the 3rd day of the studying
pubDate: Jun 25 2026
updatedDate: Jun 25 2026
---
Recap:

1:KVM Switch

2:the general relationship of these three definition(using the markdown to record):

$$\text{物理服务器} \longrightarrow \text{Host OS} \longrightarrow \text{Virtual Machine (VM)} \longrightarrow \text{Pod} \longrightarrow \text{Container}$$

最底层： 物理机上运行着 Operating System (Host OS)。

第二层： 为了弹性扩展和安全隔离，云厂商会在物理机上切分出多个 Virtual Machines (VM)。每个 VM 里面跑着自己的 Guest OS。

第三层： 在虚拟机内部，我们部署了 Kubernetes 集群。K8s 在这个 VM 里创建了 Pod。

最内层： Pod 内部真正运行着一个或多个 Containers（容器），也就是你的应用程序（如 Spring Boot 后端、Nginx 前端、MySQL 数据库等）。

3:some definitions of the private cloud, community cloud and public cloud, hybrid cloud.

4:the definition of the 云计算：一种模式，让用户通过网络，随时随地方便的按需访问一个可配置的共享计算资源池。

【5 characteristics】：

按需服务；广泛的网络访问；资源池化；快速弹性；可计量服务

【三大服务模型】：

软件即服务（saas); 平台即服务（paas); 基础设施即服务（Iaas)

【四大部署模型】：

Private cloud; community cloud; public cloud, hybrid cloud

4: the availability and the stability可用性和可靠性

（今天的剩下时间我在做slides:cloud costing and financial management)
