import '../public/icon/iconfont.css'
import '../public/css/animation.scss'

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
import ReUploadImg from './remo-upload-img'
import ReUpload from './remo-upload'
import ReDragger from './remo-dragger'
import ReSwitch from './remo-switch'
import ReCheckbox from './remo-checkbox'
import ReClipboard from './remo-clipboard'
import ReMessage from './remo-message'
import gobalLoadingBar from './remo-loading-bar'
import VueCropper from './vue-cropper'
import VueDragger from './vue-dragger'
import ReBreadcrumb from './remo-breadcrumb'
import ReBreadcrumbItem from './remo-breadcrumb-item'

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
  ReCollapse,
  ReUploadImg,
  ReUpload,
  ReDragger,
  ReSwitch,
  ReCheckbox,
  ReClipboard,
  ReMessage,
  VueCropper,
  VueDragger,
  ReBreadcrumb,
  ReBreadcrumbItem
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
  Vue.prototype.$loading = gobalLoadingBar // 全局loading绑定

  Vue.prototype.fCode = function (code) {
    let codeList = []
    code.trim().split('\n').forEach(function (v) {
      codeList.push(v)
    })
    let fcode = ''
    if (codeList.length > 1) {
      let length = codeList[codeList.length - 1].match(/(^(?:\s|\t)+)/)
      length = length[0].length
      for (let i = 1; i < codeList.length; i++) {
        codeList[i] = codeList[i].slice(length)
      }
      for (let i = 0; i < codeList.length; i++) {
        fcode = fcode + codeList[i] + '\n'
      }
    } else {
      fcode = codeList[0]
    }
    return fcode
  }
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
  ReCollapse,
  ReUploadImg,
  ReUpload,
  ReDragger,
  ReSwitch,
  ReCheckbox,
  ReClipboard,
  ReMessage,
  VueCropper,
  VueDragger,
  gobalLoadingBar,
  ReBreadcrumbItem,
  ReBreadcrumb
}
