import ReClipboard from './src/remo-clipboard.vue'

ReClipboard.install = Vue => {
  Vue.component(ReClipboard.name, ReClipboard)
}

export default ReClipboard
