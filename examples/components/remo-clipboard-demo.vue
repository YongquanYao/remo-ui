<template>
  <div>
      <demo-block header="Clipboard 复制">
      </demo-block>
      <demo-block title="基础" desc="可自定义需要被复制的节点">
        <re-shadow-block width="100%" height="100%">
          <div>
            <re-tip color="blue">
              <p id="remo-clipboard">我要复制这条记录了</p>
            </re-tip>
            <re-clipboard>
            </re-clipboard>
          </div>
          <re-divider></re-divider>
            <input type="text" id="clipinput" placeholder="请输入需要复制的内容"/>
            <re-clipboard target="clipinput" text="复制输入框的内容" type="primary">
            </re-clipboard>
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
  name: 'RemoClipboardDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      tableData: [
        {
          parameter: 'target',
          description: '被复制节点的id属性',
          dataTypes: 'String',
          optional: '',
          default: 'remo-clipboard'
        },
        {
          parameter: 'text',
          description: '复制按钮文案',
          dataTypes: 'String',
          optional: '',
          default: 'Copy'
        },
        {
          parameter: 'type',
          description: '复制按钮类型,与Re-button相同',
          dataTypes: 'String',
          optional: 'default / primary / success / dashed / dotted / danger / warning / customize',
          default: 'default'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#remo-clipboard{
  // padding: 10px;
  // background: rgb(204, 224, 231);
  color:#555;
}
#clipinput{
  height: 26px;
  width: 180px;
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  padding: 2px 10px;
  color:#979797;
  box-shadow: 1px 1px 10px 1px #ebebeb;
  border: 1px solid #bdbbbb;
  border-radius: 6px;
}
#clipinput:focus,
#clipinput:active
{
  border: 1px solid #409EFF;
}
</style>
