<template>
  <div>
      <demo-block header="Upload Image 上传图片">
      </demo-block>
      <demo-block title="基础 图片预览/上传">
        <re-shadow-block width='100%' height="100%">
              <re-upload-img v-model="list"></re-upload-img>
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
      list: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
