<template>
  <div>
    <demo-block header="Upload 上传文件">
    </demo-block>
    <demo-block title="基础" desc="文件上传">
        <re-shadow-block width='100%' height="100%">
              <re-upload v-model="list" ></re-upload>
        </re-shadow-block>
    </demo-block>
    <demo-block title="限制文件大小" desc="默认单个文件不超过10MB，可根据需求修改">
        <re-shadow-block width='100%' height="100%">
              <re-upload v-model="list1" :fileSize="102400" uploadText="100kb文件上传"></re-upload>
        </re-shadow-block>
    </demo-block>
    <demo-block title="限制文件类型" desc="默认可上传任务文件类型，可根据需求修改">
        <re-shadow-block width='100%' height="100%">
              <re-upload v-model="list2" :fileType="'image'" uploadText="图片上传"></re-upload>
        </re-shadow-block>
    </demo-block>
    <demo-block title='API' desc="属性说明如下：">
          <re-table :data="tableData" type="demo"></re-table>
    </demo-block>
  </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'ReUploadDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      tableData: [
        {
          parameter: 'v-model / value',
          description: '文件数据绑定值',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'uploadText',
          description: '上传按钮文案',
          dataTypes: 'String',
          optional: '-',
          default: '选择文件'
        },
        {
          parameter: 'fileSize',
          description: '上传文件最大容量(byte)',
          dataTypes: 'Number',
          optional: '-',
          default: '10240000'
        },
        {
          parameter: 'fileType',
          description: '上传文件格式限制',
          dataTypes: 'String',
          optional: 'all / image / video / (specifiy type)',
          default: 'all'
        }
      ],
      list: [
        {
          name: '文档.doc'
        },
        {
          name: '证件照.jpg'
        },
        {
          name: 'Attachment.pdf'
        }
      ],
      list1: [],
      list2: [
        {
          name: 'Remo.png'
        },
        {
          name: 'Vue.gif'
        },
        {
          name: 'Vuex.jpeg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
