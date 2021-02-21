<template>
  <div>
    <div v-if="this.locale=== 'cn' ">
      <demo-block header="Switch 开关" />
      <demo-block title="基础使用">
        <re-shadow-block width="100%" height="100%">
            <re-switch :value="true"></re-switch>
        </re-shadow-block>
      </demo-block>
      <demo-block title="圆形">
        <re-shadow-block width="100%" height="100%">
            <re-switch type="round" :valUe="false" @change="e => show(e)"></re-switch>
        </re-shadow-block>
      </demo-block>
      <demo-block title="禁用">
        <re-shadow-block width="100%" height="100%">
            <div class="disable_container">
                <re-switch type="round" :value="true" :disable="true"></re-switch>
                <re-switch type="round" :value="false" :disable="true"></re-switch>
            </div>
        </re-shadow-block>
      </demo-block>
      <demo-block title="API" desc="属性说明如下：">
          <re-table :data="tabledata" type="demo"></re-table>
      </demo-block>
      <demo-block title="Event" desc="事件说明如下：">
          <re-table :data="eventTabledata" type="demo"></re-table>
      </demo-block>
    </div>
    <div v-if="this.locale=== 'en' ">
      <demo-block header="Switch" />
      <demo-block title="Usage">
        <re-shadow-block width="100%" height="100%">
            <re-switch :value="true"></re-switch>
        </re-shadow-block>
      </demo-block>
      <demo-block title="Round">
        <re-shadow-block width="100%" height="100%">
            <re-switch type="round" :valUe="false" @change="e => show(e)"></re-switch>
        </re-shadow-block>
      </demo-block>
      <demo-block title="Disabled">
        <re-shadow-block width="100%" height="100%">
            <div class="disable_container">
                <re-switch type="round" :value="true" :disable="true"></re-switch>
                <re-switch type="round" :value="false" :disable="true"></re-switch>
            </div>
        </re-shadow-block>
      </demo-block>
      <demo-block title="API" desc="The property description is as follows: ">
          <re-table :data="tabledata" type="en"></re-table>
      </demo-block>
      <demo-block title="Event" desc="The event description is as follows: ">
          <re-table :data="eventTabledata" type="en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  components: {
    demoBlock
  },
  data () {
    return {
      tabledata: [
        {
          parameter: 'value / v-model',
          description: '绑定值',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'disable',
          description: '禁用模式',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'type',
          description: '类型',
          dataTypes: 'Boolean',
          optional: 'rect / round',
          default: 'rect'
        }
        // {
        //   parameter: 'type',
        //   description: '类型',
        //   dataTypes: 'Boolean',
        //   optional: 'rect / round',
        //   default: 'rect'
        // }
      ],
      eventTabledata: [
        {
          parameter: '@Change',
          description: '值改变时',
          dataTypes: 'Function',
          optional: '会传递当前值进去',
          default: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  methods: {
    show (value) {
      console.log(1)
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.disable_container{
  display: flex;
  div{
    margin-right: 10px;
  }
}
</style>
