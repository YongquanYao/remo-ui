<template>
  <div class="index">
     <!-- <div class="header">
            <div class="container">
                <span class="title">
                  <span class="logo-left">Re:</span>mo</span>
                <div class="header-nav">
                  <ul>
                    <li class="header-nav-item" v-for="x in headnav_data" :key="x.id">
                        <i :class="x.icon" :style="{color: x.color}"></i>
                        <a :href="x.path">{{x.name}}</a>
                    </li>
                  </ul>
                </div>
            </div>
      </div> -->
      <div class="content">
        <div class="desc">
            <h5 class="title">Remo U<span class="ele">I</span></h5>
            <div>
            <re-status-light style="margin-right:15px" :animation="true"/>
            <re-status-light style="margin-right:15px" :animation="true" status="active"/>
            </div>
            <p v-if="this.locale==='cn'">一款为Vue.js@2.0量身定做的轻量级霓裳套装</p>
            <p v-else>A light UI tool-kit for Vue@2.x developemnt.</p>
            <re-button  v-if="this.locale ==='cn'" type="primary" class="btn_start" @click="jumpComponent">开始使用
            </re-button>
             <re-button  v-else type="primary" class="btn_start" @click="jumpComponent">Getting Started
            </re-button>
            <re-button  v-if="this.locale ==='cn'" type="primary" class="btn_about" @click="jumpAbout">官方说明
            </re-button>
            <re-button  v-else type="primary" class="btn_about" @click="jumpAbout">About Remo
            </re-button>
            <re-button type="primary"   v-if="this.locale ==='cn'" class="btn_github" @click="jumpGithub"><i class="remoi remo-github-fill"/>源代码
            </re-button>
            <re-button  type="primary" v-else class="btn_github" @click="jumpGithub" icon="remo-github-fill">Source Code
            </re-button>
            <!-- <re-button  type="primary" class="btn_github-mobile" @click="jumpGithub"><i class="remoi remo-github-fill"/></re-button> -->
        </div>
        <div class="bg_img">
           <img class="big" src="../assets/bg.png" alt="bg"/>
           <img class="gear_1" src="../assets/gear_1.png" alt="gear">
           <img class="gear_2" src="../assets/gear_2.png" alt="gear">
           <img class="gear_3" src="../assets/gear_3.png" alt="gear">
        </div>
        <!-- <img alt=""/> -->
      </div>
      <img class="bg_left1" src="../assets/left_top1.png" alt="" />
      <img class="bg_left2" src="../assets/left_top2.png" alt="" />
      <img class="bg_right1" src="../assets/right_1.png" alt=""/>
      <img class="bg_right2" src="../assets/right_2.png" alt="" />
       <!-- 给Form跳转的 -->
      <iframe width="1px" height="1px" id="frame" name="sendframe" class="sendFrame"></iframe>
      <re-dragger :visible.sync="connectionShow"  :width="370" :height='350'>
        <template slot="title">
          <i class="remoi remo-desktop"></i>  Remo Connection Form
        </template>
        <div class="chat_container">
            <div class="chat_top">
              <div class="message_container_1">
                <re-input pattern='frame' v-model="name" placeholder="Name" prefixIcon="remo-user" class="input"></re-input>
              </div>
              <div class="message_container_1">
                <re-input pattern='frame'  v-model="email"  placeholder="Email" prefixIcon="remo-mail" class="input"></re-input>
              </div>
              <div class="message_container_1">
                <re-input pattern='frame' v-model="heardFrom"  placeholder="Where did you heard about Remo ?" prefixIcon="remo-share" class="input"></re-input>
              </div>
              <div class="message_container_1">
                <re-input pattern='frame' v-model="message" placeholder="Leave me a message..." prefixIcon="remo-comment" class="input"></re-input>
              </div>
            </div>
            <div class="chat_bottom">
                <re-button  class="send" type="submit" @click="connectionSend">Send</re-button>
            </div>
        </div>
      </re-dragger>
      <div class="realForm">
        <form action="https://submit-form.com/23wigQ4D" target="sendframe"> 
          <input ref="formSubmitName" type="text" id="name" name="name" placeholder="Name" />
          <input ref="formSubmitEmail" type="email" id="email" name="email" placeholder="Email" />
          <input ref="formSubmitMsg" type="text" id="message" name="message" placeholder="Message" />
          <input ref="formSubmitHeardForm" type="text" id="heard" name="heardForm" placeholder="Heard From" />
          <button ref="formSubmitBtn" type="submit">Send</button>
        </form>
      </div>
      <!-- 提醒信息 -->
       <re-message ref="connect_msg" class="btn_connect" text="提醒消息" type="solid" message="Please submit the connection form. 😊" :duration="5"></re-message>
       <re-message ref="connect_success_msg" class="btn_connect" text="成功消息" type="solid_success" message="Welcome to Remo !! 😊" :duration="4"></re-message>
       <re-message ref="connect_fail_validate1" class="btn_connect" text="失败消息" type="solid_fail" message="Please input your name and email." :duration="3"></re-message>
       <re-message ref="connect_fail_validate2" class="btn_connect" text="失败消息" type="solid_fail" message="Please input a vaild email address." :duration="3"></re-message>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      connectionShow: false,
      name: null,
      email: null,
      heardFrom: null,
      message: null
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      connect: 'connect'
    })
  },
  mounted () {
    this.checkConnect()
  },
  methods: {
    jumpComponent () {
      const previousConnect = window.localStorage.getItem('__Remo__')
      if (this.connect || previousConnect === 'Jst7egxcvzaT87o93ds0od_dsewD712Essad13m_sqwesdVueMdsd2Evvdcq2nsdPsa1wsc') {
        this.$router.push('/component/')
      } else {
        // this.$refs.connect_msg.$el.click()
        // console.log(this.$refs.connect_msg.show)
        this.$refs.connect_msg.show = true
        this.connectionShow = true
      }
    },
    jumpGithub () {
      window.open('https://github.com/YongquanYao/remo-ui')
    },
    jumpAbout () {
      const previousConnect = window.localStorage.getItem('__Remo__')
      if (this.connect || previousConnect === 'Jst7egxcvzaT87o93ds0od_dsewD712Essad13m_sqwesdVueMdsd2Evvdcq2nsdPsa1wsc') {
        this.$router.push('/component/remo-about')
      } else {
        this.$refs.connect_msg.show = true
        this.connectionShow = true
      }
    },
    checkConnect () {
      console.log(this.connect)
    },
    ...mapMutations({
      // 组件中使用改变local的方法
      changeConnection: 'SET_CONNECT'
    }),
    ValidateEmail(email) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        return (true)
      }
        return (false)
    },
    connectionSend () {
      if(this.name === null || this.email === null) {
        // 为空
        this.$refs.connect_fail_validate1.show = true
        return null
      }
      const emailVaidate = this.ValidateEmail(this.email)
      if(!emailVaidate) {
        // Email不通过
        this.$refs.connect_fail_validate2.show = true
        return null
      }
      // // console.log(this.$refs)

      // 值转换到真实form上
      this.$refs.formSubmitName.value  = this.name
      this.$refs.formSubmitEmail.value  = this.email
      this.$refs.formSubmitHeardForm.value  = this.heardFrom
      this.$refs.formSubmitMsg.value  = this.message
      this.$refs.formSubmitBtn.click()

      // 成功提示
      this.$refs.connect_success_msg.show = true
      // 切换全局状态 设置local
      window.localStorage.setItem('__Remo__', 'Jst7egxcvzaT87o93ds0od_dsewD712Essad13m_sqwesdVueMdsd2Evvdcq2nsdPsa1wsc')
      this.changeConnection(true)
      // 隐藏表格
      this.connectionShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin {100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

@-moz-keyframes jump { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes jump { 100% { -webkit-transform: rotate(360deg); } }
@keyframes jump {
  0% {-webkit-transform: translateY(0px); transform:translateY(0px); }
  50% { -webkit-transform: translateY(-30px); transform:translateY(-30px);}
  100% {-webkit-transform: translateY(0px); transform:translateY(0px);}

}

.index{
  // background: linear-gradient(to right top, #364f6a, #409eff );
  height: 100vh;
  width: 100%;
  background: linear-gradient(195.55deg, #AADBAC -16.04%, #2E8BF5 99.28%);
  position: relative;
  box-sizing: border-box;
  @media (max-width:1024px) {
    margin:  0 auto;
  }
  .content{
    .desc{
      position: absolute;
      width: 550px;
      top: 30%;
      left: 25%;
      transform: translateX(-35%) translateY(-30%);
      @media (max-width:1023px) {
        left: 35%
      }
      @media (max-width:767px) {
        width: 450px;
      }
      @media (max-width:550px) {
        width: 300px;
        top: 30%;
      }
      h5{
        margin: 8px 0;
        font-weight: 600;
        font-size: 68px;
        line-height: 76px;
        letter-spacing: 0;
        margin-left: -4px;
        color: rgba(0, 0, 0, 0.85);
        color:#fff;
        // font-family: 'skia';
        @media (max-width:1280px) {
          font-size: 58px;
        }
        @media (max-width:767px) {
          font-size: 48px;
          line-height: 46px;
        }
        @media (max-width:550px) {
          font-size: 38px;
          line-height: 31px;
        }
        .ele{
          position: absolute;
          width: 20px;
          height: 70px;
          // transform: rotate(45deg)
          -webkit-animation:jump 2.5s infinite;
          -moz-animation:jump 2.5s  infinite;
          animation:jump 2.5s infinite;
        }
      }
      p{
        // color: #314659;
        color:rgb(245, 245, 245);
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 1px;
        //  font-family: 'skia';
        margin-top: 0;
        @media (max-width:1280px) {
          font-size: 20px;
        }
        @media (max-width:767px) {
          font-size: 17px;
        }
        @media (max-width:550px) {
          width: 200px;
          font-size: 15px;
          line-height: 30px;
        }
      }
      .btn_start{
        padding:10px 20px;
        text-align: center;
        height: 45px;
        font-size: 16px;
        // line-height: 45px;
        background: #2E8BF5;
        border: #2E8BF5;
        font-weight: 600;
        margin-right: 15px;
        @media (max-width:1280px) {
          padding:8px 12px;
          font-size: 14px;
        }
        @media (max-width:767px) {
          padding:4px 8px;
          font-size: 13px;
          height: 40px;
        }
        @media (max-width:550px) {
          padding:2px 8px;
          font-size: 13px;
          height: 35px;
        }
        &:hover {
          background: #3292ff;
          border: #3292ff;
        }
      }
      .btn_about{
        padding:10px 20px;
        text-align: center;
        height: 45px;
        font-size: 15px;
        // line-height: 5px;
        background: #fff;
        color: #2E8BF5;
        border: #2E8BF5;
        font-weight: 600;
        margin-right: 15px;
        cursor: pointer;
        @media (max-width:1280px) {
          padding:8px 12px;
          font-size: 14px;
        }
        @media (max-width:767px) {
          padding:4px 8px;
          font-size: 13px;
          height: 40px;
        }
        @media (max-width:550px) {
          padding:2px 8px;
          font-size: 13px;
          height: 35px;
        }
      }
      .btn_github{
          padding:10px 20px;
          text-align: center;
          height: 45px;
          font-size: 15px;
          font-weight: 600;
          background: rgb(41, 41, 41);
          border: rgb(41, 41, 41);
          color: #fff;
          cursor: pointer;
        @media (max-width:1280px) {
          padding: 10px 11px;
          font-size: 14px;
        }
        @media (max-width:767px) {
          padding:4px 8px;
          font-size: 13px;
          height: 40px;
        }
        @media (max-width:550px) {
          padding:2px 8px;
          font-size: 13px;
          height: 35px;
        }
      }
      // .btn_github-mobile{
      //   display: none;
      //   @media (max-width:550px) {
      //     display: inline-block;
      //     padding:2px 8px;
      //     text-align: center;
      //     height: 35px;
      //     font-size: 15px;
      //     font-weight: 600;
      //     background: rgb(41, 41, 41);
      //     border: rgb(41, 41, 41);
      //     color: #fff;
      //     cursor: pointer;
      //   }
      // }
    }
    .bg_img{
      position: absolute;
      // width: 550px;
      top: 50%;
      right: 25%;
      transform: translateX(45%) translateY(-50%);
      z-index: 3;
      @media (max-width:1280px) {
        top: 70%;
        right: 22%;
      }
      @media (max-width:1023px) {
        right: 30%;
      }
      @media (max-width:550px) {
        right: 35%;
      }
      .big{
        width: 550px;
        z-index: 2;
        @media (max-width:1280px) {
          width: 450px;
        }
        @media (max-width:1023px) {
          width: 350px;
        }
        @media (max-width:767px) {
          width: 300px;
        }
        @media (max-width:550px) {
          width: 250px;
        }
      }
      .gear_1{
        position: absolute;
        bottom:78px;
        right:30px;
        z-index: -1;
        -webkit-animation:spin 3s linear infinite;
        -moz-animation:spin 3s linear infinite;
        animation:spin 3s linear infinite;
      }
      .gear_2{
        position: absolute;
        top:95px;
        left:25px;
        width: 80px;
        z-index: -1;
        -webkit-animation:spin 3s linear infinite;
        -moz-animation:spin 3s linear infinite;
        animation:spin 3s linear infinite;
        @media (max-width:1280px) {
          // width: 450px;
        }
        @media (max-width:1023px) {
          // width: 350px;
        }
        @media (max-width:767px) {
          // width: 300px;
        }
        @media (max-width:550px) {
          width: 40px;
          top:35px;
          left:15px;
        }
      }
      .gear_3{
        position: absolute;
        top:0px;
        left:78px;
        width: 120px;
        z-index: -1;
        -webkit-animation:spin 6s linear infinite;
        -moz-animation:spin 6s linear infinite;
        animation:spin 6s linear infinite;
      }
    }
  }
  .bg_left1{
      position: absolute;
      bottom:0;
      width: 484.02px;
      height: 178px;
      left: 0;
      @media (max-width:1280px) {
        width: 404.02px;
        height: 138px;
      }
      @media (max-width:550px) {
        width: 204.02px;
        height: 88px;
      }
  }
  .bg_left2{
      position: absolute;
      bottom:0;
      width: 209.1px;
      height: 123px;
      left: 0;
      @media (max-width:1280px) {
        width: 150.1px;
        height: 110px;
      }
      @media (max-width:550px) {
        width: 100.1px;
        height: 50px;
      }
  }
  .bg_right1{
      position: absolute;
      right: 0;
      top:0;
      width:666.21px;
      height:394.49px;
      @media (max-width:1280px) {
        width: 500.1px;
        height: 294px;
      }
      @media (max-width:550px) {
        width: 200.1px;
        height: 194px;
      }
  }
  .bg_right2{
      position: absolute;
      right: 0;
      top:0;
      width:287.8px;
      height:170px;
      @media (max-width:1280px) {
        width: 207.1px;
        height: 120px;
      }
      @media (max-width:550px) {
        width: 120.1px;
        height: 70px;
      }
  }
  .status_1{
    position: absolute;
    left: 150px;
    top: 250px;
    z-index: 2;
  }
  .header {
    // 不会被覆盖属于置顶
    z-index: 100;
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 80px;
    line-height: 80px;  // 字体居中
    background: #fff;
    box-shadow: 1px 1px 1px 1px #ebebeb;
    .container{ //里面的容器
        height: 100%; // 撑开
        width: 1140px;
        margin: 0 auto;
        padding: 0 10px;
        display: flex;
        @media (max-width: 1160px) {
              padding: 0 15px;
        }
        // border-bottom: 1px solid #dcdfe6; // 分界线
        .title{
          font-size: 40px;
          font-weight: 700;
          color:#409eff;
          font-family: 'skia';
          cursor: default;
          .logo-left{
            color: #364f6a;
            // color:#409eff;
          }
          &:hover{
            color: #364f6a;
            .logo-left{
              color: #409eff;
            }
            i{
              color:#409eff;
            }
          }
          img{
            width: 145px;
            margin-top: 13px;
          }
          i{
            font-size: 24px;
            color: #666;
            font-weight: 500;
          }
        }
        .header-nav{
          flex:1;
          margin-right: -135px;
          ul{
            float: right;
            visibility: visible; // 始终显示列表
            list-style: none;
            display: flex;
            padding: 0;
            margin: 0;
            .header-nav-item{
              padding: 0 15px;
              height: 80px;
              transition: 0.5s;
              line-height: 80px;
              // &:hover{
              //   transform: scale(1.05);
              // }
              i{
                font-size: 22px;
                margin-right: 4px;
              }
              a{
                text-decoration: none;
                color: #555;
                font-size: 16px;
                font-weight: 450;
              }
            }
          }
        }
    }
  }
  .btn_connect{
    top: -500px;
    position: absolute;
  }
  .chat_container{
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    .chat_top{
      width: 100%;
      .message_container_1{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .input{
          width: 100%;
          margin: 0 10px;
        }
        // .avatar{
        //   width: 50px;
        //   height: 50px;
        //   background: #ececec;
        //   border-radius: 50%;
        //   margin-right: 20px;
        // }
        // .message{
        //   flex: 1;
        //   height: 30px;
        //   background: #ececec;
        // }
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
        width: 100%;
        margin: 0;
        // margin-left: 10px;
        font-size: 16px;
        background: #409eff;
        color: #fff;
        border-color: #409eff;
      }
    }
  }
  .realForm{
    display: none;
  }
  .sendFrame{
    display: none;
  }
}
</style>
