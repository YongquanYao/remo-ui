/* store中状态的唯一方法提交mutation
* 回调函数中的第一个参数必须是state，第2个是状态值
*/
import * as types from './mutation-types'

const mutations = {
  /* 为state的属性赋值
  *
  *
  * 对应在组件里设置state值
  * import { mapMutations } from "vuex";
  * ...mapMutations({
  *  setLocal : 'SET_LOCALE'
  * })
  */

  [types.SET_LOCALE] (state, locale) {
    state.locale = locale
  }
}

export default mutations
