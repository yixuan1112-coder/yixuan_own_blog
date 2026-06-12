---
title: 'The-daily-reflections--June 7 2026 — Full Stack Practice & My Blog'
description: 'June 7, 2026 — Git push workflow, Vim basics, full stack project structure, HTML security topics, and notes on this Astro blog.'
pubDate: 'June 7 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

## What I've Learned

### 1. About My Full Stack Practice

#### 1.1 如何把代码推送到 GitHub

**第一次推送**（新建仓库时）：

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/username/githubprojectname.git
git push -u origin main
```

**之后每次更新**：

```bash
git add .
git commit -m "更新了。。"
git push
```

第一次需要 `init`、设置 `remote` 并 `-u` 绑定 upstream；日常开发只需 add → commit → push 三步。

#### 1.2 Vim 文本编辑器

Vim 是功能强大的文本编辑器，常用于 Linux / Unix 环境，也常见于 `git commit` 时弹出的默认编辑器。它通过**模式**操作文本：直接输入一般**不能**编辑，需要先进入 Insert 模式（按 `i`），编辑完按 `Esc` 回到 Normal 模式，再用 `:wq` 保存退出。

#### 1.3 一个 Full Stack 项目通常有哪些部分

| 文件 / 目录 | 说明 |
|-------------|------|
| `.gitignore` | 通常由 Git 工具创建，写明哪些文件**不上传**到 GitHub（如 `node_modules/`、`.env`） |
| `index.html` | 前端页面；有时也会放到 `public/` 文件夹 |
| `package.json` | 运行 `npm init` 后自动生成，记录项目名、版本、脚本命令等 |
| `package-lock.json` | 锁定每个依赖包的具体版本，一般**不要随意手动修改** |
| `server.js` | 自己创建的后端核心：连接数据库、监听端口、处理 API 请求 |

#### 1.4 今天的 HTML 课：四个重点

1. **CSS 布局** — 用 Flexbox、Grid 等组织页面结构
2. **异步的网络通道** — `fetch` / `axios` 等在不阻塞 UI 的情况下与后端通信
3. **UX 与异常处理** — 加载状态、错误提示，让用户知道「正在请求」或「出错了」
4. **防止 XSS 注入** — 对用户输入做转义/过滤，避免恶意脚本被注入到页面

---

### 2. About My Own Blog

这个站点是用 **Astro** 搭建的个人博客，源码托管在 GitHub，部署在 Vercel：

- 线上：https://yixuan-own-blog.vercel.app
- 仓库：https://github.com/yixuan1112-coder/yixuan_own_blog

文章写在 `src/content/blog/` 下的 Markdown 文件里，每篇需要 frontmatter（`title`、`description`、`pubDate` 等）。本地改完后跑 `npm run build` 确认无报错，再 `git add` → `commit` → `push`，Vercel 会自动重新部署。

从 6 月初开始用「每日反思」系列记录学习笔记；也踩过 frontmatter 写错、`pubDate` 格式、代码块未闭合等问题——详见 6 月 4 日那篇 checklist。

---

## 今日杂谈

Full stack 不只是「前端 + 后端」，还包括 Git 工作流、依赖管理、部署，以及像 XSS 这样的安全意识。把今天课堂上的点写下来，以后做项目时少翻文档。

However, tomorrow is another day! 🤩
