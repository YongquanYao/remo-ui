import Vue from 'vue'
import Router from 'vue-router'
// import RemoUiDemo from '@/components/remo-ui-demo.vue'
import Home from '@/pages/Home.vue'
import Index from '@/pages/Index.vue'
import RemoBtn from '@/components/remo-button-demo'
import RemoShadowBlk from '@/components/remo-shadowBlk-demo'
import RemoTip from '@/components/remo-tip-demo'
import RemoIcon from '@/components/remo-icon-demo'
import RemoInstall from '@/components/demo-install'
import RemoAbout from '@/components/demo-about'
import RemoDivider from '@/components/remo-divider-demo'
import RemoBacktop from '@/components/remo-backtop-demo'
import RemoFooterbar from '@/components/remo-footerbar-demo'
import RemoMenu from '@/components/remo-menu-demo'
import RemoDrawer from '@/components/remo-drawer-demo'
import RemoInput from '@/components/remo-input-demo'
import RemoStat from '@/components/remo-statistic-demo'
import RemoImgcard from '@/components/remo-imgcard-demo'
import RemoStatuslight from '@/components/remo-statuslight-demo'
import RemoCollapse from '@/components/remo-collapse-demo'
import RemoDragger from '@/components/remo-dragger-demo'
import RemoUploadImg from '@/components/remo-uploadImg-demo'
import RemoUpload from '@/components/remo-upload-demo'
import RemoSwitch from '@/components/remo-switch-demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/component/',
      // path: '/component/',
      name: 'Home',
      component: Home,
      redirect: '/component/remo-installation',
      children: [
        {
          path: '/component/remo-installation',
          name: 'RemoInstall',
          component: RemoInstall,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-about',
          name: 'RemoAbout',
          component: RemoAbout,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-icon',
          name: 'RemoIconDemo',
          component: RemoIcon,
          meta: {
            title: '组件|Remo'
          }
        },
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
        },
        {
          path: '/component/remo-divider',
          name: 'RemoDividerDemo',
          component: RemoDivider,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-backtop',
          name: 'RemoBacktop',
          component: RemoBacktop,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-footerbar',
          name: 'RemoFooterbar',
          component: RemoFooterbar,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-menu',
          name: 'RemoMenu',
          component: RemoMenu,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-drawer',
          name: 'RemoDrawer',
          component: RemoDrawer,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-input',
          name: 'RemoInput',
          component: RemoInput,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-statistic',
          name: 'RemoStat',
          component: RemoStat,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-imgcard',
          name: 'RemoImgcard',
          component: RemoImgcard,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-statuslight',
          name: 'RemoStatuslight',
          component: RemoStatuslight,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-collapse',
          name: 'RemoCollapse',
          component: RemoCollapse,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-dragger',
          name: 'RemoDragger',
          component: RemoDragger,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-upload-img',
          name: 'RemoUploadImg',
          component: RemoUploadImg,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-upload',
          name: 'RemoUpload',
          component: RemoUpload,
          meta: {
            title: '组件|Remo'
          }
        },
        {
          path: '/component/remo-switch',
          name: 'RemoSwitch',
          component: RemoSwitch,
          meta: {
            title: '组件|Remo'
          }
        }
      ]
    }
  ]
})
