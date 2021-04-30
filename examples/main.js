// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import RemoUI from './../packages'
import store from './store'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css' // or other highlight.js theme
import 'highlight.js/styles/atom-one-dark.css'

import '../public/icon/iconfont.css'

Vue.config.productionTip = false
Vue.use(RemoUI)
Vue.use(VueHighlightJS)
// Vue.use(store)

//格式化代码,去除行前空格
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
