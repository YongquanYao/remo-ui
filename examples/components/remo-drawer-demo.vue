<template>
    <div>
        <demo-block header="Drawer 抽屉">
        </demo-block>
        <demo-block title="基础用法" desc="点击触发">
          <re-shadow-block width='100%' height="80px">
            <re-button type="primary" @click="handleOpen">Open</re-button>
            <re-drawer :visible.sync="show" :close="handleClose" title="Drawer title">
              Hi there, this is default setting drawer.
            </re-drawer>
          </re-shadow-block>
        </demo-block>
        <demo-block title="自定义位置" desc="自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭">
          <re-shadow-block width='100%' height="80px">
            <re-button type="primary" @click="rightShow = true">Right Open</re-button>
            <re-button type="primary" @click="leftShow = true">Left Open</re-button>
            <re-drawer :visible.sync="rightShow" placement="right" title="Right Drawer Title">
               Hi there, this is right drawer.
            </re-drawer>
            <re-drawer :visible.sync="leftShow" placement="left" title="Left Drawer Title">
              Hi there, this is left drawer.
            </re-drawer>
          </re-shadow-block>
        </demo-block>
         <demo-block title="自定义遮罩功能" desc="自定义遮罩区显示与触发关闭">
          <re-shadow-block width='100%' height="80px">
            <re-button type="primary" @click="noMaskShow  = true">No mask Open</re-button>
            <re-button type="primary" @click="closeableShow = true">MaskClosable Open</re-button>
            <re-drawer :visible.sync="noMaskShow" :mask="false" title="Right Drawer Title">
               Hi there, this is a drawer with no mask. Using right corner button to close the drawer
            </re-drawer>
            <re-drawer :visible.sync="closeableShow" :maskClosable="false" title="Left Drawer Title">
              Hi there, this is a drawer with maskClosable false. Using right corner button to close the drawer
            </re-drawer>
          </re-shadow-block>
        </demo-block>
        <demo-block title="API" desc="属性说明如下:">
            <re-table :data="tableData" type="demo">
            </re-table>
        </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoDrawerDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      show: false,
      rightShow: false,
      leftShow: false,
      closeableShow: false,
      noMaskShow: false,
      tableData: [
        {
          parameter: 'visible',
          description: '是否显示 Drawer,支持 .sync 修饰符',
          dataTypes: 'Boolean',
          option: '',
          default: 'false'
        },
        {
          parameter: 'title',
          description: '标题',
          dataTypes: 'String',
          option: '',
          default: ''
        },
        {
          parameter: 'placement',
          description: '抽屉的方向',
          dataTypes: 'String',
          option: 'left / right',
          default: 'right'
        },
        {
          parameter: 'mask',
          description: '是否显示遮罩层',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        },
        {
          parameter: 'maskClosable',
          description: '点击蒙层是否允许关闭',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        },
        {
          parameter: '@close',
          description: 'Drawer 关闭时的回调',
          dataTypes: 'Function',
          option: '—',
          default: '—'
        }
      ]
    }
  },
  methods: {
    handleOpen () {
      this.show = true
    },
    handleClose () {
      console.log('关闭了')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
