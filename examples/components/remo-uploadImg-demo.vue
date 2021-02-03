<template>
  <div>
      <demo-block header="Upload Image 上传图片">
      </demo-block>
      <demo-block title="基础" desc="图片预览/上传">
        <re-shadow-block width='100%' height="100%">
              <re-upload-img v-model="list" addText="上传图片"></re-upload-img>
        </re-shadow-block>
      </demo-block>
      <demo-block title="剪裁" desc="图片在线裁剪上传">
        <re-shadow-block width='100%' height="350px">
              <re-upload-img :width="300" :height="300" addText="裁剪图片/上传" :cropper="true" v-model="list"></re-upload-img>
        </re-shadow-block>
      </demo-block>
  </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'ReUploadImgDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      list: [
        'https://remo.raymondyao.info/static/img/8.a8fc8b3.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
