<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SpeedInsights from "@vercel/speed-insights"
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
        <!-- 闪信显示区域 -->
        <div id="flashMessage" class="animate-fade" v-if="message">
          <h4>{{ message }}</h4>
        </div>
        <h1>Deploy with Vercel</h1>
      <nav class="py-6">
        <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> |
        <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style>
/* Tailwind CSS is now used for layout styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* #flashMessage样式已移除，使用Tailwind CSS的animate-fade类代替 */

/* nav样式已通过Tailwind类应用 */
/* 保留最小样式以确保兼容性 */
</style>