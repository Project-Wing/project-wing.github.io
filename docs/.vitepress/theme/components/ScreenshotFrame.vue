<script setup lang="ts">
import { ref, watch } from 'vue'
import { withBase } from 'vitepress'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  label: string
  aspect?: string
  eager?: boolean
}>(), { aspect: '16 / 10', eager: false })

const failed = ref(false)
watch(() => props.src, () => { failed.value = false })
</script>

<template>
  <div class="screenshot-frame" :style="{ '--screenshot-aspect': aspect }">
    <img
      v-if="src && !failed"
      :src="withBase(src)"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
      @error="failed = true"
    >
    <div v-else class="screenshot-placeholder">
      <slot>
        <span class="placeholder-symbol" aria-hidden="true">↗</span>
        <strong>{{ label }}</strong>
        <span>{{ failed ? '截图暂时无法显示' : '实际截图即将补充' }}</span>
      </slot>
    </div>
  </div>
</template>
