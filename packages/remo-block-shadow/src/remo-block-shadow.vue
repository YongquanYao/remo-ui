<template>
    <div
      class="remo-block"
      :class="{
          'remo-block-lightShadow': mode === 'light',
          'remo-block-DeepShadow': mode  === 'deep',
          'remo-block-CurveShadow': mode === 'curve',
          'remo-block-SharpShadow' : mode === 'sharp'
      }"
      :style="customizeStyle"
    >
    <div class="content">
      <slot></slot>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ReBlockShadow',
  props: {
    mode: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '150px'
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      customizeStyle: {
        width: this.width,
        'max-height': this.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.remo-block{
    width: 400px;
    height: 150px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    &::before,&::after{
      content: '';
    }
    .content{
      padding: 24px;
    }
}
.remo-block-lightShadow{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.remo-block-DeepShadow{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.remo-block-CurveShadow{
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  &::after,
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 50%;
    bottom: 0px;
    left: 20px;
    right: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 100px/10px;
  }
}
.remo-block-SharpShadow{
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    background: transparent;
    top: 50%;
    bottom: 12px;
    left: 10px;
    right: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: skew(12deg) rotate(4deg);
  }
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    background: transparent;
    top: 50%;
    bottom: 12px;
    left: 10px;
    right: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: skew(-12deg) rotate(-4deg);
  }
}
</style>
