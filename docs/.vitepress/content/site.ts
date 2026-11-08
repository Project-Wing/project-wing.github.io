/** 官网文案、导航和截图集中在这里维护。图片文件放在 docs/public/。 */
export const site = {
  name: 'Wing',
  title: 'Project Wing',
  description: '面向国风音乐爱好者社群的开源 Wiki 建站系统。整理作品、记录现场，建立属于你的音乐资料站。',
  url: 'https://project-wing.github.io',
  github: 'https://github.com/Project-Wing',
  nav: [
    { text: '探索 Wing', link: '/#features' },
    { text: '界面预览', link: '/#preview' },
    { text: '使用文档', link: '/guide/' },
    { text: '关于项目', link: '/about/' },
  ],
  hero: {
    eyebrow: 'MADE FOR MUSIC LOVERS',
    title: '循声而来，同羽而栖',
    highlight: '让热爱，被看见',
    description: '属于国风音乐爱好者的开源Wiki建站框架。\n收藏作品、记录现场、汇聚同好，\n把散落的热爱，连接成一个完整的世界。',
    primary: { text: '开始搭建', link: '/guide/' },
    secondary: { text: '探索更多', link: '/#features' },
    notes: ['开源开放', '自由定制', '为热爱而建'],
    image: '/screenshots/hero-mobile.png', // 留空时展示示意图。
    imageAspect: '720 / 1288',
    imageLayout: 'mobile', // mobile 为竖版手机展示；desktop 为横版展示。
    stack: [
      { image: '/screenshots/hero-events.png', alt: 'Wing 演出活动时间线', aspect: '720 / 1288' },
      { image: '/screenshots/hero-lyrics.png', alt: 'Wing 歌词与制作人员资料', aspect: '727 / 1281' },
      { image: '/screenshots/hero-song.png', alt: 'Wing 歌曲详情与音乐平台链接', aspect: '722 / 1285' },
    ],
    imageAlt: 'Wing 移动端首页 · 配置示例',
    imageCaption: 'YOUR MUSIC. YOUR WORLD.',
  },
  community: {
    text: '不同的声音，同样的热爱。',
    subtext: '你的Wiki，由你定义。',
    names: ['司南', '黄诗扶', '小时姑娘', '河图','玄觞','以冬','李常超','贰婶'],
    suffix: '更多可能 ↗',
  },
  features: {
    eyebrow: 'A HOME FOR YOUR PASSION',
    title: '从一首歌开始，装下整个热爱的世界。',
    description: '作品、现场与回忆，在这里，一站式解决。\n为不同的音乐人，也为每一个独特的社群。',
    items: [
      { number: '01', label: 'MUSIC RECORDS', title: '让好作品，有迹可循。', description: '整理歌曲、歌词与作品资料，构建不断生长的音乐档案。', detail: '歌曲资料 / 歌词 / 平台链接', icon: 'music' },
      { number: '02', label: 'LIVE MOMENTS', title: '不错过，每一次相遇。', description: '演出与活动汇集成时间线，期待下一次奔赴。', detail: '活动日历 / 演出时间线', icon: 'calendar' },
      { number: '03', label: 'MAKE IT YOURS', title: '你的热爱，你的模样。', description: '从名称、资料到界面主题，让站点拥有自己的个性。', detail: '站点配置 / 外观主题', icon: 'palette' },
    ],
  },
  preview: {
    eyebrow: 'TAKE A CLOSER LOOK',
    title: '让想象，有一个具体的模样。',
    description: '内容站点，管理工具，一应俱全',
    items: [
      { id: 'user', label: '用户端', description: '作品、活动与影像，汇集在同一处。', image: '/screenshots/user.png', alt: 'Wing 用户端实际界面截图', aspect: '16 / 10' },
      { id: 'admin', label: '管理端', description: '采用Fluent Design设计语言，提供接近Windows11原生的体验', image: '/screenshots/admin.png', alt: 'Wing 管理端实际界面截图', aspect: '16 / 10' },
      { id: 'mobile', label: '移动端', description: '在小屏幕上，也能自在浏览。', image: '/screenshots/mobile.png', alt: 'Wing 移动端实际界面截图', aspect: '9 / 19' },
    ],
  },
  cta: {
    eyebrow: 'BUILD SOMETHING YOU LOVE',
    title: '下一站，为你的热爱而建。',
    description: '从了解 Wing 开始，逐步搭建属于自己的站点。',
    primary: { text: '阅读文档', link: '/guide/' },
    secondary: { text: '查看源码', link: 'https://github.com/Project-Wing' },
  },
  footer: {
    tagline: '循声而来，同羽而栖',
    note: '2014 - 2026 MaterialApps. 勺ICP备2000-0507',
    links: [
      { text: '文档', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/Project-Wing' },
      { text: '关于', link: '/about/' },
    ],
  },
}
