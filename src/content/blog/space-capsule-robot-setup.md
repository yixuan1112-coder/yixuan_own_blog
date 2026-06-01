---
title: 'The daily reflections--June 1st 2026'
description: 'How to restart the robot over SSH, build a complete map, and enable navigation for space capsule operation.'
pubDate: 'May 31 2026'
heroImage: '../../assets/屏幕截图 2026-06-01 214728.png'
---

Restarting the machine generally involves first connecting your computer and the robot to the same Wi-Fi network, then remotely logging in via SSH and using conda to access the robot's virtual environment.

## Wi-Fi and SSH Setup

Make sure your computer and the robot are on the same Wi-Fi network before you begin. Once connected, log in to the robot remotely over SSH. After you are in, use conda to activate the robot's virtual environment so you can run the required commands in the correct context.

## Map Building

During the operation of the space capsule, first activate two options using code. Select the map option, then manipulate the robot to walk around the scene once. Make sure the boundaries are filled completely, without any gaps — a thorough pass helps the map capture the full area accurately.

## Navigation

After the map is built, enable navigation mode and check if the map is compliant. If it is, you can operate the space capsule by selecting options according to the previously configured code and program.

## 今日杂谈
好久没有写东西了。上次写东西是在上次。
之前不相信自己天天都可以写日记记录生活，放弃一次就永远放弃了，但是我今天决定之后每天都要写日记。想记录一下自己的progress，记录一下生活。
今天刚刚布置完Marina bay sands expo的亚太零售展的展会，明天开始就是三天的展会，后天要去poly进行机器人展示。  
除了这些，今天还在稳步推进项目的进行。比如今天查了bus challenge的calculation statistic然后也查看了一下我的launchpod项目为什么看不了前端页面的问题。
（在23：08更新：mac太坑了啊！为什么还要故意搞一个._前缀影子虚假的文档来骗我！我就说为啥有两个完全一样的文件夹在zip里面，结果发现是不一样的。就是mac的机制，大概是下面的原因：1：在苹果的 macOS 系统中，文件不仅包含内容本身（比如一张图、一段核心代码），还包含很多“元数据”（Metadata）。这些元数据记录了：这个文件是从哪个网站下载来的？（是否安全，即 Quarantine 隔离机制）这个文件在 Mac 标签里被涂成了什么颜色？它的缩略图预览长什么样？
Mac 的文件系统（APFS）非常高级，它有一个专门的“隐藏口袋”写这些内容。
2. 为什么在 Windows 上会变成乱码？
当用 Mac 的人把文件夹打包压缩（zip）发给你，或者传到网盘时，这个压缩包一旦脱离了苹果的特殊文件系统，落到 Windows 盘符（NTFS）里，那个“隐藏口袋”就没地方放了。
为了不让这些重要的元数据丢失，Mac 的打包程序只能妥协，采取了一种叫 AppleDouble 的技术：它把原本合二为一的文件强行拆成两个文件。
主体文件：index.html（Windows 能完美识别）。
影子文件：._index.html（这就是你点开的那个）。它专门用来装 Mac 的隐藏内容，里面用的是苹果特有的二进制编码。
总之我的github的lauchpod项目上传了其中一个文件还没传完，就看明天了。。。。）
这一周感觉在展会现场可能学不到什么知识吧，所以尝试一下是否可以add some connections.It's also a good choice.
See myself tomorrow!  
加油
