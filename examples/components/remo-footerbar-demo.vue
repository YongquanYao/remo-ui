<template>
    <div>
        <demo-block header="Footer Bar" desc="固定在底部的工具栏">
           <re-footer-bar></re-footer-bar>
        </demo-block>
        <demo-block title="基础用法" desc="滚动页面查看下方工具栏">
        </demo-block>
        <demo-block title="API" desc="属性说明如下：">
          <re-table :data="tabledata" type="demo" />
        </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  components: {
    demoBlock
  },
  data () {
    return {
      tabledata: [
        {
          parameter: 'target',
          description: '设置需要监听其滚动事件的元素,默认为窗口',
          dataTypes: 'String',
          option: '',
          default: 'window'
        },
        {
          parameter: 'content',
          description: '左测文案',
          dataTypes: 'String',
          option: '',
          default: 'Notification - extra information'
        },
        {
          parameter: 'okText',
          description: '确定按钮的文本内容',
          dataTypes: 'String',
          option: '',
          default: 'Confirm'
        },
        {
          parameter: 'cancelText',
          description: '取消按钮的文本内容',
          dataTypes: 'String',
          option: '',
          default: 'Cancel'
        },
        {
          parameter: 'confirmButtonShow',
          description: '是否显示确定按钮',
          dataTypes: 'Boolean',
          option: 'true/ false',
          default: 'true'
        },
        {
          parameter: 'cancelButtonShow',
          description: '是否显示取消按钮',
          dataTypes: 'Boolean',
          option: 'true / fasle',
          default: 'true'
        },
        {
          parameter: '@confirm',
          description: '确定按钮回调事件',
          dataTypes: 'Function',
          option: '',
          default: ''
        },
        {
          parameter: '@cancel',
          description: '取消按钮回调事件',
          dataTypes: 'Function',
          option: '',
          default: ''
        },
        {
          parameter: 'visibleHeight',
          description: '滚动高度达到此参数值才出现工具栏，为0时不隐藏工具栏',
          dataTypes: 'Number',
          option: '',
          default: '0'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
