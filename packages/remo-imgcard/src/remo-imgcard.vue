<template>
    <div class="remo-imgcard">
        <div class="imgContainer">
          <slot name="img"/>
        </div>
        <div class="imgdesc" :class="{'dynamic-imgdesc': type === 'dynamic'}">
          <slot name="desc"/>
        </div>
        <div class="feature" :class="{'dynamic-feature': type === 'dynamic', 'feature_on': feature === 'on', 'feature_off': feature === 'off' }">
          <i class="remoi top" :class="iconTop === '' ? 'remo-share' : iconTop"    @click="iconTopClick" />
          <i class="remoi bottom" :class="iconBottom === '' ? 'remo-heart' : iconBottom"  @click="iconBottomClick"  />
        </div>
    </div>
</template>

<script>
export default {
  name: 'ReImgCard',
  props: {
    type: {
      type: String,
      default: 'static'
    },
    feature: {
      type: String,
      default: 'on'
    },
    iconTop: {
      type: String,
      default: ''
    },
    iconBottom: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    iconTopClick () {
      this.$emit('iconTopClick')
    },
    iconBottomClick () {
      this.$emit('iconBottomClick')
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 250px;
.remo-imgcard{
  display: inline-block;
  box-sizing: border-box;
  margin: 5px 10px;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  box-shadow: 2px 2px 5px 1px #ebebeb;
  // width: 100%;
  // height: 350px;
  position: relative;
  overflow: hidden;
  &:last-child{
      margin: 5px 15px;
  }
  &:hover{
    .dynamic-imgdesc {
      opacity: 1;
    }
    .dynamic-feature {
       opacity: 1;
    }
    .feature_on {
        opacity: 1 !important;
    }
    .feature_off {
        opacity: 0  !important;
    }
  }
  .imgContainer img{
    // border-radius: 10px;
    height: $height;
  }
  .imgdesc {
    padding: 10px 15px 5px 15px;
    position: absolute;
    bottom: 0px;
    // text-align: center;
    width: 100%;
    height: 100px;
    word-break: break-word;
    background: linear-gradient(rgba(8,25,43,0), rgba(8,25,43,0.85)) top;
    color: #fff;
    font-size: 15px;
    word-spacing: 1px;
    font-weight: 500;
  }
  .dynamic-imgdesc {
    opacity: 0;
    transition: 0.7s;
  }
  .dynamic-feature{
      opacity: 0;
      transition: 0.7s;
  }
  .feature_off {
        opacity: 0  !important;
    }
  .feature{
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 13px;
    display: flex;
    flex-direction: column;
    i {
      cursor: pointer;
      margin: 5px 0;
      font-size: 17px;
      overflow: hidden;
    }
    .top{
       &:hover {
        color: #409eff;
        transform: scale(1.3);
      }
    }
    .bottom{
      &:hover {
        color: red;
        transform: scale(1.3);
      }
    }
  }
}
</style>
