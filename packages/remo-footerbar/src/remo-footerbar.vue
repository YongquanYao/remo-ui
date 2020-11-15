<template>
  <div v-if="checkVisible" class="footerBarDiv">
    <div class="left">{{content}}</div>
    <div class="right">
      <re-button @click="cancel"  v-if="cancelButtonShow" >{{cancelText}}</re-button>
      <re-button @click="confirm"  v-if="confirmButtonShow" type="primary">{{okText}}</re-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReFooterBar',
  props: {
    target: {
      type: String,
      default: 'window'
    },
    content: {
      type: String,
      default: 'Notification - Extra Information'
    },
    okText: {
      type: String,
      default: 'Confirm'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    visibleHeight: {
      type: Number,
      default: 0
    },
    cancelButtonShow: {
      type: Boolean,
      default: true
    },
    confirmButtonShow: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    checkVisible: {
      get () {
        if (this.show) {
          return this.visible
        }
        return this.show
      },
      set (newValue) {
        this.visible = newValue
      }
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
    // 获取当前滚动条所在
    getScrollTop () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    handleshow () {
      // 滑动超出当前屏幕高度
      // console.log(this.getScrollTop())
      if (this.getScrollTop() > this.visibleHeight) {
        this.checkVisible = true
      } else {
        this.checkVisible = false
      }
    },
    confirm () {
      this.$emit('confirm')
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.footerBarDiv{
  z-index: 100;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 55px;
  line-height: 55px;
  border-top: 1px solid #ebebeb;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  font-size: 15px;
  background: #fff;
  .left{
    float: left;
    padding-left: 20px;
    font-weight: 500;
  }
  .right{
    float: right;
    padding-right: 20px;
  }
}
</style>
