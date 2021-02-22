<template>
  <div>
    <div v-if="this.locale ==='cn'">
      <demo-block header="Checkbox 选择器" />
      <demo-block title="基础使用">
        <re-shadow-block width="100%" height="100%">
            <re-checkbox :value="true"></re-checkbox>
        </re-shadow-block>
      </demo-block>
      <demo-block title="圆形">
        <re-shadow-block width="100%" height="100%">
            <re-checkbox type="round" :valUe="false" @change="e => show(e)"></re-checkbox>
        </re-shadow-block>
      </demo-block>
      <demo-block title="禁用">
        <re-shadow-block width="100%" height="100%">
            <div class="disable_container">
                <re-checkbox type="round" :value="true" :disable="true"></re-checkbox>
                <re-checkbox type="round" :value="false" :disable="true"></re-checkbox>
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
    <div v-if="this.locale ==='en'">
      <demo-block header="Checkbox" />
      <demo-block title="Usage">
        <re-shadow-block width="100%" height="100%">
            <re-checkbox :value="true"></re-checkbox>
        </re-shadow-block>
      </demo-block>
      <demo-block title="Round">
        <re-shadow-block width="100%" height="100%">
            <re-checkbox type="round" :valUe="false" @change="e => show(e)"></re-checkbox>
        </re-shadow-block>
      </demo-block>
      <demo-block title="Disabled">
        <re-shadow-block width="100%" height="100%">
            <div class="disable_container">
                <re-checkbox type="round" :value="true" :disable="true"></re-checkbox>
                <re-checkbox type="round" :value="false" :disable="true"></re-checkbox>
            </div>
        </re-shadow-block>
      </demo-block>
      <demo-block title="API" desc="The properties description are as follows: ">
          <re-table :data="tabledata_en" type="en"></re-table>
      </demo-block>
      <demo-block title="Event" desc="The trigger events description are as follows: ">
          <re-table :data="eventTabledata_en" type="en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemocheckboxDemo',
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
      ],
      tabledata_en: [
        {
          parameter: 'value / v-model',
          description: 'Binding value',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'disable',
          description: 'Whether the Checkbox is disabled',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'type',
          description: 'two types of Checkbox',
          dataTypes: 'Boolean',
          optional: 'rect / round',
          default: 'rect'
        }
      ],
      eventTabledata_en: [
        {
          parameter: '@Change',
          description: 'triggers when the selected value changes',
          dataTypes: 'Function',
          optional: 'pass current value as parameter',
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
