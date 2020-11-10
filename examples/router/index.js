import Vue from 'vue'
import Router from 'vue-router'
// import RemoUiDemo from '@/components/remo-ui-demo.vue'
import Home from '@/pages/Home.vue'
import RemoBtn from '@/components/remo-button-demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/component/remo-button',
          name: 'RemoBtnDemo',
          component: RemoBtn,
          meta: {
            title: '组件|Remo'
          }
        }
      ]
    }
  ]
})
