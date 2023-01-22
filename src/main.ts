import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'

const app = createApp(App)
app.use(router)
app.mount('#app')

/*
function setupApp() {
    setupRouter(app)

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
