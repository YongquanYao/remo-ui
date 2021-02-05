import VueDragResize from './src/vue-drag-resize.vue'

VueDragResize.install = function (Vue) {
  Vue.component(VueDragResize.name, VueDragResize)
}

export default VueDragResize
