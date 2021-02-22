<template>
  <div>
    <div v-if="this.locale === 'cn'">
       <demo-block title="基础" desc="5种基本颜色: ">
         <re-tip color="green" style="width: 20%">green</re-tip>
         <re-tip color="blue" style="width: 40%">blue</re-tip>
         <re-tip color="orange" style="width: 60%">orange</re-tip>
         <re-tip color="red" style="width: 80%">red</re-tip>
         <re-tip color="gray" style="width: 90%">gray</re-tip>
       </demo-block>
       <demo-block title="自定义" desc="设置边框颜色: ">
         <re-tip color="pink">pink</re-tip>
         <re-tip color="#c8d6fa">#c8d6fa</re-tip>
         <re-tip color="#a3b2c2">#a3b2c2</re-tip>
         <re-tip color="purple">purple</re-tip>
       </demo-block>
       <demo-block title="API" desc="属性说明如下: ">
         <re-table :data="tabledata" type="demo"></re-table>
       </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
       <demo-block title="Usage" desc="5 types of color: ">
         <re-tip color="green" style="width: 20%">green</re-tip>
         <re-tip color="blue" style="width: 40%">blue</re-tip>
         <re-tip color="orange" style="width: 60%">orange</re-tip>
         <re-tip color="red" style="width: 80%">red</re-tip>
         <re-tip color="gray" style="width: 90%">gray</re-tip>
       </demo-block>
       <demo-block title="Customize" desc="Customize with different border color: ">
         <re-tip color="pink">pink</re-tip>
         <re-tip color="#c8d6fa">#c8d6fa</re-tip>
         <re-tip color="#a3b2c2">#a3b2c2</re-tip>
         <re-tip color="purple">purple</re-tip>
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
  name: 'RemoTip',
  components: {
    demoBlock
  },
  data () {
    return {
      tabledata: [
        {
          parameter: 'color',
          description: 'Tip默认主题颜色',
          dataTypes: 'String',
          optional: 'default / green / blue / red / orange / gray',
          default: 'default / green'
        },
        {
          parameter: 'color',
          description: 'Tip自定义主题颜色',
          dataTypes: 'String',
          optional: 'all colors',
          default: ''
        }
      ],
      tabledata_en: [
        {
          parameter: 'color',
          description: 'Tips decided color style',
          dataTypes: 'String',
          optional: 'default / green / blue / red / orange / gray',
          default: 'default / green'
        },
        {
          parameter: 'color',
          description: 'Tip customize color',
          dataTypes: 'String',
          optional: 'all colors',
          default: ''
        }
      ]
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
