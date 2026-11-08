---
title: 文案与截图
description: 修改介绍站的文案、产品截图、导航与文档。
---

# 维护介绍网站

## 修改首页文案

首页的主要文案、导航、功能卡片和按钮地址集中在：

```text
docs/.vitepress/content/site.ts
```

首屏、社群示例、功能介绍、界面预览、行动入口和页脚分别对应 `hero`、`community`、`features`、`preview`、`cta`、`footer`。

`community.names` 是适用对象举例，不表示音乐人与本项目存在合作或背书关系。可以按需要替换或清空数组。

## 放入实际截图

将图片放进 `docs/public/screenshots/`，例如：

```text
docs/public/screenshots/hero.webp
docs/public/screenshots/user.webp
docs/public/screenshots/admin.webp
docs/public/screenshots/mobile.webp
```

在 `site.ts` 中把对应的 `image` 从空字符串改成公开路径：

```ts
hero: {
  // 保留其余字段
  image: '/screenshots/hero.webp',
  imageAlt: '你的截图说明',
}
```

界面预览中的用户端、管理端、移动端分别在 `preview.items` 中设置路径、说明和 `aspect`（宽高比）。

首屏建议横图；移动端建议竖图。图片完整显示，不会强行裁切。留空时显示占位内容，加载失败时显示回退状态。

建议使用经过压缩的 WebP 或 PNG；发布前检查截图中没有密钥、个人资料或后台敏感数据。

## 新增文档

在 `docs/guide/` 中新增 Markdown 文件，并在 `docs/.vitepress/config.ts` 的 `sidebar` 中添加入口。内部链接使用站内绝对路径或相对 Markdown 路径，构建时会检查失效页面链接。

页面标题和描述写在 frontmatter 中：

```yaml
---
title: 页面标题
description: 页面简介
---
```

首页布局位于 `docs/.vitepress/theme/components/WingHome.vue`，品牌颜色和响应式样式位于 `docs/.vitepress/theme/style.css`。

## 本地开发与构建

```sh
npm ci
npm run dev
```

提交前运行：

```sh
npm run typecheck
npm run build
npm run preview
```

## 发布

推送到 `main` 后，GitHub Actions 会检查类型、构建并发布到 GitHub Pages。PR 仅执行检查，不部署。也支持手动触发工作流（选择 `main` 分支）。

仓库的 **Settings → Pages → Build and deployment → Source** 应选择 **GitHub Actions**。
