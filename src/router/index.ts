// import {App} from 'vue'
import {createRouter, createWebHashHistory, /* createWebHistory,*/} from 'vue-router'
import {routes} from "@/router/routes"

// 创建一个 router 实例
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // createWebHistory()
  routes,
})
export default router

// 导出安装
/*

export async function setupRouter(app: App): Promise<void> {
  app.use(router)
}

* 作者：前端泥瓦匠
* 链接：https://juejin.cn/post/7126520181307736101
* 来源：稀土掘金
* 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*
*/
