import { defineConfig } from 'vitepress'
import { site } from './content/site'

export default defineConfig({
  lang: 'zh-CN',
  title: site.title,
  description: site.description,
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#237d68' }],
    ['meta', { property: 'og:site_name', content: site.title }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
  ],
  sitemap: { hostname: site.url },
  transformHead({ pageData }) {
    const path = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')
    return [
      ['link', { rel: 'canonical', href: `${site.url}/${path}` }],
      ['meta', { property: 'og:title', content: pageData.title ? `${pageData.title} | ${site.title}` : site.title }],
      ['meta', { property: 'og:description', content: pageData.description || site.description }],
      ['meta', { property: 'og:type', content: 'website' }],
    ]
  },
  markdown: { lineNumbers: true },
  themeConfig: {
    logo: { src: '/favicon.svg', alt: 'Wing' },
    siteTitle: 'Wing',
    nav: site.nav,
    socialLinks: [{ icon: 'github', link: site.github }],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清除搜索', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } },
            }
          }
        },
      },
    },
    sidebar: {
      '/guide/': [
        {
          text: '认识 Wing', items: [

            { text: '项目概览', link: '/guide/' },
            { text: '开始之前', link: '/guide/getting-started' },
            { text: '环境准备', link: '/guide/prepare' }
          ]
        },
        {
          text: '安装部署', items: [
            { text: '编译', link: '/guide/compile' },
            { text: 'Windows安装', link: '/guide/install-windows' },
            { text: 'Linux安装', link: '/guide/install-linux' },
          ]
        },
        {
          text: '维护官网', items: [
            { text: '文案与截图', link: '/guide/website' }
          ]
        },
      ],
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'medium' } },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换至浅色模式',
    darkModeSwitchTitle: '切换至深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    notFound: { title: '页面暂未找到', quote: '也许它换了一个位置，回到首页继续探索 Wing。', linkLabel: '返回首页', linkText: '返回首页' },
    footer: { message: 'Project Wing · 循声而来，同羽而栖。' },
  },
})
