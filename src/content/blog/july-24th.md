---
title: July 24th
description: 简单讲一下我怎么修改的blog评论机制
type: thoughts
pubDate: Jul 24 2026
updatedDate: Jul 24 2026
---
打开博客文章

\    ↓

正文由 CSS 隐藏

\    ↓

用户点击 GitHub 登录

\    ↓

/api/comment-login 创建 OAuth state

\    ↓

GitHub 用户授权

\    ↓

/api/callback 获取 GitHub 用户名和 token

\    ↓

加密写入 HttpOnly Cookie

\    ↓

用户通过 Giscus 发表评论

\    ↓

前端获得 Discussion 编号

\    ↓

请求 /api/comment-status

\    ↓

后端通过 GitHub GraphQL API读取评论作者

\    ↓

评论作者与登录用户相同

\    ↓

返回 commented: true

\    ↓

页面添加 data-unlocked="true"

\    ↓

CSS 显示正文
