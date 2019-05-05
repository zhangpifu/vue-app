import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// 重置、保留浏览的样式文件，保留浏览器的一致性。
// 优化重置CSS默认属性
import 'normalize.css/normalize.css'
// vant ui 组件
// 因为配置了 babel-plugin-import，所以组件只能按需引入，不能一次性导入全部的组件
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// vant 语言配置
// import { Locale } from 'vant';
// import zhHK from 'vant/lib/locale/lang/zh-HK';
// Locale.use('zh-HK', zhHK);

// 公共的style 文件 (需要用相对路径)
import './styles/global.less'

// 路由配置文件
import router from './router'
// vuex 状态管理器
import store from './store'

// 项目在移动端的适配
import 'lib-flexible/flexible.js'

import '@/utils/request.js'

// Vue.use(Vue);
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

