<template>
  <div>
      <div v-if="this.locale === 'cn'">
       <demo-block header="标题" />
       <demo-block title="基础" desc="">
            <template slot="code">
              <!-- <code>{{fCode(simple.code.html)}}</code> -->
            </template>
       </demo-block>
       <demo-block title="自定义" desc="">
            <template slot="code">
              <!-- <code>{{fCode(diy.code.html)}}</code> -->
            </template>
       </demo-block>
       <demo-block title="API" desc="属性说明如下: " type="table">
         <re-table :data="tabledata" type="demo"></re-table>
       </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
       <demo-block header="Header" />
       <demo-block title="Usage" desc="">
            <template slot="code">
              <!-- <code>{{fCode(simple.code.html)}}</code> -->
            </template>
       </demo-block>
       <demo-block title="Customize" desc="">
            <template slot="code">
              <!-- <code>{{fCode(diy.code.html)}}</code> -->
            </template>
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
  name: 'RePopupDemo',
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
  }
}
</script>

<style lang="scss" scoped>

</style>
