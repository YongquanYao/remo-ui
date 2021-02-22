<template>
  <div>
    <div v-if="this.locale ==='cn'">
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
                <re-message text="成功消息" type="success" message="This is an success message"></re-message>
                <re-message text="警告消息" type="warning" message="This is an warning message"></re-message>
                <re-message text="错误消息" type="danger" message="This is an danger message"></re-message>
              </div>
            </re-shadow-block>
        </demo-block>
        <demo-block title="自定义显示时间">
            <re-shadow-block width="100%" height="100%">
              <re-message :duration="10" text="消息10秒后消失"></re-message>
            </re-shadow-block>
        </demo-block>
        <demo-block title="API" desc="属性说明如下：">
              <re-table :data="tabledata" type="demo">
              </re-table>
          </demo-block>
    </div>
    <div v-if="this.locale ==='en'">
        <demo-block header="Message">
        </demo-block>
        <demo-block title="Usage">
            <re-shadow-block width="100%" height="100%">
              <re-message></re-message>
            </re-shadow-block>
        </demo-block>
        <demo-block title="Type" desc="Four types「success、warning、message、error。">
            <re-shadow-block width="100%" height="100%">
              <div style="display: flex;">
                <re-message text="Message"></re-message>
                <re-message text="Success" type="success" message="This is an success message"></re-message>
                <re-message text="Warning" type="warning" message="This is an warning message"></re-message>
                <re-message text="Error" type="danger" message="This is an danger message"></re-message>
              </div>
            </re-shadow-block>
        </demo-block>
        <demo-block title="Duration">
            <re-shadow-block width="100%" height="100%">
              <re-message :duration="10" text="Message disppears after 10 sec "></re-message>
            </re-shadow-block>
        </demo-block>
        <demo-block title="API" desc="The properties description are as follows: ">
          <re-table :data="tableData_en" type="en"></re-table>
        </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoMessage',
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
      tabledata: [
        {
          parameter: 'type',
          description: '消息类型',
          dataTypes: 'String',
          optional: 'default / success / warning / danger',
          default: 'default'
        },
        {
          parameter: 'message',
          description: '消息内容',
          dataTypes: 'String',
          optional: '',
          default: 'This is an message'
        },
        {
          parameter: 'duration',
          description: '持续时长',
          dataTypes: 'Number',
          optional: '',
          default: 2
        }
      ],
      tableData_en: [
        {
          parameter: 'type',
          description: 'Type',
          dataTypes: 'String',
          optional: 'default / success / warning / danger',
          default: 'default'
        },
        {
          parameter: 'message',
          description: 'Content',
          dataTypes: 'String',
          optional: '',
          default: 'This is an message'
        },
        {
          parameter: 'duration',
          description: 'Duration',
          dataTypes: 'Number',
          optional: '',
          default: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
