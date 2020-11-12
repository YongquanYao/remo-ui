<template>
    <div>
       <demo-block title="基础" desc="5种基本颜色: ">
         <re-tip color="green">Green: green</re-tip>
         <re-tip color="blue">Blue: blueeeeeeeeeeeeeeeeeeeeeee</re-tip>
         <re-tip color="orange">Orange: orangeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</re-tip>
         <re-tip color="red">Red: redddddddddddddddddddddddddddddddddddddddddddddddddddd</re-tip>
         <re-tip color="gray">Gray: grayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</re-tip>
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
