import VueCropper from './src/vue-cropper.vue'

VueCropper.install = function (Vue) {
  Vue.component(VueCropper.name, VueCropper)
}

export default VueCropper
