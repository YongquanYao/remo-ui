<template>
    <div>
       <demo-block title="基础" desc="5种基本颜色: ">
         <re-tip color="green">green</re-tip>
         <re-tip color="blue">blue</re-tip>
         <re-tip color="orange">orange</re-tip>
         <re-tip color="red">red</re-tip>
         <re-tip color="gray">gray</re-tip>
       </demo-block>
       <demo-block title="自定义颜色" desc="传递边框颜色: ">
         <re-tip color="pink">pink</re-tip>
         <re-tip color="#c8d6fa">#c8d6fa</re-tip>
         <re-tip color="#a3b2c2">#a3b2c2</re-tip>
         <re-tip color="purple">purple</re-tip>
       </demo-block>
       <demo-block title="API" desc="属性说明如下: ">
         <re-table :data="tabledata" type="demo"></re-table>
       </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
