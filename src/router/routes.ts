import {RouteRecordRaw} from "vue-router";
import Home from "@/components/HelloWorld.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {hidden: true}, // 配置元素
    component: () => import('@/components/HelloWorld.vue')
  }
]