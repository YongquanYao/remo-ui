<template>
  <div>
    <div v-if="this.locale === 'cn'">
        <demo-block header="Drawer 抽屉">
        </demo-block>
        <demo-block height="370" title="基础用法" desc="点击触发">
            <re-button type="primary" @click="handleOpen">Open</re-button>
            <re-drawer :visible.sync="show" :close="handleClose" title="Drawer title">
              Hi there, this is default setting drawer.
            </re-drawer>
            <template slot="code">
              <code class="html">{{fCode(simple.code.html)}}</code>
            </template>
        </demo-block>
        <demo-block height="320" title="自定义位置" desc="自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭">
            <re-button type="primary" @click="rightShow = true">Right Open</re-button>
            <re-button type="primary" @click="leftShow = true">Left Open</re-button>
            <re-drawer :visible.sync="rightShow" placement="right" title="Right Drawer Title">
               Hi there, this is right drawer.
            </re-drawer>
            <re-drawer :visible.sync="leftShow" placement="left" title="Left Drawer Title">
              Hi there, this is left drawer.
            </re-drawer>
            <template slot="code">
              <code class="html">{{fCode(diy1.code.html)}}</code>
            </template>
        </demo-block>
         <demo-block height="320" title="自定义遮罩功能" desc="自定义遮罩区显示与触发关闭">
            <re-button type="primary" @click="noMaskShow  = true">No mask Open</re-button>
            <re-button type="primary" @click="closeableShow = true">MaskClosable Open</re-button>
            <re-drawer :visible.sync="noMaskShow" :mask="false" title="Right Drawer Title">
               Hi there, this is a drawer with no mask. Using right corner button to close the drawer
            </re-drawer>
            <re-drawer :visible.sync="closeableShow" :maskClosable="false" title="Left Drawer Title">
              Hi there, this is a drawer with maskClosable false. Using right corner button to close the drawer
            </re-drawer>
             <template slot="code">
              <code class="html">{{fCode(diy2.code.html)}}</code>
            </template>
        </demo-block>
        <demo-block title="API" desc="属性说明如下:" type="table">
            <re-table :data="tableData" type="demo">
            </re-table>
        </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
        <demo-block header="Drawer">
        </demo-block>
        <demo-block height="370" title="Usage" desc="Click to trigger">
            <re-button type="primary" @click="handleOpen">Open</re-button>
            <re-drawer :visible.sync="show" :close="handleClose" title="Drawer title">
              Hi there, this is default setting drawer.
            </re-drawer>
            <template slot="code">
              <code class="html">{{fCode(simple.code.html)}}</code>
            </template>
        </demo-block>
        <demo-block height="320" title="Placement" desc="Showing from right or left">
            <re-button type="primary" @click="rightShow = true">Right Open</re-button>
            <re-button type="primary" @click="leftShow = true">Left Open</re-button>
            <re-drawer :visible.sync="rightShow" placement="right" title="Right Drawer Title">
               Hi there, this is right drawer.
            </re-drawer>
            <re-drawer :visible.sync="leftShow" placement="left" title="Left Drawer Title">
              Hi there, this is left drawer.
            </re-drawer>
          <template slot="code">
              <code class="html">{{fCode(diy1.code.html)}}</code>
            </template>
        </demo-block>
         <demo-block height="320" title="Mask Settting" desc="Whether mask can be clicked to close or displayed">
            <re-button type="primary" @click="noMaskShow  = true">No mask Open</re-button>
            <re-button type="primary" @click="closeableShow = true">MaskClosable Open</re-button>
            <re-drawer :visible.sync="noMaskShow" :mask="false" title="Right Drawer Title">
               Hi there, this is a drawer with no mask. Using right corner button to close the drawer
            </re-drawer>
            <re-drawer :visible.sync="closeableShow" :maskClosable="false" title="Left Drawer Title">
              Hi there, this is a drawer with maskClosable false. Using right corner button to close the drawer
            </re-drawer>
          <template slot="code">
              <code class="html">{{fCode(diy2.code.html)}}</code>
          </template>
        </demo-block>
        <demo-block title="API" desc="The properties description are as follows: " type="table">
          <re-table :data="tableData_en" type="cn"></re-table>
        </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoDrawerDemo',
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
      simple: {
        code:{
          html:`
            <re-button type="primary" @click="handleOpen">Open</re-button>
            <re-drawer :visible.sync="show" :close="handleClose" title="Drawer title">
              Hi there, this is default setting drawer.
            </re-drawer>

            data () {
              return {
                show: false,
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
          `
        }
      },
      diy1: {
        code:{
          html:`
            <re-button type="primary" @click="rightShow = true">Right Open</re-button>
            <re-button type="primary" @click="leftShow = true">Left Open</re-button>
            <re-drawer :visible.sync="rightShow" placement="right" title="Right Drawer Title">
               Hi there, this is right drawer.
            </re-drawer>
            <re-drawer :visible.sync="leftShow" placement="left" title="Left Drawer Title">
              Hi there, this is left drawer.
            </re-drawer>
            export default {
              data () {
                return {
                  rightShow: false,
                  leftShow: false,
                }
              },
            }
          `
        }
      },
      diy2: {
        code:{
          html:`
            <re-button type="primary" @click="noMaskShow  = true">No mask Open</re-button>
            <re-button type="primary" @click="closeableShow = true">MaskClosable Open</re-button>
            <re-drawer :visible.sync="noMaskShow" :mask="false" title="Right Drawer Title">
               Hi there, this is a drawer with no mask. Using right corner button to close the drawer
            </re-drawer>
            <re-drawer :visible.sync="closeableShow" :maskClosable="false" title="Left Drawer Title">
              Hi there, this is a drawer with maskClosable false. Using right corner button to close the drawer
            </re-drawer>
            
            data () {
              return {
                closeableShow: false,
                noMaskShow: false,
              }
            },
          `
        }
      },
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
      ],
      tableData_en: [
        {
          parameter: 'visible',
          description: 'Drawer visibility, support .sync modifier',
          dataTypes: 'Boolean',
          option: '',
          default: 'false'
        },
        {
          parameter: 'title',
          description: 'Title',
          dataTypes: 'String',
          option: '',
          default: ''
        },
        {
          parameter: 'placement',
          description: 'Drawer Placement',
          dataTypes: 'String',
          option: 'left / right',
          default: 'right'
        },
        {
          parameter: 'mask',
          description: 'Mask visibility',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        },
        {
          parameter: 'maskClosable',
          description: 'Whether mask can be clicked to close drawer',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        },
        {
          parameter: '@close',
          description: 'Drawer callback function',
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
