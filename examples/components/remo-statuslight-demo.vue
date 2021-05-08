<template>
  <div>
    <div v-if="this.locale === 'cn' ">
      <demo-block header="Status Light 状态标志">
      </demo-block>
      <demo-block height="160" title="基础" desc="6种状态静态展示：">
            <re-status-light style="margin-right:15px"/>
            <re-status-light style="margin-right:15px" status="active"/>
            <re-status-light style="margin-right:15px" status="positive"/>
            <re-status-light style="margin-right:15px" status="intermediary"/>
            <re-status-light style="margin-right:15px" status="negative"/>
            <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block height="160" title="基础" desc="6种状态动态展示：">
            <re-status-light style="margin-right:15px" :animation="true" />
            <re-status-light style="margin-right:15px" :animation="true" status="active"/>
            <re-status-light style="margin-right:15px" :animation="true" status="positive"/>
            <re-status-light style="margin-right:15px" :animation="true" status="intermediary"/>
            <re-status-light style="margin-right:15px" :animation="true" status="negative"/>
            <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block title='API' desc="属性说明如下：" type="table">
          <re-table :data="tableData" type="demo"></re-table>
      </demo-block>
    </div>
    <div v-if="this.locale === 'en' ">
      <demo-block header="Status Light">
      </demo-block>
      <demo-block height="160" title="Usage" desc="6 types of light in static mode：">
            <re-status-light style="margin-right:15px"/>
            <re-status-light style="margin-right:15px" status="active"/>
            <re-status-light style="margin-right:15px" status="positive"/>
            <re-status-light style="margin-right:15px" status="intermediary"/>
            <re-status-light style="margin-right:15px" status="negative"/>
            <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block height="160" title="Animation" desc="6 types of light in dynamic mode：">
            <re-status-light style="margin-right:15px" :animation="true" />
            <re-status-light style="margin-right:15px" :animation="true" status="active"/>
            <re-status-light style="margin-right:15px" :animation="true" status="positive"/>
            <re-status-light style="margin-right:15px" :animation="true" status="intermediary"/>
            <re-status-light style="margin-right:15px" :animation="true" status="negative"/>
            <template slot="code">
              <code>{{fCode(animation.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block title='API' desc="The properties description are as follow:" type="table">
          <re-table :data="tableData_en" type="en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoStatusDemo',
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
          <re-status-light style="margin-right:15px"/>
          <re-status-light style="margin-right:15px" status="active"/>
          <re-status-light style="margin-right:15px" status="positive"/>
          <re-status-light style="margin-right:15px" status="intermediary"/>
          <re-status-light style="margin-right:15px" status="negative"/>
          `
        }
      },
      animation:{
        code:{
          html:`
          <re-status-light style="margin-right:15px" :animation="true" />
          <re-status-light style="margin-right:15px" :animation="true" status="active"/>
          <re-status-light style="margin-right:15px" :animation="true" status="positive"/>
          <re-status-light style="margin-right:15px" :animation="true" status="intermediary"/>
          <re-status-light style="margin-right:15px" :animation="true" status="negative"/>
          `
        }
      },
      tableData: [
        {
          parameter: 'status',
          description: 'status的状态',
          dataTypes: 'String',
          optional: 'active / positive / intermediary / negative',
          default: ''
        },
        {
          parameter: 'animation',
          description: '动态效果',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ],
      tableData_en: [
        {
          parameter: 'status',
          description: 'status mode',
          dataTypes: 'String',
          optional: 'active / positive / intermediary / negative',
          default: ''
        },
        {
          parameter: 'animation',
          description: 'enable animation',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
