import {RouteRecordRaw} from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {path: '/', redirect: '/login'},
  {
    path: '/login',
    name: 'Home',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {hidden: true}, // 配置元素
    component: () => import('@/views/About.vue')
  },
]