<template>
    <div class="remo-imgcard">
        <div class="imgContainer">
          <slot name="img"/>
        </div>
        <div class="imgdesc">
          <slot name="desc"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ReImgCard',
  props: {
  }
}
</script>

<style lang="scss" scoped>
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
  cursor: pointer;
  // height: 300px;
  .imgContainer img{
    // border-radius: 10px;
    height: 255px;
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
}
</style>
