<!-- src/views/event/RegisterView.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Event } from '../../types'
import { defineProps } from 'vue'  // 补充导入

const props = defineProps<{
  event: Event
  id: string
}>()

const router = useRouter()

const handleRegister = () => {
  alert(`Registered for "${props.event.title}" successfully!`)
  router.push({ name: 'event-detail-view', params: { id: props.id } })
}
</script>

<template>
  <div class="register">
    <h2>Register for "{{ event.title }}"</h2>
    <form>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" required>
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" required>
      </div>
      <button type="button" @click="handleRegister">
        Confirm Registration
      </button>
    </form>
  </div>
</template>

<style scoped>
.register {
  max-width: 500px;
  margin: 0 auto;  /* 居中表单 */
  padding: 20px;
}

.form-group {
  margin: 15px 0;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>