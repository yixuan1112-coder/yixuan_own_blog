---
title: July 23rd
description: 密码学知识
type: knowledge
pubDate: Jul 23 2026
updatedDate: Jul 23 2026
---
## 密码学的知识体系可以划分为以下 6 个核心模块：

1. 经典对称密码学（Symmetric Cryptography）
   核心概念：加密和解密使用同一把密钥，速度极快，适合大数据量传输。

分组密码（Block Ciphers）：

算法：AES（高级加密标准，目前最主流）、DES / 3DES（已淘汰或逐渐停用）。

工作模式（Mode of Operation）：ECB（不安全）、CBC、CTR、GCM（带认证的加密模式）。

流密码（Stream Ciphers）：

逐位/逐字节加密，适合低延迟或资源受限制的场景。

算法：RC4（已淘汰）、ChaCha20（目前现代协议如 TLS 1.3 常用）。

2. 非对称密码学 / 公钥密码学（Asymmetric / Public-Key Cryptography）
   核心概念：使用一对密钥——公钥（公开用于加密/验签）和私钥（保密用于解密/签名）。

数学基础：依赖于大整数分解、离散对数或椭圆曲线等数学难题。

常见算法：

RSA：基于大素数分解，广泛用于加密和数字签名。

ECC（椭圆曲线密码学）：相比 RSA，在更短的密钥长度下提供相同的安全性（如 Ed25519、secp256k1）。

DH / ECDH（Diffie-Hellman 密钥交换）：允许双方在不安全的信道上协商出共享的对称密钥。

3. 哈希函数与消息认证码（Hash Functions & MAC）
   单向哈希函数（Cryptographic Hash Functions）：

特性：单向性、抗碰撞性、雪崩效应。

常见算法：SHA-2（SHA-256/512）、SHA-3、MD5 / SHA-1（已被攻破，仅用于非安全校验）。

消息认证码（MAC）与 HMAC：

结合密钥与哈希函数，用于验证数据的完整性与来源真实性。

数字签名（Digital Signatures）：

利用非对称加密实现抗抵赖性（如 RSA-PSS、ECDSA、EdDSA）。

4. 密钥管理与 PKI 体系（Key Management & PKI）
   公钥基础设施（PKI）：

数字证书（X.509 标准）、证书颁发机构（CA）、撤销列表（CRL）与 OCSP 协议。

密钥衍生函数（KDF）：

用于从低熵密码生成高强度密钥或防爆破（如 PBKDF2、bcrypt、scrypt、Argon2）。

前向安全性（Forward Secrecy / PFS）：

确保长期私钥泄露后，过去会话的通信内容依然不会被解密。

5. 安全协议与实际应用（Cryptographic Protocols）
   网络传输安全：TLS / SSL（HTTPS 的底层）、IPsec、SSH、WireGuard。

身份认证：OAuth 2.0、JWT（JSON Web Token）、FIDO2 / WebAuthn。

区块链与加密货币：零知识证明（ZKP）、默克尔树（Merkle Tree）、椭圆曲线签名。

6. 前沿与高级密码学（Advanced Cryptography）
   零知识证明（Zero-Knowledge Proofs, ZKP）：在不透露具体信息的前提下证明某个断言为真（如 zk-SNARKs）。

同态加密（Homomorphic Encryption）：允许直接对密文进行计算，结果解密后与对明文计算一致（保护云计算隐私）。

后量子密码学（Post-Quantum Cryptography, PQC）：

抵御未来量子计算机（如 Shor 算法）攻击的新一代密码标准（如基于格密码的 Kyber、Dilithium）。

多方安全计算（SMPC）：多个参与方共同计算一个函数，且各自不泄露隐私输入。
