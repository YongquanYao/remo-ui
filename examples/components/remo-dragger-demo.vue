<template>
  <div>
      <demo-block header="Dragger 弹窗" desc="可移动，可缩放的窗口">
          <re-shadow-block width="100%" height="100%">
              <re-button icon="remo-team" @click="handleShow">联系客服</re-button>
              <re-dragger :visible.sync="show"  :width="370" :height='580'>
                <template slot="title">
                  <i class="remoi remo-desktop"></i>  Remo Live Chat
                </template>
              <div class="chat_container">
                <div class="chat_top">
                  <div class="message_container_1">
                    <div class="avatar"></div>
                    <div class="message"></div>
                  </div>
                  <div class="message_container_1">
                    <div class="avatar"></div>
                    <div class="message"></div>
                  </div>
                  <div class="message_container_2">
                    <div class="message"></div>
                    <div class="avatar"></div>
                  </div>
                  <div class="message_container_1">
                    <div class="avatar"></div>
                    <div class="message"></div>
                  </div>
                  <div class="message_container_2">
                    <div class="message"></div>
                    <div class="avatar"></div>
                  </div>
                </div>
                <div class="chat_bottom">
                  <re-input pattern='frame' placeholder="请输入信息" class="input"></re-input><re-button class="send" type="primary">发送</re-button>
                </div>
              </div>
              </re-dragger>
          </re-shadow-block>
      </demo-block>
      <demo-block title="API" desc="属性说明如下：">
         <re-table :data="tabledata" type="demo"></re-table>
      </demo-block>
      <demo-block title="Slot" desc="插槽:">
         <re-table :data="slotTabledata" type="demo"></re-table>
      </demo-block>
  </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoDraggerDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      show: true,
      tabledata: [
        {
          parameter: 'visible',
          description: '是否显示 Drawer,支持 .sync 修饰符',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'false'
        },
        {
          parameter: 'width',
          description: '组件宽度',
          dataTypes: 'Number',
          option: '',
          default: '450'
        },
        {
          parameter: 'height',
          description: '组件宽度',
          dataTypes: 'Number',
          option: '',
          default: '200'
        },
        {
          parameter: 'isDraggable',
          description: '是否允许拖拽',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        },
        {
          parameter: 'isResizable',
          description: '是否允许缩放',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'true'
        },
        {
          parameter: 'aspectRatio',
          description: '是否等比例缩放',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'false'
        }
      ],
      slotTabledata: [
        {
          parameter: 'title',
          description: '标题',
          dataTypes: 'node',
          option: '',
          default: 'I’m remo modal'
        }
      ]
    }
  },
  methods: {
    handleShow () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.chat_container{
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  .chat_top{
    width: 100%;
    // height: 80%;
    .message_container_1{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .avatar{
        width: 50px;
        height: 50px;
        background: #ececec;
        border-radius: 50%;
        margin-right: 20px;
      }
      .message{
        flex: 1;
        height: 30px;
        background: #ececec;
      }
    }
    .message_container_2{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .message{
        width: calc(100% - 70px);
        height: 30px;
        background: #e0e0e0;
      }
      .avatar{
        width: 50px;
        height: 50px;
        background: #e0e0e0;
        border-radius: 50%;
        margin-left: 20px;
      }
    }
  }
  .chat_bottom{
    position: absolute;
    bottom: 15px;
    width: 100%;
    height: 40px;
    border-top: 1px solid #ebebeb;
    padding: 15px 5px;
    display: flex;
    align-items: center;
    .input{
      width: 80%;
    }
    .send{
      width: 20%;
      margin: 0;
      margin-left: 10px;
      font-size: 16px;
    }
  }
}
</style>
