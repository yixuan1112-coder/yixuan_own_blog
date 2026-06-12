---
title: The-daily-reflections--June 3rd 2026
description: Daily reflection for June 3, 2026 — UI/UX with Figma, axios and
  Flask examples, config formats (JSON/TOML/YAML), and basic robotics operation.
pubDate: June 3 2026
heroImage: ""
---

## What I've Learned

### 1. PPT 跨设备格式兼容问题

* **现象**：同一个 PPT 文档在不同的电脑上打开时，可能会出现字体缺失或排版错乱。
* **解法**：在保存文档时，选择**“将字体嵌入文件”**，这样可以确保在没有安装对应字体的设备上也能完美还原设计。

### 2. Figma 转前端代码的多模式应用

在 Figma 中进行前端代码生成或辅助开发时，可以灵活选择两种模式：

* **AI 驱动模式 (AI-driven mode)**：利用 AI 自动识别设计稿并生成结构化的前端代码。
* **编辑模式 (Edition mode)**：手动调整、检查或提取精细的 CSS/布局参数。
* **混合模式**：将两者结合使用，既保证了开发效率，又保留了人工微调的灵活性。

### 3. JavaScript 前端请求代码示例与解析

以下是一个基于 `axios` 库发起异步请求的经典前端代码示例：

```javascript
import axios from 'axios'; // 引入网络请求库

// 导出生成 AI 音乐的函数；使用 async/await 进行异步操作，防止阻塞用户界面
export const generateAiMusic = async (bpm, genre, apiKey) => {
  // 定义请求的后端 API 接口地址
  const endpoint = "https://api.wubble.ai/v1/music/generation";

  // 构造请求体，打包成符合接口要求的 JSON 格式数据
  const requestBody = {
    tempo_bpm: parseInt(bpm),
    style_tags: [genre],
    duration_seconds: 30
  };

  try {
    // 开启异常处理块，发起 POST 请求并等待响应
    const response = await axios.post(endpoint, requestBody, {
      // 设置请求头：配置 Bearer Token 鉴权凭证，并指定数据传输格式为 JSON
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    // 请求成功，返回后端返回的真实数据
    return response.data;
  } catch (error) {
    // 捕获并打印 API 接入报错信息，随后将错误继续向上抛出
    console.error("API 接入报错:", error.message);
    throw error;
  }
};
```

### 4. 轻量级数据/配置格式的场景应用

JSON、TOML 和 YAML 都是主流的轻量级配置格式，但它们的侧重点有所不同：

* **JSON**：最常用于**网络请求**与数据传输（例如前后端 API 通信）。
* **YAML & TOML**：由于其高可读性，通常用来编写**项目基础配置文件**。
* **机器人领域的应用**：在机器人的 Action 配置文件中，通常会使用一系列 JSON 格式的参数总和，来精确控制机器人在指定时间内到达不同的关节角度和空间坐标。

---

### 5. Python 后端（Flask）核心逻辑示例

以下是一个配套的后端基础服务代码，包含路由监听、Token 校验与商业逻辑拦截：

```python
from flask import Flask, request, jsonify

# 初始化 Flask 服务实例
app = Flask(__name__)

# 路由装饰器（Routing）：监听服务器上的特定路径与 POST 请求
# 当有请求访问 https://your-server/v1/music/generation 时，自动触发 handle_music_generation 函数
@app.route('/v1/music/generation', methods=['POST'])
def handle_music_generation():
    # 1. 鉴权校验
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith("Bearer "):
        # 如果前端未传密钥，或未按 "Bearer <token>" 规范传参，则拒绝服务，返回 401 状态码
        return jsonify({"error": "Missing or invalid token"}), 401

    # 如果鉴权通过，以空格切分字符串，提取出真实的 API Key
    api_key = auth_header.split(" ")[1]

    # 2. 模拟商业逻辑（真实开发中会通过 SQL 查询数据库获取用户信息）
    user_tier = "Free"

    # 3. 解析前端发送的请求体
    data = request.json  # 将请求体中的 JSON 数据转换为 Python 的字典（Dictionary）
    duration = data.get('duration_seconds', 30)  # 获取音乐时长，若未传则默认 30 秒

    # B2B 商业逻辑拦截：若为免费用户（Free）却尝试生成超过 15 秒的音乐，直接拦截并返回 403 状态码
    if user_tier == 'Free' and duration > 15:
        return jsonify({"error": "Free tier is limited to 15s tracks."}), 403

    # 4. 核心计算阶段
    # 如果通过上述所有验证，此处将调用底层的 AI 算法生成音乐（此处省略核心算法调用代码）
    mock_url = "https://storage.wubble.ai/outputs/user_01_track.mp3"

    # 将成功状态和生成的音乐链接打包成 JSON，并附带 HTTP 200 状态码返回
    return jsonify({
        "status": "success",
        "audio_url": mock_url
    }), 200
```

## 今日杂谈

今天还算过得去吧！
