<template>
  <div>
      <div v-if="this.locale === 'cn'">
       <demo-block header="Loading Bar 加载条" />
       <demo-block title="基础" desc="">
       </demo-block>
       <demo-block title="自定义" desc="">
       </demo-block>
       <demo-block title="API" desc="属性说明如下: ">
         <re-table :data="tabledata" type="demo"></re-table>
       </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
       <demo-block header="Loading Bar" />
       <demo-block title="Usage" desc="">
         <re-shadow-block width="100%" height="100%">
          <re-button type="primary" @click="start">开始 Loading</re-button>
          <re-button @click="end">结束 Loading</re-button>
          <re-button type="danger" @click="error">错误 Loading</re-button>
         </re-shadow-block>
       </demo-block>
       <demo-block title="Customize" desc="">
       </demo-block>
       <demo-block title="API" desc="The properties description are as follows: ">
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
      tabledata: [],
      tabledata_en: []
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
      this.$loading.start()
    },
    end () {
      this.$loading.end()
    },
    error () {
      this.$loading.error()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
