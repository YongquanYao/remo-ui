<template>
  <div>
    <div v-if="this.locale ==='cn'">
        <demo-block header="Statistic 统计数值">
        </demo-block>
        <demo-block title="基础用法" desc="自动精确到小数点后两位">
              <re-stat v-model='value1'></re-stat>
        </demo-block>
        <demo-block title="配前置单位" desc="自定义单位">
              <re-stat unit="$" v-model='value2'></re-stat>
        </demo-block>
        <demo-block title="配前置符号" desc="自定义单位符号与颜色">
              <re-stat class="demostat" prefix="remo-arrowup" iconColor="MediumSeaGreen" v-model='value3'></re-stat>
              <re-stat prefix="remo-arrowdown" iconColor="red" v-model='value4'></re-stat>
        </demo-block>
         <demo-block title="配后置符号" desc="自定义单位符号与颜色">
              <re-stat class="demostat" suffix="remo-linechart" iconColor="#409EFF" v-model='value5'></re-stat>
              <!-- <re-stat prefix="remo-arrowdown" iconColor="red" v-model='value4'></re-stat> -->
        </demo-block>
        <demo-block title="自定义" desc="小数点位 / 符号 / 数值大小">
              <re-stat class="demostat"  prefix="remo-arrowup" :decimal="false" fontSize="13px" v-model='value3'></re-stat>
              <re-stat prefix="remo-arrowdown" fontSize="40px" iconColor="pink" fontColor='pink' v-model='value4'></re-stat>
        </demo-block>
        <demo-block title="API" desc="属性说明如下：" type="table">
            <re-table :data="tabledata" type="demo">
            </re-table>
        </demo-block>
    </div>
    <div v-if="this.locale ==='en'">
        <demo-block header="Statistic">
        </demo-block>
        <demo-block title="Usage" desc="Accurate to two decimal places">
              <re-stat v-model='value1'></re-stat>
        </demo-block>
        <demo-block title="Unit" desc="Customize unit">
              <re-stat unit="$" v-model='value2'></re-stat>
        </demo-block>
        <demo-block title="Prefix Icon" desc="Customize prefix icon and its color">
              <re-stat class="demostat" prefix="remo-arrowup" iconColor="MediumSeaGreen" v-model='value3'></re-stat>
              <re-stat prefix="remo-arrowdown" iconColor="red" v-model='value4'></re-stat>
        </demo-block>
         <demo-block title="Suffix Icon" desc="Customize suffix icon and its color">
              <re-stat class="demostat" suffix="remo-linechart" iconColor="#409EFF" v-model='value5'></re-stat>
              <!-- <re-stat prefix="remo-arrowdown" iconColor="red" v-model='value4'></re-stat> -->
        </demo-block>
        <demo-block title="Customize" desc="Decimal place / Icon / Numeric">
              <re-stat class="demostat"  prefix="remo-arrowup" :decimal="false" fontSize="13px" v-model='value3'></re-stat>
              <re-stat prefix="remo-arrowdown" fontSize="40px" iconColor="pink" fontColor='pink' v-model='value4'></re-stat>
        </demo-block>
        <demo-block title="API" desc="The properties description are as follows: " type="table">
          <re-table :data="tableData_en" type="en"></re-table>
        </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoStatDemo',
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
      value1: '66666.60',
      value2: '12345.60',
      value3: '22',
      value4: '11.00',
      value5: '941224.00',
      tabledata: [
        {
          parameter: 'value / v-model',
          description: '数值',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'prefix',
          description: '前缀Remo Icon符号',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'suffix',
          description: '后缀Remo Icon符号',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'unit',
          description: '前缀单位',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'iconColor',
          description: '符号颜色',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'fontSize',
          description: '整数数值大小',
          dataTypes: 'String',
          optional: '',
          default: '24px'
        },
        {
          parameter: 'fontColor',
          description: '整数数值颜色',
          dataTypes: 'String',
          optional: '',
          default: 'rgba(0,0,0,.65)'
        },
        {
          parameter: 'decimal',
          description: '是否显示小数点',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        }
      ],
      tableData_en: [
        {
          parameter: 'value / v-model',
          description: 'Binding value',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'prefix',
          description: 'Prefix Icon',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'suffix',
          description: 'Suffix Icon',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'unit',
          description: 'Unit',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'iconColor',
          description: 'Icon Color',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'fontSize',
          description: 'Integer Font Size',
          dataTypes: 'String',
          optional: '',
          default: '24px'
        },
        {
          parameter: 'fontColor',
          description: 'Integer Font Color',
          dataTypes: 'String',
          optional: '',
          default: 'rgba(0,0,0,.65)'
        },
        {
          parameter: 'decimal',
          description: 'Whether display decimal',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.demostat{
  margin-right: 10px;
}
</style>
