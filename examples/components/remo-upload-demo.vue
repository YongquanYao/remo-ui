<template>
  <div>
    <div v-if="this.locale === 'cn' ">
      <demo-block header="Upload 上传文件">
      </demo-block>
      <demo-block title="基础" desc="文件上传">
                <re-upload v-model="list" ></re-upload>
      </demo-block>
      <demo-block title="限制文件大小" desc="默认单个文件不超过10MB，可根据需求修改">
                <re-upload v-model="list1" :fileSize="102400" uploadText="100kb文件上传"></re-upload>
      </demo-block>
      <demo-block title="限制文件类型" desc="默认可上传任务文件类型，可根据需求修改">
                <re-upload v-model="list2" :fileType="'image'" uploadText="图片上传"></re-upload>
      </demo-block>
      <demo-block title='API' desc="属性说明如下：" type="table">
            <re-table :data="tableData" type="demo"></re-table>
      </demo-block>
    </div>
    <div v-if="this.locale === 'en' ">
      <demo-block header="Upload">
      </demo-block>
      <demo-block title="Usage" desc="Upload file">
                <re-upload v-model="list_en" uploadText="choose file"></re-upload>
      </demo-block>
      <demo-block title="Size Limitation" desc="Default settinng is 10MB per file, which can be modified according to requirements">
                <re-upload v-model="list1" :fileSize="102400" uploadText="100kb Upload"></re-upload>
      </demo-block>
      <demo-block title="File Type" desc="The default type of file can be uploaded, which can be modified according to requirements">
                <re-upload v-model="list2_en" :fileType="'.pdf'" uploadText="pdf upload"></re-upload>
      </demo-block>
       <demo-block title="API" desc="The properties description are as follows: " type="table">
          <re-table :data="tableData_en" type="en"></re-table>
        </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import {mapGetters} from 'vuex'
export default {
  name: 'ReUploadDemo',
  components: {
    demoBlock
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
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
      tableData_en: [
        {
          parameter: 'v-model / value',
          description: 'files binding value',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'uploadText',
          description: 'upload button content',
          dataTypes: 'String',
          optional: '-',
          default: 'choose file'
        },
        {
          parameter: 'fileSize',
          description: 'Maximum size of uploaded file (byte)',
          dataTypes: 'Number',
          optional: '-',
          default: '10240000'
        },
        {
          parameter: 'fileType',
          description: 'File type of uploaded file',
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
      list_en: [
        {
          name: 'documentt.doc'
        },
        {
          name: 'photo.jpg'
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
      ],
      list2_en: [
        {
          name: 'Remo.pdf'
        },
        {
          name: 'Vue.pdf'
        },
        {
          name: 'Vuex.pdf'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
