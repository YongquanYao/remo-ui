<template>
<div>
  <re-button @click="sendFunction" :type="type">{{text}}
  </re-button>
     <transition name="remo-fade" v-if="show">
      <div class="message_detail">
      message
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'ReMessage',
  props: {
    target: {
      type: String,
      default: 'remo-clipboard'
    },
    text: {
      type: String,
      default: 'Send Message'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      show: false
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
  position: absolute;
  top:0;
  width: 200px;
  height: 30px;
  border-radius: 6px;
  background: rgb(96, 172, 243);
}
</style>
