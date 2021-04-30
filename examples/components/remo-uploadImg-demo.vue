<template>
  <div>
    <div v-if="this.locale==='cn'">
        <demo-block header="Upload Image 上传图片">
        </demo-block>
        <demo-block title="基础" desc="图片上传">
                <re-upload-img v-model="list1" :view="false" addText="上传图片"></re-upload-img>
        </demo-block>
        <demo-block title="预览" desc="图片预览/上传">
                <re-upload-img v-model="list2" addText="上传/预览图片"></re-upload-img>
        </demo-block>
        <demo-block title="剪裁" desc="图片线裁剪/上传">
                <re-upload-img :width="300" :height="300"  addText="裁剪图片/上传" :cropper="true" v-model="list3"></re-upload-img>
        </demo-block>
        <demo-block title="压缩" desc="图片0.5X压缩/上传">
                <re-upload-img :width="300" :height="300" :outputSize='0.5' addText="裁剪/压缩图片" :cropper="true" v-model="list4"></re-upload-img>
        </demo-block>
        <demo-block title='API' desc="属性说明如下：" type="table">
            <re-table :data="tableData" type="demo"></re-table>
        </demo-block>
    </div>
    <div v-if="this.locale==='en'">
        <demo-block header="Upload Image">
        </demo-block>
        <demo-block title="Usage" desc="Image upload">
                <re-upload-img v-model="list1" :view="false" addText="upload"></re-upload-img>
        </demo-block>
        <demo-block title="Preview" desc="Image upload / preview">
                <re-upload-img v-model="list2" addText="upload / preview"></re-upload-img>
        </demo-block>
        <demo-block title="Crop" desc="Image upload / crop">
                <re-upload-img :width="300" :height="300"  addText="upload / crop" :cropper="true" v-model="list3"></re-upload-img>
        </demo-block>
        <demo-block title="Compress" desc="Image compress 0.5x / upload">
                <re-upload-img :width="300" :height="300" :outputSize='0.5' addText="compress / upload" :cropper="true" v-model="list4"></re-upload-img>
        </demo-block>
         <demo-block title="API" desc="The properties description are as follows: " type="table">
          <re-table :data="tableData_en" type="en"></re-table>
        </demo-block>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import demoBlock from './demo-block'
export default {
  name: 'ReUploadImgDemo',
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
      list1: [
        'https://remo.raymondyao.info/static/img/8.a8fc8b3.jpg'
      ],
      list2: [
        'https://remo.raymondyao.info/static/img/8.a8fc8b3.jpg'
      ],
      list3: [
        'https://remo.raymondyao.info/static/img/8.a8fc8b3.jpg'
      ],
      list4: [
        'https://remo.raymondyao.info/static/img/8.a8fc8b3.jpg'
      ],
      tableData: [
        {
          parameter: 'v-model / value',
          description: '图片数据绑定值',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'addText',
          description: '上传图片框文案',
          dataTypes: 'String',
          optional: '-',
          default: '-'
        },
        {
          parameter: 'max',
          description: '上传图片限制个数',
          dataTypes: 'Number',
          optional: '-',
          default: '-'
        },
        {
          parameter: 'width',
          description: '图片模块宽度',
          dataTypes: 'Number',
          optional: '-',
          default: '110'
        },
        {
          parameter: 'height',
          description: '图片模块高度',
          dataTypes: 'Number',
          optional: '-',
          default: '110'
        },
        {
          parameter: 'view',
          description: '是否开启预览功能',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'cropper',
          description: '是否开启截图功能',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'fixed',
          description: '是否开启截图框宽高固定比例',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'fixedNumber',
          description: '截图框的宽高比例',
          dataTypes: 'Array',
          optional: '[width,height]',
          default: '[1,1]'
        },
        {
          parameter: 'outputSize',
          description: '压缩比例',
          dataTypes: 'Number',
          optional: '0.1 - 1',
          default: '1'
        },
        {
          parameter: 'cropType',
          description: '生成图片格式',
          dataTypes: 'String',
          optional: 'base64 / blob',
          default: 'base64'
        }
      ],
      tableData_en: [
        {
          parameter: 'v-model / value',
          description: 'Binding value',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'addText',
          description: 'Upload button text',
          dataTypes: 'String',
          optional: '-',
          default: '-'
        },
        {
          parameter: 'max',
          description: 'Maxiumn number of uploads',
          dataTypes: 'Number',
          optional: '-',
          default: '-'
        },
        {
          parameter: 'width',
          description: 'Showing container width',
          dataTypes: 'Number',
          optional: '-',
          default: '110'
        },
        {
          parameter: 'height',
          description: 'Showing container height',
          dataTypes: 'Number',
          optional: '-',
          default: '110'
        },
        {
          parameter: 'view',
          description: 'Whether uploader can be previewed',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'cropper',
          description: 'Whether uploader can be cropped',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'fixed',
          description: 'Enable fixed ratio',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'fixedNumber',
          description: 'Ratio of the image',
          dataTypes: 'Array',
          optional: '[width,height]',
          default: '[1,1]'
        },
        {
          parameter: 'outputSize',
          description: 'Compression ratio',
          dataTypes: 'Number',
          optional: '0.1 - 1',
          default: '1'
        },
        {
          parameter: 'cropType',
          description: 'Image format',
          dataTypes: 'String',
          optional: 'base64 / blob',
          default: 'base64'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
