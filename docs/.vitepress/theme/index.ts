import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import WingHome from './components/WingHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) { app.component('WingHome', WingHome) },
} satisfies Theme
