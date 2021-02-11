<template>
  <div>
      <demo-block header="Message 消息提醒">
      </demo-block>
      <demo-block title="基础使用">
          <re-shadow-block width="100%" height="100%">
            <re-message></re-message>
          </re-shadow-block>
      </demo-block>
      <demo-block title="不同状态" desc="用来显示「成功、警告、消息、错误」类的操作反馈。">
          <re-shadow-block width="100%" height="100%">
            <div style="display: flex;">
              <re-message text="正常消息"></re-message>
              <re-message type="成功消息"></re-message>
              <re-message type="警告消息"></re-message>
              <re-message type="错误消息"></re-message>
            </div>
          </re-shadow-block>
      </demo-block>
      <demo-block title="自定义显示时间">
          <re-shadow-block width="100%" height="100%">
            <re-message></re-message>
          </re-shadow-block>
      </demo-block>
  </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoMessage',
  components: {
    demoBlock
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
