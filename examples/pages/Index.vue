<template>
  <div class="index">
     <div class="header">
            <div class="container">
                <span class="title">
                  <!-- <img src="../assets/logo.png" alt="remo-logo"> -->
                  <span class="logo-left">Re:</span>mo
                  <!-- <i class="remoi remo-slack"/> -->
                  </span>
                <div class="header-nav">
                  <ul>
                    <li class="header-nav-item" v-for="x in headnav_data" :key="x.id">
                        <i :class="x.icon" :style="{color: x.color}"></i>
                        <a :href="x.path">{{x.name}}</a>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
      <div class="content">
        <div class="desc">
            <h5 class="title">Remo UI</h5>
            <p>一款为Vue.js@2.0量身定做的轻量级霓裳套装</p>
            <re-button type="primary" class="btn_start" @click="jumpComponent">开始使用
            </re-button>
        </div>
        <img class="bg_img" src="../assets/index_bg.png" alt=""/>
        <!-- <img alt=""/> -->
      </div>
      <img class="bg_left1" src="../assets/left_top1.png" alt="" />
      <img class="bg_left2" src="../assets/left_top2.png" alt="" />
      <img class="bg_right1" src="../assets/right_1.png" alt=""/>
      <img class="bg_right2" src="../assets/right_2.png" alt="" />
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    jumpComponent () {
      window.location.replace('/#/component')
    }
  }
}
</script>

<style lang="scss" scoped>
.index{
  // background: linear-gradient(to right top, #364f6a, #409eff );
  height: 100vh;
  width: 100%;
  background: linear-gradient(195.55deg, #AADBAC -16.04%, #2E8BF5 99.28%);
  position: relative;
  .content{
    padding-top: 200px;
    .desc{
      margin-left: 150px;
      h5{
        margin: 8px 0 28px;
        font-weight: 600;
        font-size: 68px;
        line-height: 76px;
        letter-spacing: 0;
        color: rgba(0, 0, 0, 0.85);
        color:#fff;
        // font-family: 'skia';
      }
      p{
        // color: #314659;
        color:rgb(245, 245, 245);
        font-size: 20px;
        line-height: 40px;
         font-family: 'skia';
      }
      .btn_start{
          padding:10px 20px;
          text-align: center;
          height: 45px;
          font-size: 16px;
          line-height: 5px;
          background: #2E8BF5;
          border: #2E8BF5;
        }
    }
    .bg_img{
      position: absolute;
      width: 550px;
      bottom: 150px;
      right: 100px;
      z-index: 10;
    }
  }
  .bg_left1{
      position: absolute;
      bottom:0;
      width: 484.02px;
      height: 178px;
      left: 0;
  }
  .bg_left2{
      position: absolute;
      bottom:0;
      width: 209.1px;
      height: 123px;
      left: 0;
  }
  .bg_right1{
      position: absolute;
      right: 0;
      top:0;
      width:666.21px;
      height:394.49px;
  }
  .bg_right2{
      position: absolute;
      right: 0;
      top:0;
      width:287.8px;
      height:170px;
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
}
</style>
