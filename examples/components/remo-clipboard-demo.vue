<template>
  <div>
    <div v-if="this.locale ==='cn'">
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
    <div v-if="this.locale ==='en'">
        <demo-block header="Clipboard">
        </demo-block>
        <demo-block title="Usage" desc="You can customize the target node that need to be copied">
          <re-shadow-block width="100%" height="100%">
            <div>
              <re-tip color="blue">
                <p id="remo-clipboard">I want to copy this message</p>
              </re-tip>
              <re-clipboard>
              </re-clipboard>
            </div>
            <re-divider></re-divider>
              <input type="text" id="clipinput" placeholder="Please Input the content that need to be copied"/>
              <re-clipboard target="clipinput" text="Copy Content" type="primary">
              </re-clipboard>
          </re-shadow-block>
        </demo-block>
      <demo-block title="API" desc="The properties description are as follows: ">
          <re-table :data="tableData_en" type="en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoClipboardDemo',
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
      ],
      tableData_en: [
        {
          parameter: 'target',
          description: 'the id attribute of the node element that as a copy target',
          dataTypes: 'String',
          optional: '',
          default: 'remo-clipboard'
        },
        {
          parameter: 'text',
          description: 'copy button text',
          dataTypes: 'String',
          optional: '',
          default: 'Copy'
        },
        {
          parameter: 'type',
          description: 'type of copy button',
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
