<template>
  <div  v-if="type === 'customize'? true: visible"   :class="{'backtop_container': type ==='default', 'backtop_container_cus': type === 'customize'}" >
      <re-button  v-if="type === 'default'" @click="handleJump" class="backtop" :circle="true" icon="remo-up">
      </re-button>
       <re-button  v-if="type === 'customize'" :color="color" type="customize" @click="handleJump" class="backtop" :circle="circle" :icon="icon">
         <slot></slot>
      </re-button>
  </div>
</template>

<script>
export default {
  name: 'ReBacktop',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: 'remo-up'
    },
    color: {
      type: String,
      default: '#409eff'
    },
    circle: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: 'window'
    },
    showHeight: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    if (this.target === 'window') {
      window.addEventListener('scroll', this.handleshow)
    } else {
      document
        .getElementById(this.target)
        .addEventListener('scroll', this.handleshow)
    }
  },
  destroyed () {
    if (this.target === 'window') {
      window.removeEventListener('scroll', this.handleshow)
    } else {
      document
        .getElementById(this.target)
        .removeEventListener('scroll', this.handleshow)
    }
  },
  methods: {
    handleshow () {
      // const pageDefaultHeight = window.innerHeight
      // const poistion = this.getElementTop(this.$refs.backtop.$el)

      if (this.getScrollTop() > this.showHeight) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
    // 获取滚动条所在的高度
    getScrollTop () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    // getElementTop (element) {
    //   let actualTop = element.offsetTop
    //   let current = element.offsetParent

    //   while (current !== null) {
    //     actualTop += current.offsetTop
    //     current = current.offsetParent
    //   }
    //   return actualTop
    // },
    handleJump () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.backtop_container_cus{
  position: relative;

}
.backtop_container{
  transition: opacity 0.3s;
  position: fixed;
  right: 80px;
  bottom: 100px;
  z-index: 101;
}
</style>
