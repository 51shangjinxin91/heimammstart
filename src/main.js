import Vue from 'vue'
import App from './App.vue'
// 导入接收路由
import router from './router/router.js'
// 注册一下


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到 vue实例上 router
  router // router:router
}).$mount('#app')