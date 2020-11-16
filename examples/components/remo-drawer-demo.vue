<template>
    <div>
        <demo-block header="Drawer 抽屉">
        </demo-block>
        <demo-block title="基础用过" desc="点击触发">
          <re-button type="primary" @click="handleOpen">打开抽屉</re-button>
          <re-drawer :visible.sync="show" :close="handleClose" title="Drawer title">
              Content! Hi there, this is drawer.
          </re-drawer>
        </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoDrawerDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleOpen () {
      this.show = true
    },
    handleClose () {
      console.log('关闭了')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
