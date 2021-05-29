<!-- 核心就是在一个100%宽度遮罩层上有个一个可以动态配置宽度的div 例如0到300 -->
<template>
  <div class="remo-drawer">
    <transition name="remo-fade">
      <div
        @click="handleMaskClick"
        class="remo-drawer-mask"
        v-if="show && mask"
      ></div>
    </transition>
    <div
      :class="{'left':placement === 'left','right':placement === 'right'}"
      :style="{ width: width + 'px' }"
      class="remo-drawer-content"
    >
      <!-- <remo-loading :loading="loading"/> -->
      <div :id="'remo-drawer-content'+id" class="remo-drawer-content-block">
        <div class="remo-drawer-header" v-if="title != ''">
          {{title}}
          <i class="remoi remo-close" @click="handleDrawerClose"></i>
        </div>
        <div class="remo-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import COMMONS from '../../tools/common'
export default {
  name: 'ReDrawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'right'
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
    // loading: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data () {
    return {
      id: 0,
      show: this.visible,
      width: 0
      // observer: null
    }
  },
  created () {
    this.id = Math.floor(Math.random() * 100000)
  },
  // mounted () {
  // 2层drawer方法
  //   let _this = this
  //   let element = document
  //     .getElementById('remo-drawer-content' + this.id)
  //     .getElementsByClassName('remo-drawer-content')[0]
  //   if (typeof element !== 'undefined') {
  //     let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  //     this.observer = new MutationObserver(mutationList => {
  //       setTimeout(() => {
  //         if (mutationList[0].target.offsetWidth !== 0) {
  //           _this.width += mutationList[0].target.offsetWidth
  //         } else {
  //           _this.width = document.getElementById(
  //             'remo-drawer-content' + this.id
  //           ).offsetWidth
  //         }
  //       }, 350)
  //     })
  //     this.observer.observe(element, {
  //       attributes: true,
  //       attributeFilter: ['style'],
  //       attributeOldValue: false
  //     })
  //   }
  // },
  watch: {
    visible: function (val) {
      this.show = val
      console.log(val)
      if (this.show) {
        // 显示
        console.log(document.getElementById(
          'remo-drawer-content' + this.id
        ).offsetWidth)
        this.width = document.getElementById(
          'remo-drawer-content' + this.id
        ).offsetWidth
        // COMMONS.afterOpen()
      } else {
        // 隐藏
        this.width = 0
        // if (document.getElementsByClassName('remo-drawer-mask').length === 1) {
        //   // COMMONS.beforeClose()
        // }
      }
    }
  },
  methods: {
    handleMaskClick () {
      if (this.maskClosable) {
        this.$emit('update:visible', false)
      } else {
        this.close()
      }
    },
    close () {
      this.$emit('close')
    },
    handleDrawerClose () {
      // 改变父组件发送的显示状态
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.remo-drawer {
  .remo-drawer-mask {
    z-index: 199;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000557;
  }
  .right {
    right: 0;
    .remo-drawer-content-block {
      left: 0;
    }
  }
  .left {
    left: 0;
    .remo-drawer-content-block {
      right: 0;
    }
  }
  .remo-drawer-content {
    z-index: 200;
    position: fixed;
    top: 0;
    height: 100%;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
    transition: width 0.3s;
    overflow: hidden;
    .remo-drawer-content-block {
      position: absolute;
      top: 0;
      width: auto;
      min-width: 300px;
    }
    .remo-drawer-header {
      position: relative;
      padding: 16px 24px;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 4px 4px 0 0;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      i{
        float:right;
        cursor: pointer;
        &:hover{
          color: #409EFF
        }
      }
    }
    .remo-drawer-body {
      padding: 24px;
      // overflow: scroll;
    }
  }
}
</style>
