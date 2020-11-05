import Vue from 'vue'
import Router from 'vue-router'
import RemoTipDemo from '@/components/remo-tip-demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RemoTipDemo',
      component: RemoTipDemo
    }
  ]
})
