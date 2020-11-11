import Vue from 'vue'
import Router from 'vue-router'
// import RemoUiDemo from '@/components/remo-ui-demo.vue'
import Home from '@/pages/Home.vue'
import RemoBtn from '@/components/remo-button-demo'
import RemoShadowBlk from '@/components/remo-shadowBlk-demo'
import RemoTip from '@/components/remo-tip-demo'

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
        },
        {
          path: '/component/remo-shadow-block',
          name: 'RemoShadowBlkDemo',
          component: RemoShadowBlk,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-tip',
          name: 'RemoTipDemo',
          component: RemoTip,
          meta: {
            title: '组件|Remo'
          }
        }
      ]
    }
  ]
})
