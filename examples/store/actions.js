import * as types from './mutation-types'

// 定义一个函数批量修改state下的值 可以在组件里直接调用
export const selectLocal = function ({commit, state}, value) {
  commit(types.SET_LOCALE, value)
}
