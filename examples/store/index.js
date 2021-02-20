import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

// 将vuex第三方插件注入到vue实例上
Vue.use(Vuex)

// 创建一个Store对象
const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})

export default store

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
