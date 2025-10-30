<script setup lang="ts">
import { defineProps } from 'vue'
import type { Event } from '../../types'

defineProps<{
  event: Event
  id: string
}>()
</script>

<template>
  <div class="detail">
    <p><strong>Time:</strong> {{ event.time }}</p>
    <p><strong>Date:</strong> {{ event.date }}</p>
    <p><strong>Location:</strong> {{ event.location }}</p>
    <p><strong>Description:</strong> {{ event.description }}</p>
    <p v-if="event.petsAllowed !== undefined">
      <strong>Pets Allowed:</strong> {{ event.petsAllowed ? 'Yes' : 'No' }}
    </p>
  </div>
</template>

<style scoped>
.detail p {
  line-height: 1.6;
  margin: 10px 0;
}
</style>