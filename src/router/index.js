// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'صفحه اصلی',
    },
  },
  {
    path: '/article/:slug',
    name: 'article-detail',
    component: ArticleDetailView,
  },
  // روت برای مدیریت صفحات ناموجود (404)
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // اسکرول خودکار به بالای صفحه هنگام تغییر مسیر
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
router.beforeEach((to, from, next) => {
  // اگر صفحه تایتل ثابت داشت، آن را اعمال کن، در غیر این صورت تایتل عمومی
  document.title = to.meta.title || 'سایت موناکس'
  next()
})

export default router
