---
title: 怎么把我的AI agent部署到一个平台上面去
description: August 13th
type: knowledge
pubDate: Aug 13 2026
updatedDate: Aug 13 2026
---
1：首先，大致的逻辑是这样的：本地运行 → 云服务器 → Docker 隔离 → 域名 → HTTPS → 公开访问

2：所以我做的事情是：把电脑上能运行的 CTF Agent Arena，搬到一台 24 小时联网的服务器上，同时让别人能访问，但又不能让他们上传的 Agent 把服务器搞坏。
