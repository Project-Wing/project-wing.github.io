<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { withBase } from 'vitepress'
import { site } from '../../content/site'
import ScreenshotFrame from './ScreenshotFrame.vue'

const activeIndex = ref(0)
const activePreview = computed(() => site.preview.items[activeIndex.value])
const tabs = ref<HTMLButtonElement[]>([])
const link = (href: string) => /^https?:\/\//.test(href) ? href : withBase(href)
const external = (href: string) => /^https?:\/\//.test(href)

async function onTabKeydown(event: KeyboardEvent, index: number) {
  let target = index
  if (event.key === 'ArrowRight') target = (index + 1) % site.preview.items.length
  else if (event.key === 'ArrowLeft') target = (index - 1 + site.preview.items.length) % site.preview.items.length
  else if (event.key === 'Home') target = 0
  else if (event.key === 'End') target = site.preview.items.length - 1
  else return
  event.preventDefault()
  activeIndex.value = target
  await nextTick()
  tabs.value[target]?.focus()
}
</script>

<template>
  <div class="wing-landing">
    <section class="wing-hero wing-container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="wing-eyebrow hero-eyebrow"><span aria-hidden="true"></span>{{ site.hero.eyebrow }}</p>
        <h1 id="hero-title">{{ site.hero.title }}<br><em>{{ site.hero.highlight }}</em></h1>
        <p class="hero-description">{{ site.hero.description }}</p>
        <div class="wing-actions">
          <a class="wing-button primary" :href="link(site.hero.primary.link)">{{ site.hero.primary.text }}<span aria-hidden="true">↗</span></a>
          <a class="wing-button secondary" :href="link(site.hero.secondary.link)">{{ site.hero.secondary.text }}<span aria-hidden="true">↓</span></a>
        </div>
        <ul class="hero-notes" aria-label="项目特点"><li v-for="note in site.hero.notes" :key="note">{{ note }}</li></ul>
      </div>
      <figure class="hero-stage" :class="{ 'is-mobile': site.hero.image && site.hero.imageLayout === 'mobile' }">
        <div class="hero-orbit" aria-hidden="true"></div>
        <div :class="{ 'hero-stack': site.hero.image && site.hero.stack.length }">
          <div v-for="(shot, index) in (site.hero.image ? site.hero.stack : [])" :key="shot.image" class="hero-stack-card" :class="`hero-stack-card-${index + 1}`">
            <ScreenshotFrame :src="shot.image" :alt="shot.alt" :aspect="shot.aspect" :label="shot.alt" eager />
          </div>
        <div class="hero-window">
          <ScreenshotFrame :src="site.hero.image" :alt="site.hero.imageAlt" :aspect="site.hero.imageAspect" label="用户端界面" eager>
            <div class="hero-sketch" aria-label="产品展示占位示意，实际截图待补充">
              <div class="sketch-nav"><strong>听见 · 音乐档案</strong><span>作品 / 活动 / 影像</span></div>
              <div class="sketch-banner"><small>EVERY NOTE HAS A STORY</small><strong>在音乐里，遇见彼此。</strong><span>记录喜欢的声音，珍藏每一次共鸣。</span></div>
              <div class="sketch-section-title">音乐，连接你我。<span>DISCOVER ↗</span></div>
              <div class="sketch-albums" aria-hidden="true"><div><span>山海</span><small>每一个声音</small></div><div><span>入梦</span><small>每一份共鸣</small></div><div><span>流光</span><small>每一次相遇</small></div></div>
            </div>
          </ScreenshotFrame>
        </div>
        </div>
        <figcaption>{{ site.hero.image ? '界面效果图，数据仅供模拟展示' : '界面示意 · 实际截图待补充' }}</figcaption>
      </figure>
    </section>

    <section class="community-strip wing-container" aria-label="面向不同音乐人的社群">
      <p>{{ site.community.text }}<br><span>{{ site.community.subtext }}</span></p>
      <ul><li v-for="name in site.community.names" :key="name">{{ name }}</li><li class="community-more">{{ site.community.suffix }}</li></ul>
    </section>

    <section id="features" class="wing-section wing-container" aria-labelledby="features-title">
      <div class="section-heading">
        <div><p class="wing-eyebrow">{{ site.features.eyebrow }}</p><h2 id="features-title">{{ site.features.title }}</h2></div>
        <p class="section-description">{{ site.features.description }}</p>
      </div>
      <div class="feature-grid">
        <article v-for="feature in site.features.items" :key="feature.number" class="feature-card">
          <p class="feature-index">{{ feature.number }} / {{ feature.label }}</p>
          <h3>{{ feature.title }}</h3><p class="feature-description">{{ feature.description }}</p>
          <div class="feature-detail">
            <svg v-if="feature.icon === 'music'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18V5l12-2v13M9 8l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/></svg>
            <svg v-else-if="feature.icon === 'calendar'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-14 5h3m4 0h3"/></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m7 14 4-7 3 10 3-7"/></svg>
            <span>{{ feature.detail }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="preview" class="preview-section" aria-labelledby="preview-title">
      <div class="wing-container">
        <div class="section-heading">
          <div><p class="wing-eyebrow">{{ site.preview.eyebrow }}</p><h2 id="preview-title">{{ site.preview.title }}</h2></div>
          <p class="section-description">{{ site.preview.description }}</p>
        </div>
        <div class="preview-tabs" role="tablist" aria-label="界面类型">
          <button v-for="(item, index) in site.preview.items" :id="`preview-tab-${item.id}`" :key="item.id" ref="tabs" type="button" role="tab" :aria-selected="index === activeIndex" :tabindex="index === activeIndex ? 0 : -1" :aria-controls="`preview-panel-${item.id}`" @click="activeIndex = index" @keydown="onTabKeydown($event, index)">{{ item.label }}</button>
        </div>
        <div v-for="(item, index) in site.preview.items" :id="`preview-panel-${item.id}`" :key="item.id" role="tabpanel" :aria-labelledby="`preview-tab-${item.id}`" :hidden="index !== activeIndex" tabindex="0">
          <div class="preview-surface" :class="{ 'is-mobile': item.id === 'mobile' }">
            <ScreenshotFrame :src="item.image" :alt="item.alt" :label="item.label" :aspect="item.aspect" />
          </div>
        </div>
        <p class="preview-description" aria-live="polite">{{ activePreview.description }}</p>
      </div>
    </section>

    <section class="wing-section wing-container" aria-labelledby="cta-title">
      <div class="wing-cta">
        <div><p class="wing-eyebrow">{{ site.cta.eyebrow }}</p><h2 id="cta-title">{{ site.cta.title }}</h2><p>{{ site.cta.description }}</p></div>
        <div class="wing-actions"><a v-for="(action, index) in [site.cta.primary, site.cta.secondary]" :key="action.text" class="wing-button" :class="index === 0 ? 'primary' : 'secondary'" :href="link(action.link)" :target="external(action.link) ? '_blank' : undefined" :rel="external(action.link) ? 'noopener noreferrer' : undefined">{{ action.text }}<span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
    <footer class="wing-footer wing-container">
      <div><a class="footer-wordmark" :href="withBase('/')">wing.</a><p>{{ site.footer.tagline }}</p></div>
      <p class="footer-note">{{ site.footer.note }}</p>
      <nav aria-label="页脚导航"><a v-for="item in site.footer.links" :key="item.text" :href="link(item.link)" :target="external(item.link) ? '_blank' : undefined" :rel="external(item.link) ? 'noopener noreferrer' : undefined">{{ item.text }}</a></nav>
    </footer>
  </div>
</template>
