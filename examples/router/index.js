import Vue from 'vue'
import Router from 'vue-router'
import RemoUiDemo from '@/components/remo-ui-demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RemoUiDemo',
      component: RemoUiDemo
    }
  ]
})
