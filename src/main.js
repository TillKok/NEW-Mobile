import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 这个第三方包引入即可，他会自动根据页面宽度设置网页基准字体大小
 */
import 'amfe-flexible'
/**
 * 后面使用 */

// import {
//   Button
// } from 'vant'

// Vue.use(Button)
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
