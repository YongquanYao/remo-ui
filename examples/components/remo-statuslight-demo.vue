<template>
    <div>
      <demo-block header="Status Light 状态标志">
      </demo-block>
      <demo-block title="基础" desc="6种状态静态展示：">
          <re-shadow-block width="100%" height="100%">
            <re-status-light style="margin-right:15px"/>
            <re-status-light style="margin-right:15px" status="active"/>
            <re-status-light style="margin-right:15px" status="positive"/>
            <re-status-light style="margin-right:15px" status="intermediary"/>
            <re-status-light style="margin-right:15px" status="negative"/>
          </re-shadow-block>
      </demo-block>
      <demo-block title="基础" desc="6种状态动态展示：">
          <re-shadow-block width="100%" height="100%">
            <re-status-light style="margin-right:15px" :animation="true" />
            <re-status-light style="margin-right:15px" :animation="true" status="active"/>
            <re-status-light style="margin-right:15px" :animation="true" status="positive"/>
            <re-status-light style="margin-right:15px" :animation="true" status="intermediary"/>
            <re-status-light style="margin-right:15px" :animation="true" status="negative"/>
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
  name: 'RemoStatusLightDemo',
  components: {
    demoBlock
  },
  data () {
    return {
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
