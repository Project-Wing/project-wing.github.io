# Project Wing 官网

基于 VitePress、Vue 3 和 TypeScript 的静态介绍网站与文档。通过 GitHub Actions 构建并部署到 GitHub Pages，不需要业务后端。

## 本地开发

使用 Node.js 22 与 npm：

```sh
npm ci
npm run dev
```

默认仅监听本机。检查及预览生产构建：

```sh
npm run typecheck
npm run build
npm run preview
```

## 修改内容

| 内容 | 位置 |
| --- | --- |
| 首页文案、导航、按钮、截图地址 | `docs/.vitepress/content/site.ts` |
| 实际产品截图 | `docs/public/screenshots/` |
| 首页结构 | `docs/.vitepress/theme/components/WingHome.vue` |
| 品牌配色、浅深色与响应式样式 | `docs/.vitepress/theme/style.css` |
| 文档与关于页面 | `docs/guide/`、`docs/about/` |
| 文档导航、搜索与站点元信息 | `docs/.vitepress/config.ts` |

图片公开地址不包含 `public`，例如 `/screenshots/user.webp`。`hero.image` 控制首屏，`preview.items[].image` 控制各端预览；为空时显示占位图，图片加载失败有回退状态。修改截图时一并更新 `alt`，按需要调整 `aspect`。详见 `docs/guide/website.md`。

首页现有文案为可替换的初稿，封面和产品画面为明确标注的布局示意。音乐人名称仅作为适用对象举例。

## 发布

在 GitHub 仓库 Settings → Pages 中选择 **GitHub Actions**。推送到 `main` 或手动在 `main` 运行 Pages 工作流即可部署；PR 仅检查类型及静态构建。构建目录为 `docs/.vitepress/dist`，不提交构建产物。

文档面向 Next 重新组织，未整理的部署步骤明确标注待补充。旧文档、旧图片和旧入口已从发布内容中移除。

旧 Hexo 框架与历史内容的本地备份放在被忽略的 `.legacy-hexo/`，不参与构建和发布；也可以从 Git 历史恢复。

## 当前依赖限制

VitePress 1.6.4 的上游 Vite 5 / esbuild 开发工具链仍有 npm audit 告警（含高危），上游稳定版暂未提供修复升级路径。开发与预览仅监听本机，不向外开放；部署到 Pages 的是静态文件，不运行开发服务器。后续升级 VitePress 时需重新审计依赖。

## 许可

见 [LICENSE](./LICENSE)。
