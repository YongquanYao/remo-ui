
// 为组件提供 install 方法，供组件对外按需引入
import ReTip from './src/remo-tip'

ReTip.install = Vue => {
  Vue.component(ReTip.name, ReTip)
}
export default ReTip
