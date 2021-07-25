<template>
  <div v-if="this.visible" class="remo_popup_container">
    <div v-if="this.visible" class="remo_popup_content">
      <div class="popup_title">
            <span></span>
            <i class="remoi remo-close"
              @click="closePopup()">
            </i>
      </div>
      <slot name="img">
      </slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RePopup',
  data () {
    return {
      gg: '123'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePopup () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
  .remo_popup_container{
      z-index: 199;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #00000557;
      .remo_popup_content{
        padding:5px 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        box-sizing: border-box;
        z-index: 200;
        // background: #fff;
        border-radius: 6px;
        img{
          max-width: 400px;
          max-height: 648px;
        }
        .popup_title{
          font-size:16px;
          font-weight: 600;
          padding:10px 5px;
          i{
            cursor: pointer;
            margin-right: -8px;
            float: right;
            color: #777;
            font-weight:400;
            &:hover{
              color: #409EFF;
            }
          }
        }
      }
  }
</style>
