import {createPinia} from "pinia";
// 数据持久化插件
import piniaPersist from 'pinia-plugin-persist'
// import type { App } from "vue";

// 创建 pinia 实例
const store = createPinia();

// 使用插件
store.use(piniaPersist)

export {store};

// 导出安装方法
/*
export function setupStore(app: App<Element>) {
  app.use(store);
}

* 作者：前端泥瓦匠
* 链接：https://juejin.cn/post/7126520181307736101
* 来源：稀土掘金
* 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*
*/
