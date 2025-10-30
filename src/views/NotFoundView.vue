<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

// 定义 resource props，默认值为 'page'
withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page'
  }
)
</script>

<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <!-- 跳转回首页链接 -->
  <router-link :to="{ name: 'event-list-view' }">Back to the home page</router-link>
</template>