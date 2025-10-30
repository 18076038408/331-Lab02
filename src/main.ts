import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css' // 引入tailwind样式
import 'nprogress/nprogress.css'

// 先创建应用实例
const app = createApp(App)

// 安装插件
app.use(createPinia())
app.use(router)

// 等待路由准备就绪后再挂载
router.isReady().then(() => {
  app.mount('#app')
})