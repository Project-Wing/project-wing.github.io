---
title: Windows安装
description: 讲述如何在Windows安装Wing
---

# 在Windows安装

## 前置条件

如果您使用的是Windows Server云服务器，请先通过远程桌面进入系统，接下来所有操作在服务器上进行。

## 导入数据

使用navicat连接到安装好的PostgreSQL实例，右键新建数据库，命名为`spoon_wiki_db`
![](/images/windows-psql-newdb.png)
双击进入此数据库，点击新建查询，数据库选择`spoon_wiki_db`，命名选择`public`

![](/images/windows-psql-init.png)

粘贴`Wing-DB-Next`仓库中SQL文件的内容，点击`Run`。等待完成执行。


## 配置AI功能密钥（可选）

**使用此功能需要付费，请与供应商确认相关情况**

去[阿里云百炼](https://www.aliyun.com/product/bailian)注册账户申请密钥key。

在Windows系统中添加环境变量`DASHSCOPE_API_KEY`,内容为API_KEY内容。


## 运行项目

### 运行后端

将编译产物上传目标服务器放在一个不易被清理的路径。
打开终端，输入：
```powershell
java -jar '核心jar包所在路径'
```

保持窗口打开即可。

### 运行前端

在nginx安装位置找到nginx.conf，修改下列部分

```conf
events {
    worker_connections 4096;
    multi_accept on;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;


    client_max_body_size 200m;
    client_header_timeout 1m;
    client_body_timeout 1m;


    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 5;
    gzip_types
        text/plain
        text/css
        application/json
        application/javascript
        text/xml
        application/xml
        application/xml+rss
        text/javascript;

   
    server {
        listen 80 #最好是80，想改也行;
        server_name '你网站域名，不写也行';

        root 'h5文件夹所在位置';
        index index.html index.htm;
        try_files $uri $uri/ /index.html;

        ## 后端 API
        location /prod-api/ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_http_version 1.1;
            proxy_set_header Connection "";

            proxy_pass http://127.0.0.1:8080/;
        }
    }

    
    server {
        listen 507 #随便，你记住就行;
        server_name '你网站域名，不写也行';

        root 'dist文件夹所在位置';
        index index.html index.htm;
        try_files $uri $uri/ /index.html;

        location /prod-api/ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            proxy_pass http://127.0.0.1:8080/;
        }
    }
}
```

双击或者cmd启动nginx

