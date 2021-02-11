<template>
<div>
  <re-button @click="sendFunction" :type="type">{{text}}
  </re-button>
     <transition name="remo-message-fade">
      <div class="message_detail" v-show="show">
        <i class="remoi remo-info-circle"></i><span>{{message}}</span>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'ReMessage',
  props: {
    text: {
      type: String,
      default: '打开message'
    },
    message: {
      type: String,
      default: 'This is an Message'
    },
    type: {
      type: String,
      default: 'default'
    },
    delay: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      show: false
    }
  },
  watch: {
    show: function (val) {
      if (val) {
        setTimeout(() => {
          this.show = false
        }, this.delay * 1000)
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
  background: rgb(125, 190, 252);
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

.remo-message-fade-enter,
.remo-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
