<template>
<div>
  <re-button @click="sendFunction" :type="type">{{text}}
  </re-button>
     <transition name="remo-message-fade">
      <div
        class="message_detail"
        v-show="show"
        :class="{'default_type': type ==='default', 'success_type': type ==='success', 'warn_type': type ==='warning', 'danger_type': type ==='danger', }"
        :style="{
          'top': messageNum === 0 ? '25px': `${25*messageNum}px`
        }"
      messageNum
      >
        <i class="remoi remo-info-circle"></i><span>{{message}}</span>
    </div>
  </transition>
</div>
</template>

<script>
// :style="{
//         'top': window.Vue.prototype.messageNumm === 'undefined' ? '25px': `${25*window.Vue.prototype.messageNum}px`
//       }"
export default {
  name: 'ReMessage',
  props: {
    text: {
      type: String,
      default: 'Message'
    },
    message: {
      type: String,
      default: 'This is an Message'
    },
    type: {
      type: String,
      default: 'default'
    },
    duration: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      show: false,
      messageNum: 0
    }
  },
  watch: {
    show: function (val) {
      if (val) {
        this.messageNum += 1
        setTimeout(() => {
          this.show = false
        }, this.duration * 1000)
      }
    }
  },
  methods: {
    // 复制需要用一个text-area做承接，把要复制的内容放进去，然后再做.select()
    sendFunction () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
/* The switch - the box around the slider */
.message_detail{
  position: fixed;
  left: 50%;
  top: 25px;
  transform: translateX(-50%);
  padding: 20px;
  z-index: 100;
  transition: opacity 0.3s, transform .4s, top 0.4s;
  overflow: hidden;
  box-sizing: border-box;
  width: 325px;
  height: 40px;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #fff;
  word-spacing: 1px;
  font-weight: 500;
  i{
    font-size: 20px;
    // color: #000;
  }
  span{
    margin-left: 8px;
  }
}
.default_type{
  background-color: mix(#fff, #40a0ff36, 20%);
  border-color: mix(#fff, #409EFF, 20%);
  color: mix(#fff, #409EFF, 20%);
}
.success_type{
  background-color: mix(#fff, #67c23a2d, 20%);
  border-color: mix(#fff, #67c23a, 20%);
  color: mix(#fff, #67c23a, 20%);
}
.warn_type{
  background-color: mix(#fff,#e6a23c2d, 20%);
  border-color:#e6a23c;
  color:#e6a23c;
}
.danger_type{
  background-color: mix(#fff, #f56c6c2f, 20%);
  border-color:#f56c6c;
  color: #f56c6c;
}
.remo-message-fade-enter,
.remo-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
