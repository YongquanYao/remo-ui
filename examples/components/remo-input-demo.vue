<template>
  <div>
    <demo-block header="Input 输入框">
    </demo-block>
    <demo-block title="基础用法">
      <re-shadow-block width="100%" height="130px">
          <re-input v-model="text"></re-input>
          <span class="showtext">{{text}}</span>
      </re-shadow-block>
    </demo-block>
    <demo-block title="输入框模式" desc="pattern=frame：">
      <re-shadow-block width="100%" height="110px">
          <re-input v-model="text1" pattern='frame'></re-input>
          <span class="showtext">{{text1}}</span>
      </re-shadow-block>
    </demo-block>
    <demo-block title="禁用模式" desc="disabled=true：">
      <re-shadow-block width="100%" height="90px">
            <re-input  pattern='frame' :disabled="true"></re-input>
      </re-shadow-block>
    </demo-block>
    <demo-block title="Icon模式" desc="pattern=frame && 添加suffixIcon或者prefixIcon属性：">
      <re-shadow-block width="100%" height="90px">
          <div style="display: flex; justify-content: space-around;" >
            <re-input  pattern='frame' placeholder="请输入密码"  suffixIcon="remo-lock"></re-input>
            <re-input  pattern='frame' placeholder="请输入用户名"  prefixIcon="remo-user"></re-input>
          </div>
      </re-shadow-block>
    </demo-block>
    <demo-block title="Number模式" desc="type=number：" >
      <re-shadow-block width="100%" height="130px">
         <re-input  type="number" v-model="text2" placeholder="请输入数字"></re-input>
           <span class="showtext">{{text2}}</span>
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
  name: 'RemoInputDemo',
  components: {
    demoBlock
  },
  data () {
    return {
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
