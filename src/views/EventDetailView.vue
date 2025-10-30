<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type { Event } from '../types'
import { ref, defineProps } from 'vue'  // 补充导入 defineProps
// 可以保留store的导入，但移除未使用的部分
const router = useRouter()
const route = useRoute()

// 从父组件接收事件数据
const props = defineProps<{
  event: Event
  id: string
}>()

const event = ref<Event | null>(props.event)
const eventId = Number(route.params.id)
</script>

<template>
  <div class="event-detail">
    <p>Category: {{ event?.category }}</p>
    <p>Description: {{ event?.description }}</p>
    <p>Location: {{ event?.location }}</p>
    <p>Date: {{ event?.date }}</p>
    <p>Time: {{ event?.time }}</p>
    <p>Pets Allowed: {{ event?.petsAllowed ? 'Yes' : 'No' }}</p>
    <p>Organizer: {{ event?.organizer }}</p>
    <button @click="router.push({ name: 'event-edit-view', params: { id: eventId } })" class="edit-button">Edit Event</button>
  </div>
</template>

<style scoped>
.event-detail {
  padding: 40px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}

.edit-button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 4px; /* 增加圆角 */
  transition: background-color 0.3s; /* 增加过渡效果 */
}

.edit-button:hover {
  background: #359469; /* 悬停效果 */
}

/* 移除重复的动画定义，已在 App.vue 中定义 */
</style>