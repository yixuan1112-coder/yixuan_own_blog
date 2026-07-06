---
title: June 6th--self study
description: 又坚持读了一天CTF的书
type: thoughts
pubDate: Jul 07 2026
updatedDate: Jul 07 2026
---
今天学习了《Web Security for Developers》的前四章，终于对一个网站是如何运行的有了整体认识。以前我总觉得网页就是前端代码加一点后端程序，但现在发现，一个网站其实是浏览器、网络、服务器、数据库等多个部分共同协作的结果。当我输入一个网址时，浏览器会先通过 DNS 找到服务器，再利用 HTTP 与服务器通信；服务器根据请求决定返回静态资源，还是运行后端程序查询数据库、生成动态页面；浏览器收到 HTML 后，又会解析成 DOM、加载 CSS、执行 JavaScript，最终把网页呈现在屏幕上。我也意识到，安全漏洞并不是凭空产生的，而是发生在这些流程中的不同环节。例如，SQL Injection 出现在服务器查询数据库时，XSS 出现在浏览器执行 JavaScript 时，而 Session Hijacking 则与浏览器保存的 Cookie 有关。前四章虽然几乎没有介绍具体攻击方法，但却让我建立了整个 Web 系统的整体框架，也让我明白学习 Web Security 的第一步，不是记住漏洞，而是先理解一个网站到底是如何工作的。
