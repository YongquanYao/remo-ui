<template>
  <div>
    <div v-if="this.locale === 'cn' ">
        <demo-block header="Footer Bar" desc="固定在底部的工具栏" type="normal">
           <re-footer-bar :cancelText="cancelText" @cancel="handleCancel" @confirm="handleConfirm" :show="visible"></re-footer-bar>
        </demo-block>
        <demo-block title="基础用法" desc="滚动页面查看下方工具栏" type="normal">
        </demo-block>
        <demo-block title="API" desc="属性说明如下：">
          <re-table :data="tabledata" type="demo" />
        </demo-block>
    </div>
    <div v-if="this.locale === 'en' ">
        <demo-block header="Footer Bar" desc="fixed tool in the bottom" type="normal">
           <re-footer-bar :cancelText="cancelText" @cancel="handleCancel" @confirm="handleConfirm" :show="visible"></re-footer-bar>
        </demo-block>
        <demo-block title="Usage" desc="Scroll down to view" type="normal">
        </demo-block>
        <demo-block title="API" desc="The properties description are as follows: " type="table">
          <re-table :data="tabledata_en" type="en"></re-table>
        </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoFootBarDemo',
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
      cancelText: 'Dismiss',
      tabledata: [
        {
          parameter: 'target',
          description: '设置需要监听其滚动事件的元素',
          dataTypes: 'String',
          option: '',
          default: 'window'
        },
        {
          parameter: 'content',
          description: '左测文案',
          dataTypes: 'String',
          option: '',
          default: 'Notification - Extra Information'
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
          description: '滚动高度达到此参数值才出现工具栏',
          dataTypes: 'Number',
          option: '',
          default: '0'
        },
        {
          parameter: 'visible',
          description: '控制Footer是否显示,可配合回调事件',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        }
      ],
      tabledata_en: [
        {
          parameter: 'target',
          description: 'scrolling events target you want to listen',
          dataTypes: 'String',
          option: '',
          default: 'window'
        },
        {
          parameter: 'content',
          description: 'left side content',
          dataTypes: 'String',
          option: '',
          default: 'Notification - Extra Information'
        },
        {
          parameter: 'okText',
          description: 'text content of the cofirm button',
          dataTypes: 'String',
          option: '',
          default: 'Confirm'
        },
        {
          parameter: 'cancelText',
          description: 'text content of the cancel button',
          dataTypes: 'String',
          option: '',
          default: 'Cancel'
        },
        {
          parameter: 'confirmButtonShow',
          description: 'whether confirm button display',
          dataTypes: 'Boolean',
          option: 'true/ false',
          default: 'true'
        },
        {
          parameter: 'cancelButtonShow',
          description: 'whether cancel button display',
          dataTypes: 'Boolean',
          option: 'true / fasle',
          default: 'true'
        },
        {
          parameter: '@confirm',
          description: 'confirm button callback function',
          dataTypes: 'Function',
          option: '',
          default: ''
        },
        {
          parameter: '@cancel',
          description: 'cancel button callback function',
          dataTypes: 'Function',
          option: '',
          default: ''
        },
        {
          parameter: 'visibleHeight',
          description: 'the scrolling hegiht to show up the footerbar',
          dataTypes: 'Number',
          option: '',
          default: '0'
        },
        {
          parameter: 'visible',
          description: 'footer visible value',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        }
      ],
      visible: true
    }
  },
  methods: {
    handleConfirm () {
      this.visible = false
    },
    handleCancel () {
      this.cancelText = 'Cancel'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
