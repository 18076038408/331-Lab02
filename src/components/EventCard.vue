<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Event } from '../types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink :to="{ name: 'event-detail-view', params: { id: event.id } }" class="event-link">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h3>{{ event.title }}</h3>
      <p>⏰ {{ event.time }} on {{ event.date }}</p>
      <p>📍 {{ event.location }}</p>
      <p class="category">{{ event.category }}</p> <!-- 显示分类 -->
    </div>
  </RouterLink>
</template>

<style scoped>
.event-link {
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 600px;
}

.event-card {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s; /* 优化过渡效果 */
  width: 100%;
}

/* 注释掉:hover规则，使用Tailwind的hover效果代替 */
/* .event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1); /* 增强悬停阴影效果 */
  /* 增强悬停阴影效果 */


.category {
  display: inline-block;
  margin-top: 10px;
  padding: 3px 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 0.8em;
}
</style>