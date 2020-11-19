import ReImgCard from './src/remo-imgcard.vue'

ReImgCard.install = Vue => {
  // 名字注册
  Vue.component(ReImgCard.name, ReImgCard)
}

export default ReImgCard
