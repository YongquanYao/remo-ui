import '../public/icon/iconfont.css'

import ReTip from './remo-tip'
import ReButton from './remo-button'
import ReShadowBlock from './remo-shawdow-block'
import ReInput from './remo-input'
import ReDivider from './remo-divider'
import ReTable from './remo-table'
import ReBacktop from './remo-backtop'
import ReFooterBar from './remo-footerbar'
import ReMenu from './remo-menu'
import ReDrawer from './remo-drawer'
import ReStat from './remo-statistic'
import ReImgCard from './remo-imgcard'
import ReStatusLight from './remo-status-light'
import ReCollapse from './remo-collapse'

// 所有组件列表
const components = [
  ReTip,
  ReButton,
  ReShadowBlock,
  ReInput,
  ReDivider,
  ReTable,
  ReBacktop,
  ReFooterBar,
  ReMenu,
  ReDrawer,
  ReStat,
  ReImgCard,
  ReStatusLight,
  ReCollapse
]

// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ReTip,
  ReButton,
  ReShadowBlock,
  ReInput,
  ReDivider,
  ReTable,
  ReBacktop,
  ReFooterBar,
  ReMenu,
  ReDrawer,
  ReStat,
  ReImgCard,
  ReStatusLight,
  ReCollapse
}
