<template>
  <div>
    <div v-if="this.locale==='cn'">
      <demo-block header="Input 输入框">
      </demo-block>
      <demo-block title="基础用法">
            <re-input v-model="text"></re-input>
            <span class="showtext">{{text}}</span>
            <template slot="code">
                <code class="html">{{fCode(simple.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block title="输入框模式" desc="pattern=frame：">
            <re-input v-model="text1" pattern='frame'></re-input>
            <span class="showtext">{{text1}}</span>
        <template slot="code">
          <code class="html">{{fCode(simple.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block title="禁用模式" desc="disabled=true：">
          <re-input  pattern='frame' :disabled="true"></re-input>
          <template slot="code">
                <code class="html">{{fCode(simple.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block title="Icon模式" desc="pattern=frame && 添加suffixIcon或者prefixIcon属性：">
            <div style="display: flex; justify-content: space-around;" >
              <re-input  pattern='frame' placeholder="请输入密码"  suffixIcon="remo-lock"></re-input>
              <re-input  pattern='frame' placeholder="请输入用户名"  prefixIcon="remo-user"></re-input>
            </div>
            <template slot="code">
                <code class="html">{{fCode(simple.code.html)}}</code>
             </template>
      </demo-block>
      <demo-block title="Number模式" desc="type=number：">
          <re-input  type="number" v-model="text2" placeholder="请输入数字"></re-input>
          <span class="showtext">{{text2}}</span>
          <template slot="code">
            <code class="html">{{fCode(simple.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block title='API' desc="属性说明如下：" type="table">
            <re-table :data="tableData" type="demo"></re-table>
      </demo-block>
    </div>
    <div v-if="this.locale==='en'">
      <demo-block header="Input" placeholder="Input">
      </demo-block>
      <demo-block title="Usage">
            <re-input v-model="text" placeholder="Input"></re-input>
            <span class="showtext">{{text}}</span>
          <template slot="code">
            <code class="html">{{fCode(simple.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block title="Frame Pattern">
            <re-input v-model="text1" pattern='frame' placeholder="Input" ></re-input>
            <span class="showtext">{{text1}}</span>
      </demo-block>
      <demo-block title="Disable" >
            <re-input  pattern='frame' :disabled="true" placeholder="Input"></re-input>
      </demo-block>
      <demo-block title="Suffix /Prefix Icon" >
            <div style="display: flex; justify-content: space-around;" >
              <re-input  pattern='frame' placeholder="Password"  suffixIcon="remo-lock"></re-input>
              <re-input  pattern='frame' placeholder="Username"  prefixIcon="remo-user"></re-input>
            </div>
      </demo-block>
      <demo-block title="Number">
          <re-input  type="number" v-model="text2" placeholder="number"></re-input>
          <span class="showtext">{{text2}}</span>
      </demo-block>
      <demo-block title="API" desc="The properties description are as follows: " type="table">
          <re-table :data="tableData_en" type="en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoInputDemo',
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
      simple:{
        code:{
          html:`
          
          `
        }
      },
      text: '',
      text1: '',
      text2: null,
      tableData: [
        {
          parameter: 'type',
          description: '输入框类型',
          dataTypes: 'String',
          optional: 'text / number',
          default: 'text'
        },
        {
          parameter: 'pattern',
          description: '输入框样式',
          dataTypes: 'String',
          optional: 'frame / line',
          default: 'line'
        },
        {
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'placeholder',
          description: '输入框占位文本',
          dataTypes: 'String',
          optional: '',
          default: '请输入内容'
        },
        {
          parameter: 'height',
          description: '输入框高度',
          dataTypes: 'Number',
          optional: '',
          default: '40'
        },
        {
          parameter: 'disabled',
          description: '禁用',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'suffix-icon',
          description: '后置Icon, 填写RemoUI Icon name',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'prefix-icon',
          description: '前置Icon, 填写RemoUI Icon name',
          dataTypes: 'String',
          optional: '',
          default: ''
        }
      ],
      tableData_en: [
        {
          parameter: 'type',
          description: 'Input type',
          dataTypes: 'String',
          optional: 'text / number',
          default: 'text'
        },
        {
          parameter: 'pattern',
          description: 'Input pattern',
          dataTypes: 'String',
          optional: 'frame / line',
          default: 'line'
        },
        {
          parameter: 'value / v-model',
          description: 'binding value',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'placeholder',
          description: 'Placeholder',
          dataTypes: 'String',
          optional: '',
          default: '请输入内容'
        },
        {
          parameter: 'height',
          description: 'Input height',
          dataTypes: 'Number',
          optional: '',
          default: '40'
        },
        {
          parameter: 'disabled',
          description: 'Whether input is disabled',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'suffix-icon',
          description: 'Suffix Icon with RemoUI Icon class name',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'prefix-icon',
          description: 'Suffix Icon with RemoUI Icon class name',
          dataTypes: 'String',
          optional: '',
          default: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.showtext{
  margin: 10px 10px;
  display: block;
  font-size: 15px;
  font-weight: 500;
}
</style>
