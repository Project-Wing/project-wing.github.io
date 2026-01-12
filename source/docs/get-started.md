---
title: 快速开始
---

<p style="background:#009688;color:#fff;padding:8px 12px;margin:0;border-radius:4px;">
  ⚠️ 此页面部分内容可能是由机器翻译并生成。
</p>

---

# 本节概要

- 在Windows Server安装
- 在Linux Host OS安装
- 通过Docker安装


# 概述

本节介绍如何快速部署本项目。开始之前请确保你已经按照[这里](./requirements)所述完成配置。

# 在Windows Server安装

本节所述方法同样适用于Windows10和Windows11。
本节提到的X代表你的系统盘盘符。

**如果计算机位于远程位置，请使用Microsoft Remote Desktop连接后远程操作。**


## 配置MySQL数据库

本节截图以navicat数据库管理系统为样例。

1. 从[Wing-DB-And-Config](https://github.com/Project-Wing/Wing-DB-And-Config)仓库下载两个SQL文件
<img src="/images/0.png"  width="80%"/>

2. 在MySQL创建数据库，编码选择UTF8MB4，并记住命名，本文档和项目的默认配置文件以spoon_wiki_db为例。
<img src="/images/1.png"  width="80%"/>

3. 在spoon_wiki_db下执行下载的SQL文件。

<img src="/images/2.png"  width="80%"/>

<img src="/images/3.png"  width="80%"/>

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>💡 注意</strong><br>
  两个SQL文件都要导入！
</div>

完成

## 配置Redis

保持默认配置即可，不要设置密码。如果您不放心可以复制[Wing-DB-And-Config](https://github.com/Project-Wing/Wing-DB-And-Config)仓库的`redis.conf`，并覆盖redis安装目录下同名文件。有关redis配置文件的详细信息请参考[文档](https://redis.io/docs/latest/operate/oss_and_stack/management/config/)

## 配置nginx

复制[Wing-DB-And-Config](https://github.com/Project-Wing/Wing-DB-And-Config)仓库的`nginx.conf`，并覆盖nginx安装目录下`conf`文件夹同名文件。

示例的配置文件中，管理系统的端口号为507，`HTML`文件存放位置为`nginx`安装目录的`html\admin\dist`文件夹，用户界面的端口号为81，`HTML`文件存放位置为`nginx`安装目录的`html\user\h5`。

## 编译Wing-Core

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>💡 注意</strong><br>
  需要互联网连接才能保证依赖下载
</div>


从[Wing-Core](https://github.com/Project-Wing/Wing-Core)仓库`clone`最新版源代码或从`release`下载发行版源代码。

### 修改项目配置

展开工程目录下的`wing-admin\src\main\resources`文件夹。这里有三个文件：
`application.yml`：通用配置。在这里修改项目显示信息
`application-dev.yml`：开发配置（默认使用此选项）
`application-prod.yml`：生产配置

注意：正常运行时，一般选择`application-prod.yaml`，`application-dev.yaml`往往用于二次开发时的本地测试，连接开发计算机上的本地样例数据库

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>⚠️ 警告</strong><br>
  不要将`application-prod.yml`中的任何信息泄露给其他人！
</div>


****

- 修改歌手信息

    将`application.yml`中的`customization`子项按照自己的需求修改，例如歌手姓名，歌手真实姓名，粉丝爱称等。~~如果您不知道这是什么含义那么本项目可能不适合您的需求~~

- 切换到`prod`模式

    将`application.yml`中的`spring.profile.active`子项改成`prod`。

- 设置MySQL连接

    将application-prod.yml中的`spring.datasource.druid.master`子项中的`url`改成你的数据库名称，例如如果数据库名叫`spoon_wiki_db`，那么这一项填写`jdbc:mysql://localhost:3306/spoon_wiki_db?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8`

    将`username`和`password`改成安装MySQL时设置的用户名和密码。

### 编译jar文件

在命令提示符中导航到项目根目录。

运行

``` powershell
mvn clean
mvn clean package -DskipTests
```

等待命令执行完成，找到`wing-admin`文件夹下`target`文件夹中`wing-admin.jar`文件即为编译完成的二进制文件（jar应用程序包）

### 运行jar文件

确保MySQL和redis正在运行。将上一步的`wing-admin.jar`拷贝到一个可以长期存放的地方。

在命令提示符中导航到这个位置，运行：

``` powershell
java -jar wing-admin.jar
```

如果看到下列输出代表`Core`运行成功：

```
        人总是在反驳和批评曾经的自己当中,
                长出新的自己,
            不要忘记爱自己就好了。
                        ————w司南喃喃喃
(♥◠‿◠)ﾉﾞ  Wing启动成功   ლ(´ڡ`ლ)ﾞ  
 ______              __              __          ________ __              
|   __ \.----.-----.|__|.-----.----.|  |_ ______|  |  |  |__|.-----.-----.
|    __/|   _|  _  ||  ||  -__|  __||   _|______|  |  |  |  ||     |  _  |
|___|   |__| |_____||  ||_____|____||____|      |________|__||__|__|___  |
                   |___|                                           |_____|

```

访问`http://localhost:8080`，如果看到下列画面说明`Core`运行成功。

<img src="/images/13.jpeg"  width="80%"/>

## 编译Wing-UI-Mgmt

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>💡 注意</strong><br>
  需要互联网连接才能保证依赖下载
</div>


从[Wing-UI-Mgmt](https://github.com/Project-Wing/Wing-UI-Mgmt)仓库`clone`最新版源代码或从`release`下载发行版源代码。

### 修改项目配置

打开项目根目录下`.env`文件，按照自己的需求修改内容，如歌手名字，微博等社媒地址，出生年月等。

### 导出HTML文档

在命令提示符中导航到项目根目录。

确保你拥有互联网连接，运行

``` powershell

npm install
npm run build:prod

```

完成后将项目根目录下`dist`文件夹中的内容（不包括文件夹本身）拷贝到Nginx安装目录下的`html\admin\dist`文件夹中，目录结构应当看起来像下面这样
```
|- html
    |- admin
    |   |- dist
    |       |- html
    |       |- style
    |       |- static
    |       |- index.html
    |       |- favicon.ico
    |-user
        |- h5
```

在命令提示符中运行
``` powershell

nginx -s reload

```
访问`http://localhost:507`，如果出现登录UI说明项目运行成功。如果长时间卡在“海内存知己，天涯若比邻”界面，请检查是否启用JavaScript，如果仍然无法解决问题，请检查您安装的浏览器扩展程序设置。


## 编译Wing-UI-User

从[Wing-UI-User](https://github.com/Project-Wing/Wing-UI-User)仓库`clone`最新版源代码或从`release`下载发行版源代码。

### 修改项目配置

打开项目根目录下`.env`文件，按照自己的需求修改内容，如歌手名字，微博等社媒地址，出生年月，开屏介绍等。


### 导出为HTML文档

在命令提示符中导航到项目根目录。

确保你拥有互联网连接，运行

``` powershell

npm install
npm run build:h5

```

完成后将项目根目录下`dist\build\h5`文件夹中的内容（不包括文件夹本身）拷贝到Nginx安装目录下的`html\user\h5`文件夹中，目录结构应当看起来像下面这样：

```
|- html
    |- admin
    |   |- dist
    |       |- html
    |       |- style
    |       |- static
    |       |- index.html
    |       |- favicon.ico
    |-user
        |- h5
            |- static
            |- index.html
```

在命令提示符中运行
``` powershell

nginx -s reload

```
访问`http://localhost:81`，如果出现用户UI说明项目运行成功。如果长时间卡在BSOD界面，请检查是否启用JavaScript，如果仍然无法解决问题，请检查您安装的浏览器扩展程序设置。


### 导出为微信小程序

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>💡 注意</strong><br>
  用户可能会反感使用这类闭源生态，因此除非明确你的产品定位与需求（例如为了快速推广），否则不建议以这样的方式发布一款开源软件。<br>
  您必须将Wing-Core部署到公网IP才能使用微信小程序功能。<br>
  微信开发者工具只支持Windows平台。
</div>


#### 注册小程序
要发布小程序，您必须注册为微信开发者并在开发者平台注册您的小程序，请参考[微信公众平台](https://mp.weixin.qq.com/cgi-bin/wx)，

完成后，登录微信公众平台， 在「开发管理」里拿到 AppID（形式应当类似于wx1234567890abcdef）。

同时，在「小程序后台-开发设置」里把您部署Wing-Core的地址域名加到 request / uploadFile / downloadFile 合法域名列表，否则正式版无法请求数据。

#### 安装工具

安装[HBuilderX](https://dcloud.io/hbuilderx.html)和[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

**微信开发者工具仅支持Windows平台**

使用HBuilderX打开项目

#### 配置小程序发布

打开项目根目录的 manifest.json → 找到「微信小程序配置」节点，填入上一节申请的 AppID。

#### 编译微信小程序软件包

在HBuilderX顶部菜单找到 发行 → 小程序-微信 → 输入小程序名称与 AppID → 点击「发行」。
编译产物会生成到项目根目录下`\dist\build\mp-weixin`。

随后，HBuilderX会自动调起微信开发者工具并导入项目。

#### 上传微信小程序

在微信开发者工具里点击右上角「上传」→ 填写版本号（1.0.0）与项目备注 → 确认上传。

#### 提交审核
回到微信公众平台 → 版本管理 → 开发版本里找到刚才上传的版本 → 提交审核 → 审核通过后点击「发布」即可上线。

### 导出为Android软件包

<div style="
  background:#009688;
  border-radius:8px;
  padding:16px 20px;
  margin:16px 0;
  line-height:1.6;
  color:#fff
">
  <strong>⚠️ 警告</strong><br>
  Uniapp导出为Android软件包依赖一个不开源的基座SDK，且包含推送广告和追踪SDK，这不符合本项目的开源属性，因此我们强烈不建议使用此方法进行导出，建议使用Wing自带的渐进式Web应用程序（PWA）功能。<br>
  如果您不介意包括但不限于：一觉醒来消息99+、仓库issue爆满、被用户挂QQ群/微信群/微博/酷安等，那么您可以继续使用Uniapp自带基座。
</div>

即将到来

### 导出为其他平台

理论上可以，但我们还没有测试。

# 在Linux安装

即将到来

# 从release下载二进制文件

即将到来

<!-- ---

[返回目录](./index) -->

<!-- 页脚导航 -->
<div style="margin-top:40px;border-top:1px solid #e0e0e0;padding-top:20px;">
  <div style="display:flex;justify-content:space-between;gap:12px;">
    <a href="./requirements"
       style="flex:1;text-align:center;background:#009688;color:#fff;padding:10px 0;border-radius:4px;text-decoration:none;font-size:14px;">
      上一篇
    </a>
    <a href="./index"
       style="flex:1;text-align:center;background:#009688;color:#fff;padding:10px 0;border-radius:4px;text-decoration:none;font-size:14px;">
      返回目录
    </a>
    <a href="#"
       style="flex:1;text-align:center;background:#009688;color:#fff;padding:10px 0;border-radius:4px;text-decoration:none;font-size:14px;">
      下一篇
    </a>
  </div>
</div>