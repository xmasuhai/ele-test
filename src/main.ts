import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {router} from '@/router'
import {store} from '@/store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

/*
// 逐个导出安装方法
import { setupRouter } from './router'
import { setupPiniaStore } from '@/store'
function setupApp() {
    // 挂载路由
    setupRouter(app)
    // 挂载pinia状态管理
    setupPiniaStore(app)

    //  setupXXX 未来可以有更多的插件加入

    // ....
    app.mount('#app')
}

setupApp()

* 作者：前端泥瓦匠
* 链接：https://juejin.cn/post/7126520181307736101
* 来源：稀土掘金
* 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*
* */
