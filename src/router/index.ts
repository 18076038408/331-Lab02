import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
// 页面组件
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'
import NotFoundView from '../views/NotFoundView.vue'
// 事件嵌套路由
import EventLayoutView from '../views/event/LayoutView.vue'
import EventDetailView from '../views/event/DetailView.vue'
import EventRegisterView from '../views/event/RegisterView.vue'
import EventEditView from '../views/event/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page as string || '1')
      })
    },
    {
      path: '/events/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: EventEditView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  // 滚动行为配置（核心逻辑）
  scrollBehavior(to, from, savedPosition) {
    console.log('滚动行为:', { to, from, savedPosition })
    
    // 判断是否为历史回退操作
    const isBackNavigation = !!savedPosition
    console.log('是否为历史回退:', isBackNavigation)
    
    // 回退时保留原滚动位置
    if (isBackNavigation) {
      console.log('执行回退滚动到位置:', savedPosition)
      // 使用setTimeout确保DOM更新后再滚动
      return new Promise((resolve) => {
        setTimeout(() => {
          // 确保位置有效
          if (savedPosition && savedPosition.left !== undefined && savedPosition.top !== undefined) {
            resolve(savedPosition)
          } else {
            // 如果位置无效，回退到顶部
            resolve({ top: 0 })
          }
        }, 100) // 增加延迟时间以确保DOM完全更新
      })
    }
    
    // 新页面跳转时回到顶部 - 确保总是回到顶部
    console.log('执行新页面滚动到顶部')
    return new Promise((resolve) => {
      // 使用setTimeout确保DOM更新后再滚动
      setTimeout(() => {
        resolve({ top: 0 })
      }, 50)
    })
  }
})

// 进度条守卫
router.beforeEach(() => {
  nProgress.start()
  return true
})
router.afterEach(() => nProgress.done())

export default router