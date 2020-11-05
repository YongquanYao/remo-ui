// 注册按需导入
// 包装install 方法，供组件对外按需引入
import ReButton from './src/remo-button'

ReButton.install = Vue => {
  Vue.component(ReButton.name, ReButton)
}
export default ReButton
