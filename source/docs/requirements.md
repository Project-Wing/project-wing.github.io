---
title: 先决条件
---

# 本节概要

本节阐述安装project-wing需要的系统先决条件

# 硬件条件

- 一台计算机，可以是家用电脑，也可以是服务器或云服务器，也可以是智能手机或嵌入式设备。
- 计算机具有64位元（x64或ARM64）的中央处理器（CPU）。
- 计算机的中央处理器的运算速度在1GHz及以上。
- 计算机至少具备4GB及以上的内存（RAM）容量。
- 计算机至少具备32GB的空闲磁盘空间，如果您选择本地存储媒体文件，强烈建议至少预留128GB的磁盘空间。

# 操作系统

操作系统应满足下列条件之一

- Windows：至少具备Windows 10 1803或Windows Server 2019及以上版本。但强烈建议使用Windows Server以获取更可靠的稳定性。新手和普通小规模用户建议使用Windows Server Datacenter并启用GUI。
- Linux: 至少具备CentOS 7.0，Ubuntu 18.04，Debian 12，Redhat7及以上版本，或其他基于主流Linux发行版的操作系统。

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>💡 注意</strong><br>
  在某些计算机（常见于部分市售的笔记本电脑）上安装Windows Server可能面临技术问题，例如无法安装部分硬件的驱动程序。如果是这种情况建议使用Windows10或Windows11，但强烈建议迁移至台式工作站或伺服器，因为市售笔记本电脑通常没有为长时间运行而优化设计，用于伺服用途可能会导致硬件寿命减少，过热，死机甚至意外损坏。<br>
  注意：不建议使用非企业级容器（如Termux（非LXC版本），ChromeOS Shell等）部署，这些运行环境可能和主线Linux存在差异，可能会导致意外后果，您可以自行试验，但可能无法获取免费的疑难解答。<br>
  理论上本项目可以在MacOS运行，但是我们没有条件测试，如果您能帮助我们（赞助我们一台），不胜感激！
</div>


# 基础软件

计算机上需要准备下列软件，并正确配置对应的环境变量：

- Java JDK: >=1.8
- MySQL: >=8.0
- Redis: >=6.0
- Nginx: 任意主线版本即可
- （可选）数据库管理软件，建议使用navicat
- Maven：>=3.7（如果您安装了intellij idea等开发工具请使用开发工具自带编译功能）
- Node.JS：>=20
- npm：随Node.JS配置即可

若要安装这些软件请参考：

- [安装OpenJDK](https://openjdk.org/install/)
- [安装MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
- [安装Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/)
- [安装Nginx](https://nginx.org/en/docs/install.html)
- [安装Maven](https://maven.apache.org/guides/getting-started)
- [安装Node.JS](https://nodejs.org/zh-cn/download)
- [（Windows Server平台推荐）nvm](https://github.com/coreybutler/nvm-windows)


# 访问Wing

## 使用浏览器访问

作为web应用程序，几乎所有具有网络连接的计算机均可访问wing实例，但浏览器需要满足：

- Chromium（Google Chrome，Microsoft Edge，Android System Webview）：>=100
- FireFox: >=80

使用太旧的浏览器可能会遇到问题。

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>💡 注意</strong><br>
  Wing不支持Internet Explorer！请尽快迁移到Microsoft Edge获取安全连续的体验。<br>
  不建议在社交软件（QQ，微信等）、夸克/360/UC/QQ/联想/百度/搜狗等浏览器、或手机出厂内置浏览器（除非您的手机自带浏览器就是Google Chrome、Microsoft Edge或Mozilla Firefox）中使用Wing
</div>

## 使用微信小程序访问

如果您的wing部署了微信小程序版本，您需要使用微信版本至少为8.0.35。

<div style="margin-top:40px;border-top:1px solid #e0e0e0;padding-top:20px;">
  <div style="display:flex;justify-content:space-between;gap:12px;">
    <a href="#"
       style="flex:1;text-align:center;background:#009688;color:#fff;padding:10px 0;border-radius:4px;text-decoration:none;font-size:14px;">
      上一篇
    </a>
    <a href="./index"
       style="flex:1;text-align:center;background:#009688;color:#fff;padding:10px 0;border-radius:4px;text-decoration:none;font-size:14px;">
      返回目录
    </a>
    <a href="./get-started"
       style="flex:1;text-align:center;background:#009688;color:#fff;padding:10px 0;border-radius:4px;text-decoration:none;font-size:14px;">
      下一篇
    </a>
  </div>