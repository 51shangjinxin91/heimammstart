//导入 vue
import Vue from 'vue'
// 导包
import VueRouter from 'vue-router'
// 注册 use 一下 (使用的 vuerouter 通过 导入的vue 导出)
Vue.use(VueRouter)
// 规则
const routes = []
// 创建
const router = new VueRouter({
    routes // routes:routes
})
// 暴露
export default router