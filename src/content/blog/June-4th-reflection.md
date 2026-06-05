---
title: 'The-daily-reflections--June 4th 2026 — summary of the blog before'
description: 'June 4, 2026 — 复盘 6 月 2 日与 3 日日记在 GitHub + Astro 发布时出错的原因，并附上以后写帖的检查清单。'
pubDate: 'June 4 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

## What I've Learned

今天不写新技能点，而是把前两天**发博客时踩过的坑**整理成一篇说明。目标很简单：以后复制、粘贴、上传 Markdown 时，少踩同样的雷。

### 1. `heroImage` 路径必须落在 `src/assets/` 里

Astro 的 `heroImage` 使用 content collection 的 `image()` 校验，路径要指向**项目内已纳入构建的图片**，例如：

```text
heroImage: '../../assets/blog-placeholder-3.jpg'
```

若写成仓库根目录、`public/` 下随意文件名、或 GitHub 上「看起来能打开」但**不在 `src/assets/`** 的相对路径，本地 `astro build` 会报错或找不到资源。

**教训**：头图统一放在 `src/assets/`，frontmatter 用相对当前 md 文件的路径引用。

---

### 2. `pubDate` 写法：`June 2nd` 和 `June 2` 的差别

本仓库 schema 使用 `z.coerce.date()` 解析日期字符串。实践中：

- `'June 2 2026'`、`'June 3 2026'` 这类**无序数词**的写法与现有文章一致，构建稳定；
- `'June 2nd 2026'` 带 **nd/rd/th** 的写法，在某些环境下可能被解析失败或解析成意外日期。

**教训**：与 `welcome-to-my-blog.md`、`June-2nd-reflection.md` 保持一致，使用 **`June 4 2026`** 这种格式（月份英文 + 日数字 + 四位年份），不要用 `2nd`、`3rd`。

---

### 5. 6 月 3 日：未闭合的代码围栏会破坏整篇 Markdown

第三篇日记里有很长的 `javascript` 与 `python` 代码块。若少写一行 closing ` ``` `，从该位置起**后面所有标题、列表、杂谈都会被当成「还在代码块里」**，页面上表现为：

- 「今日杂谈」不显示或样式错乱；
- 标题层级消失；
- 构建或预览时出现难以定位的排版问题。

**教训**：每粘贴一个大代码块，立刻在块尾补上 **单独一行的三个反引号**，并确认语言标记成对（` ```javascript ` 开头、` ``` ` 结尾）。

---

### 6. 不要把 Markdown 链接语法写进「展示用」的代码块里

若在技术文档的 fenced code 里写了类似：

```markdown
[我的主页](https://example.com)
```

部分渲染器会**仍然解析方括号链接**，导致代码块内的示例被当成真实链接，布局异常。

**教训**：在代码块里演示链接时，可对括号转义、用缩进代码块代替、或改用纯文本说明，避免在 ` ``` ` 围栏内出现未转义的 `[text](url)`。

---

### 7. 标题 `#` 与中文之间要有空格：`## 今日杂谈`

错误示例：`##今日杂谈`（`##` 紧贴中文）

在 CommonMark 规则下，这可能**不被识别为二级标题**，而是普通段落，目录和样式都会不对。

**正确示例**：

```markdown
## 今日杂谈
```

**教训**：`#` 后空一格，再写标题文字；中英混排时也保持这一习惯。

---

### 8. Astro Content Collection 校验与 `npm run build`

所有文章经过 `src/content.config.ts` 中的 schema：

- 必填：`title`、`description`、`pubDate`；
- `pubDate` 必须能 `coerce` 成合法 `Date`；
- `heroImage` 若填写，必须是 `image()` 可解析的资源。

任一文件不合规，**整站 `astro build` 会失败**，GitHub Actions（若有）或本地部署也会卡住，看起来就像「上传了但网站没更新」。

**教训**：改完 md 后本地执行：

```bash
npm run build
```

通过后再 `git add`、`commit`、`push`。

---

## 以后发帖前检查清单（Checklist）

1. 正文从**本地源文件**复制，不用截图；GitHub 网页编辑后滚到底核对全文。
2. `title` / `description` / `pubDate` 与当天内容一致；`pubDate` 用 `June 4 2026` 格式。
3. `heroImage` 指向 `../../assets/...`，且文件在 `src/assets/`。
4. 每个 ` ``` ` 代码块都有闭合；大段粘贴后立刻检查首尾。
5. 代码块内避免裸的 `[链接](url)` Markdown。
6. 标题写成 `## 今日杂谈`（`#` 后有空格）。
7. 运行 `npm run build`，无报错再推送。

---

## 今日杂谈

今天展会终于结束了，搬东西很累，但是今晚见到小汪同志之后顿时活力满满。第二天还要搬一天的宿舍，今天犹豫过后就请假了。希望明天能顺利搬宿舍并且回血！
