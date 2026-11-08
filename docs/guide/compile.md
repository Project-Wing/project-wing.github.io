---
title: 编译
description: 讲述如何修改配置，从源代码编译产物
---

# 编译Wing

目前wing需要从源代码编译后部署。

**请注意，编译是跨平台的，你可以在自己的电脑上完成编译，将产物上传到要部署的服务器即可。**
本页指南适用于Windows和Linux。

## 前置条件

安装了Java，maven和Node.js

## 修改配置

clone仓库或下载最新版源代码tarball。

### 修改凭据配置

将`wing-admin`下的`src\main\resources`中的`application-dev.yaml`复制一份为`application-prod.yaml`

将`application-prod.yaml`里面的内容修改为**最终要部署的目标服务器上的**实际情况，如PosgreSQL的端口号，用户名，密码等。**尤其是`token.secret`，内容可以是任意字符串，但绝对不可以让其他人知道，切记！**

将`application.yaml`的`wing.profile`调整为合适的路径，例如，如果目标服务器是Windows，可以填写为`C:/Users/Administrator/server/uploadPath`，如果目标服务器是Linux，可以填写为`/home/ubuntu/img`

将`application.yaml`的`spring.profile.active`改为`prod`

**和编译用的机器不一定是一致的，切记！**

### 配置站点信息

打开`application-site.yaml`，根据你的实际情况填写即可。以下是一份常见的配置（仅供参考，请不要直接复制粘贴，这是你的网站，实际信息应该填写你需要的）

```yaml
wing:
  site:
    # 网站标题
    name: "小女司南vNext"
    # 歌手的应援口号
    slogan: "声声司南，岁岁相伴"
    # 用户端 About 页的应用简介，
    introduction: "我们是一个粉丝自建的司南资料站与社区网站，在这里你可以查询演出信息，查看美照，翻阅曲库信息，登录参与讨论等。本站数据为公开信息整理，不一定保证准确性，如发现错误疏漏欢迎联系我们更正。"
    # 预留字段，请关注后续版本更新
    point-name: "勺子"
    # 你买的准备部署的域名，没域名可写IP地址
    portal-url: "https://wingsinan.site"
    # 管理端首页显示的话语
    admin-welcome: "你是引路星 带引⽉亮⾛出孤寂\n你是飞鸟翼 离开⼼上刻下轨迹\n你是灯塔⾥ 穿透风⾬守候坚定\n我在追随你 寻⼀个归期"

    # 你的开发者信息
    support:
      name: "'小女司南'意见反馈"
      id: "463750130@qq.com"
      desc: "用于反馈应用使用问题，建议等"

  # 歌手信息
  artist:
    name: "司南"
    name-en: "Wing"
    real-name: "王雯音"
    alias: "勺子，司南喃"
    birthdate: "2000年5月7日"
    birthplace: "中国·湖南·长沙"
    fan-name: "喃瓜皮"
    studio-name: "司南工作室"
    introduction: "司南，2000年5月7日生，内地女歌手。2016年凭《玖九》出道，2018年发6首单曲，2019年推出《冬眠》等大量作品。2020年唱《春节》，2021年登《邻家诗话》并凭《冬眠》获腾讯音乐十大热歌奖。2022年起多次参加“花开天下”演唱会，献唱电影推广曲，2024年开启首次全国巡演《出发》，2025年启动《梦话》巡演。时至今日，司南仍活跃在一线不断更新作品，未来将会有更多巡演。"

    
    # 微博超话地址
    super-topic-url: "https://weibo.com/p/1008088fa5edf6998e3b3b11e47a06eb2b2956/super_index"

    # 歌手各账号的地址，名字，描述等
    social-accounts:
      - platform: weibo
        name: "@w司南喃喃喃"
        id: "@w司南喃喃喃"
        link: "https://weibo.com/u/5401723589"
        desc: "官方认证微博，分享最新动态"
      - platform: rednote
        name: "司南_wing"
        id: "sinan_wing"
        link: "https://www.xiaohongshu.com/user/profile/5ea66b3f0000000001000b7b"
        desc: "官方小红书账号，分享最新动态"
      - platform: danmaku
        name: "w司南喃喃喃"
        id: "350065580"
        link: "https://space.bilibili.com/350065580"
        desc: "官方B站账号，分享最新动态"
      - platform: tiktok
        name: "司南"
        id: "sinannannannan"
        link: "https://www.douyin.com/user/MS4wLjABAAAAJ5N5pFciy8nYk3jXkJH6Zp3nO8Z9bXoG8v3KX1K0n4E"
        desc: "官方主账号，发布最新动态"
      - platform: qm
        name: "司南"
        id: "司南"
        link: ""
        desc: "官方QQ音乐账号，分享最新音乐"
      - platform: cm
        name: "司南"
        id: "勺子"
        link: ""
        desc: "官方网易云音乐账号，分享最新音乐"
      - platform: kw
        name: "司南"
        id: "司南"
        link: ""
        desc: "官方酷我音乐账号，分享最新音乐"
      - platform: kg
        name: "司南"
        id: "司南"
        link: ""
        desc: "官方酷狗音乐账号，分享最新音乐"
      - platform: am
        name: "司南"
        id: "司南"
        link: ""
        desc: "官方apple music音乐账号，分享最新音乐"
      - platform: w_video
        name: "司南"
        id: "司南"
        link: ""
        desc: "官方apple music音乐账号，分享最新音乐"

    # 粉丝群平台，号码，简介等
    fan-groups:
      - platform: qq
        name: "勺勺的唯一宫殿"
        id: "578677104"
        link: ""
        desc: "司南QQ官方粉丝群"
      - platform: tiktok
        name: "司南的粉丝群 1"
        id: "611646077933"
        link: ""
        desc: "抖音官方粉丝团"
      - platform: rednote
        name: "司南的朋友圈"
        id: "司南的朋友圈"
        link: ""
        desc: "小红书官方粉丝圈，需要关注司南WingStyle的小红书账号"
  
  # 智能助手的名字和欢迎语
  ai:
    display-name: "喃 · AI"
    welcome: "你好，我是喃 · AI"
```

## 编译项目

### 编译核心

确保安装了maven和Java。

在`Wing-Core-Next`源代码根目录打开终端（Windows是cmd，Linux请在终端cd到`Wing-Core-Next`根目录）。依次输入：

Windows：

``` powershell
mvn clean
mvn package
```

linux：

``` bash
mvn clean
mvn package
```

完成后找到`wing-admin\target`下的`wing-admin.jar`即为核心编译产物。

### 编译管理端

确保你安装了Node.js

在`Wing-UI-Mgmt-vue3-Next`源代码根目录打开终端（Windows是cmd，Linux请在终端cd到`Wing-UI-Mgmt-vue3-Next`根目录）。依次输入：

Windows：

``` powershell
npm install -g
npm run build:prod
```

Linux：


``` bash
npm install -g
npm run build:prod
```

找到dist文件夹，即为管理端编译产物，这是一个可直接用浏览器打开的网页。

### 编译用户端

确保你安装了Node.js

在`Wing-UI-User-vue3-Next`源代码根目录打开终端Windows是cmd，Linux请在终端cd到`Wing-UI-User-vue3-Next`根目录）。依次输入：

Windows

``` 
npm install -g
npm run build:h5
```

linux

``` bash
npm install -g
npm run build:h5
```

找到`dist\h5`文件夹，即为管理端编译产物，这是一个可直接用浏览器打开的网页。


**尽管用户端使用了uni-app编写，但是不保证所有功能在小程序和App下可用，您可以尝试编译小程序或App进行探索，这是一个技术债，Wing未来没有支持小程序的规划，也没有任何uni的需求（我们未来会支持PWA，但不是通过uniapp方法），我们也强烈不建议将这类项目部署到微信小程序等平台，因为它们不是自由的平台且存在隐私问题。也不建议使用uni-app打包apk，那样的产物存在非开源内容且含有跟踪器，会导致隐私泄露。**

**请放心，uniapp的node部分是完全开源的（不开源的是apk部分），项目本身不会因此携带后门或跟踪器。**

将编译产物（一个jar两个文件夹）上传到准备部署的目标服务器。