<template>
    <div class="home">
        <div class="header">
            <div class="container">
                <span class="title">Remo UI</span>
            </div>
        </div>
        <div class="main">
            <div class="sidebar">
                <ul>
                    <li class="nav-item" :key="x.title" v-for="x in sidebar_data">
                        <a>{{x.title}}</a>
                        <ul class="remo-menu-list" v-if="x.child_data.length !== 0">
                            <li class="nav-item" :key="y.title" v-for="y in x.child_data">
                              <div class="nav-group-title" v-if="y.group">{{y.group}}</div>
                              <!-- 这里涉及active 和 inactive的选项 -->
                              <a
                                :class="{'active': active == y.id}"
                                @click="active=y.id"
                                :href="y.path"
                              >
                                {{y.title}}
                              </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      active: '1',
      sidebar_data: [
        {
          title: '开发指南',
          child_data: [
            {
              title: '安装/快速上手',
              id: '1',
              path: '/'
            },
            {
              title: 'Icon 图标',
              id: '2'
            },
            {
              title: 'About 关于',
              id: '3'
            }
          ]
        },
        {
          title: '组件',
          child_data: [
            {
              group: '通用',
              title: 'Button 按钮',
              path: '#/component/remo-button',
              id: '001'
            },
            {
              title: 'Shadow Block 阴影模块',
              id: '002'
            },
            {
              group: '数据录入',
              title: 'Input 输入框',
              id: '003'
            },
            {
              title: 'Upload 上传',
              id: '004'
            }
          ]
        },   
        {
          title: '实用插件',
          child_data: [
            {
              title: '开发ing...'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
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
        .container{ //里面的容器
            height: 100%; // 撑开
            width: 1140px;
            margin: 0 auto;
            padding: 0 10px;
            border-bottom: 1px solid #dcdfe6; // 分界线
            .title{
              font-size: 25px;
              font-weight: 600;
            }
        }
    }
    .main{
        position: relative;
        width: 1140px;
        height: -webkit-calc(100%-80px);
        height: -moz-calc(100%-80px);
        height: calc(100%-80px);
        margin: 0 auto;
        padding: 10px 0;
        top: 80px;
        display: flex;
        .sidebar{
            position: fixed;
            margin-right: 40px;
            width: 200px;
            height: 80%;
            top: 135px;
            // visibility: hidden; // 鼠标在才触发滚动条
            border-right: 1px solid #dcdfe6; // 分界线
            overflow: auto;
            &:hover{
                visibility: visible; // 鼠标在才触发滚动条
                border-right: 1px solid #dcdfe6; // 分界线
            }
            > ul{
                visibility: visible; // 始终显示列表
                padding: 0;
            }
            .nav-item{
              list-style: none;
              a{
                font-size: 16px;
                color: #333;
                line-height: 40px;
                height: 40px;
                margin: 0;
                padding: 0;
                text-decoration: none;
                display: block;
                position: relative;
                //active点击时变颜色
                transition: 0.15s ease-out;
                font-weight: 700;
                cursor: unset;
              }
              .nav-group-title{
                font-size: 12px;
                color: #999;
                line-height: 26px;
                margin-top: 15px;
                font-weight: 400;
              }
            }
            .remo-menu-list{
              padding: 0;
              a{
                display: block;
                height: 40px;
                line-height: 40px;
                color: #555;
                font-size: 14px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-weight: 500;
                cursor: pointer;
                &:hover{
                  color:#409eff
                }
              }
              .active{
                  color:#409eff
              }
            }
        }
        .content {
            flex: 1;
            width: 100%;
            padding: 10px 50px 0 10px;
            margin-left: 240px;
        }
    }
}
</style>
