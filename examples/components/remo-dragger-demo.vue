<template>
  <div>
      <demo-block header="Dragger 弹窗">
      </demo-block>
      <demo-block title="信息类型" desc="用于显示特别信息模块">
          <re-shadow-block width="100%" height="100%">
            <re-tip color="blue" style="width: 90%">
              最新公告请查看右下角的弹窗
            </re-tip>
              <re-dragger :visible.sync="infoShow"  :width="370" :height='180'>
                <template slot="title">
                  We're hiring !
                </template>
                <p class="hireText">If you have passion of <span>front-end </span>role, If you...<br/> We are looking forward to having you with us. 😊<br><span>Please contact us via xxxx@xxx.com.</span></p>
              </re-dragger>
          </re-shadow-block>
      </demo-block>
      <demo-block title="服务类型" desc="用于Q&A的组件模块">
          <re-shadow-block width="100%" height="100%">
              <re-button icon="remo-team" @click="handleShow">联系客服</re-button>
              <re-dragger :visible.sync="chatShow"  :width="370" :height='580'>
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
      infoShow: true,
      chatShow: false,
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
      this.infoShow = false
      this.chatShow = !this.chatShow
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
.hireText{
  font-size: 15px;
  line-height: 25px;
  span{
    font-weight: 500;
  }
}
</style>
