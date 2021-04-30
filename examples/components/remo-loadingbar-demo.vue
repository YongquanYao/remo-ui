<template>
  <div>
      <div v-if="this.locale === 'cn'">
       <demo-block header="Loading Bar 加载条" />
       <demo-block title="基础" desc="">
          <re-button type="primary" @click="start">开始 Loading</re-button>
          <re-button type="warning" @click="end">结束 Loading</re-button>
          <re-button type="danger" @click="error">错误 Loading</re-button>
       </demo-block>
       <demo-block title="自定义" desc="">
       </demo-block>
       <demo-block title="API" desc="属性说明如下: " type="table">
         <re-table :data="tabledata" type="demo"></re-table>
       </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
       <demo-block header="Loading Bar" />
       <demo-block title="Usage" desc="">
          <re-button type="primary" @click="start">Start Loading</re-button>
          <re-button type="warning" @click="end">End Loading</re-button>
          <re-button type="danger" @click="error">Error Loading</re-button>
       </demo-block>
       <demo-block title="Customize" desc="multiple customize property">
          <re-button  @click="CustomizeOne">Set Speed 1</re-button>
          <re-button  @click="CustomizeTwo">Spinner off</re-button>
          <re-button  @click="CustomizeThird">Spinner on</re-button>
          <re-button  @click="CustomizeFourth">Loading Percentage per second</re-button>
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
  name: 'ReXXXDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      tabledata: [
        {
          parameter: 'speed',
          description: '设置loading的速度值',
          dataTypes: 'Number',
          optional: '-',
          default: 5
        },
        {
          parameter: 'percentNum',
          description: '设置loading每次前进的的百分比',
          dataTypes: 'percentNum',
          optional: '0-1',
          default: 0
        },
        {
          parameter: 'showSpinner',
          description: '是否显示右上角loading 图标',
          dataTypes: 'Boolean',
          optional: 'true / flase',
          default: true
        }
      ],
      tabledata_en: [
         {
          parameter: 'speed',
          description: 'Set loading speed',
          dataTypes: 'Number',
          optional: '-',
          default: 5
        },
        {
          parameter: 'percentNum',
          description: 'Set loading increase percentage',
          dataTypes: 'percentNum',
          optional: '0-1',
          default: 0
        },
        {
          parameter: 'showSpinner',
          description: 'Enable loading icon',
          dataTypes: 'Boolean',
          optional: 'true / flase',
          default: true
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
    start () {
      // Vue.prototype.$loading = 1
      console.log(this.$loading)
      this.$loading.init()
      this.$loading.start()
    },
    end () {
      this.$loading.end()
    },
    error () {
      this.$loading.error()
    },
    CustomizeOne() {
      this.$loading.config({
        speed: 1
      })
       this.$loading.start()
    },
    CustomizeTwo() {
      this.$loading.config({
        showSpinner: false
      })
      this.$loading.start()
    },
    CustomizeThird() {
      this.$loading.config({
        showSpinner: true
      })
      this.$loading.start()
    },
    CustomizeFourth() {
      this.$loading.config({
        percentNum: 1
      })
      this.$loading.start()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
