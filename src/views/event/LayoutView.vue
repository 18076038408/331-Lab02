<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import type { Event } from '../../types'
import EventService from '../../services/EventService'
import { defineProps } from 'vue' // 补充 defineProps 导入

// 接收路由参数
const props = defineProps<{
  id: string
}>()

// 初始化状态（定义 error 变量，解决未定义问题）
const event = ref<Event | null>(null)
const error = ref('')
const router = useRouter()

// 加载事件数据
onMounted(() => {
  EventService.getEvent(parseInt(props.id))
    .then(response => {
      event.value = response.data
    })
    .catch(err => {
      if (err.response?.status === 404) {
        router.push({ name: '404-resource-view', params: { resource: 'event' } })
      } else {
        error.value = 'Failed to load event. Please try again later.'
        // 或跳转到网络错误页：router.push({ name: 'network-error-view' })
      }
    })
})
</script>

<template>
  <div class="event-layout">
    <!-- 错误提示 -->
    <div v-if="error" class="error">{{ error }}</div>

    <!-- 事件内容 -->
    <div v-if="event && !error">
      <h1>{{ event.title }}</h1>
      
      <nav class="tabs">
        <RouterLink 
          :to="{ name: 'event-detail-view' }" 
          active-class="active"
        >Details</RouterLink> |
        
        <RouterLink 
          :to="{ name: 'event-register-view' }" 
          active-class="active"
        >Register</RouterLink> |
        
        <RouterLink 
          :to="{ name: 'event-edit-view' }" 
          active-class="active"
        >Edit</RouterLink>
      </nav>

      <RouterView :event="event" :id="id" />
    </div>

    <!-- 加载状态 -->
    <div v-if="!event && !error">Loading event details...</div>
  </div>
</template>

<style scoped>
.tabs {
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.tabs a {
  margin-right: 15px;
  text-decoration: none;
  color: #666;
}

.tabs a.active {
  color: #42b983;
  font-weight: bold;
}

.error {
  color: #dc3545;
  padding: 10px;
  background-color: #f8d7da;
  border-radius: 4px;
}
</style>