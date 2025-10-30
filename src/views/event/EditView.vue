<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { Event } from '../../types'
import { useMessageStore } from '../../stores/message'
import { useRouter } from 'vue-router'
import EventService from '../../services/EventService'
const props = defineProps<{
  event?: Event
  id: string
}>()

// 复制事件数据用于编辑
const formData = ref(props.event ? { ...props.event } : {
  title: '',
  description: '',
  location: ''
})
const router = useRouter()
const store = useMessageStore()
const handleEdit = async () => {
  try {
    await EventService.updateEvent(parseInt(props.id), formData.value)
    // 设置"数据已更新"消息
    store.updateMessage('The data has been updated')
    // 3 秒后清空消息
    setTimeout(() => {
      store.resetMessage()
    }, 3000)
    // 跳转到事件详情页
    router.push({ name: 'event-detail-view', params: { id: props.id } })
  } catch (error) {
    if ((error as any).response && (error as any).response.status === 404) {
      router.push({
        name: '404-resource-view',
        params: { resource: 'event' }
      })
    } else {
      router.push({ name: 'network-error-view' })
    }
  }
}
</script>

<template>
  <div class="edit">
    <h2>Edit Event</h2>
    <form>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" v-model="formData.title" required>
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea v-model="formData.description"></textarea>
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input type="text" v-model="formData.location" required>
      </div>
      <button type="button" @click="handleEdit">Save Changes</button>
    </form>
  </div>
</template>

<style scoped>
.edit {
  max-width: 500px;
}

.form-group {
  margin: 15px 0;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>