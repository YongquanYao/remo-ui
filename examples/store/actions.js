import * as types from './mutation-types'

// 定义一个函数批量修改state下的值
export const selectLocal = function ({commit, state}, value) {
  commit(types.SET_LOCALE, value)
}
