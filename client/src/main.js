// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from './lib/http.js'
import util from './lib/common.js'


Vue.config.productionTip = false
// 注册的插件名称
const Ajax = {}
// 封装axios,在页面中直接使用this.$ajax请求数据,不需要引入axios文件
Ajax.install = (Vue) => ( Vue.prototype.$ajax = ajax)
Vue.use(Ajax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
