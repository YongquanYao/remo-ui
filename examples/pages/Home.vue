<template>
    <div class="home">
        <re-backtop></re-backtop>
        <div class="header">
            <div class="container">
                <span class="title" @click="jumpIndex">
                  <!-- <img src="../assets/logo.png" alt="remo-logo"> -->
                  <span class="logo-left">Re:</span>mo
                  <!-- <i class="remoi remo-slack"/> -->
                </span>
                <div class="header-nav">
                  <ul>
                    <li class="header-nav-item" v-for="x in headnav_data" :key="x.id">
                      <template v-if="x.id === 989">
                        <i :class="x.icon" :style="{color: x.color}"></i>
                        <span><b><a :href="x.path">1.0.6</a></b></span>
                      </template>
                      <template v-if="x.id === 990">
                        <i :class="x.icon" :style="{color: x.color}" @click="handleLocaleChange()"></i>
                      </template>
                      <template v-if="x.id === 991">
                        <i :class="x.icon" :style="{color: x.color}" @click="handleNavJump(x.path)"></i>
                        <a :href="x.path">{{x.name}}</a>
                      </template>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="sidebar">
                <ul  v-if="this.locale === 'cn'">
                    <li class="nav-item" :key="x.title" v-for="x in sidebar_data">
                    <!-- <li class="nav-item" v-else :key="x.title" v-for="x in sidebar_data_en"> -->
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
                <ul  v-if="this.locale === 'en'">
                    <li class="nav-item" :key="x.title" v-for="x in sidebar_data_en">
                    <!-- <li class="nav-item" v-else :key="x.title" v-for="x in sidebar_data_en"> -->
                        <a>{{x.title}}</a>
                        <ul class="remo-menu-list remo-menu-list_en" v-if="x.child_data.length !== 0">
                            <li class="nav-item" :key="y.title" v-for="y in x.child_data">
                              <div class="nav-group-title nav-group-title_en" v-if="y.group">{{y.group}}</div>
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
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      active: '1',
      headnav_data: [
        {
          id: 989,
          icon: 'remoi remo-tags',
          color: '#364f6a',
          path: 'https://www.npmjs.com/package/remo-ui?activeTab=versions'
        },
        {
          id: 990,
          icon: 'remoi remo-translate',
          color: '#364f6a'
        },
        {
          id: 991,
          path: 'https://github.com/YongquanYao/remo-ui',
          // name: 'Github',
          icon: 'remoi remo-github-fill',
          color: '#364f6a'
        }
        // {
        //   id: 991,
        //   path: 'https://github.com/YongquanYao/remo-ui',
        //   name: 'Wechat',
        //   icon: 'remoi remo-wechat-fill',
        //   color: '#7BB32E'
        // }
      ],
      sidebar_data: [
        {
          title: '开发指南',
          child_data: [
            {
              title: '安装/快速上手',
              id: '1',
              path: '#/component/remo-installation'
            },
            {
              title: 'Icon 图标',
              id: '2',
              path: '#/component/remo-icon'
            },
            {
              title: 'About 关于',
              id: '3',
              path: '#/component/remo-about'
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
              title: 'Switch 开关',
              path: '#/component/remo-switch',
              id: '002'
            },
            {
              title: 'Checkbox 选择器',
              path: '#/component/remo-checkbox',
              id: '003'
            },
            {
              title: 'Shadow Block 阴影模块',
              path: '#/component/remo-shadow-block',
              id: '006'
            },
            {
              title: 'Tip 提示',
              path: '#/component/remo-tip',
              id: '007'
            },
            {
              title: 'Divider 分割线',
              path: '#/component/remo-divider',
              id: '008'
            },
            {
              title: 'Menu 菜单',
              path: '#/component/remo-menu',
              id: '009'
            },
            {
              title: 'Drawer 抽屉',
              path: '#/component/remo-drawer',
              id: '010'
            },
            {
              title: 'Message 消息',
              path: '#/component/remo-message',
              id: '004'
            },
            {
              group: '数据录入',
              title: 'Input 输入框',
              path: '#/component/remo-input',
              id: '011'
            },
            {
              title: 'Upload Image 图片上传',
              path: '#/component/remo-upload-img',
              id: '012'
            },
            {
              title: 'Upload 文件上传',
              path: '#/component/remo-upload',
              id: '013'
            },
            {
              group: '数据展示',
              title: 'Statistic 统计数值',
              path: '#/component/remo-statistic',
              id: '020'
            },
            {
              title: 'Image Card 图卡',
              path: '#/component/remo-imgcard',
              id: '021'
            },
            {
              group: '其他',
              title: 'Backtop 回到顶部',
              path: '#/component/remo-backtop',
              id: '030'
            },
            {
              title: 'Loading 加载条',
              path: '#/component/remo-loadingbar',
              id: '036'
            },
            {
              title: 'FooterBar 底部工具栏',
              path: '#/component/remo-footerbar',
              id: '031'
            },
            {
              title: 'StatusLight 状态标志',
              path: '#/component/remo-statuslight',
              id: '032'
            },
            {
              title: 'Collapse 折叠盒子',
              path: '#/component/remo-collapse',
              id: '033'
            },
            {
              title: 'Dragger 拖拽弹窗',
              path: '#/component/remo-dragger',
              id: '034'
            },
            {
              title: 'Clipboard 复制',
              path: '#/component/remo-clipboard',
              id: '035'
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
      ],
      sidebar_data_en: [
        {
          title: 'Guide',
          child_data: [
            {
              title: 'Installation / Quick Start',
              id: '1',
              path: '#/component/remo-installation'
            },
            {
              title: 'Icon',
              id: '2',
              path: '#/component/remo-icon'
            },
            {
              title: 'What is Remo?',
              id: '3',
              path: '#/component/remo-about'
            }
          ]
        },
        {
          title: 'Components',
          child_data: [
            {
              group: 'General',
              title: 'Button',
              path: '#/component/remo-button',
              id: '001'
            },
            {
              title: 'Switch',
              path: '#/component/remo-switch',
              id: '002'
            },
            {
              title: 'Checkbox',
              path: '#/component/remo-checkbox',
              id: '003'
            },
            {
              title: 'Shadow Block',
              path: '#/component/remo-shadow-block',
              id: '006'
            },
            {
              title: 'Tip',
              path: '#/component/remo-tip',
              id: '007'
            },
            {
              title: 'Divider',
              path: '#/component/remo-divider',
              id: '008'
            },
            {
              title: 'Menu',
              path: '#/component/remo-menu',
              id: '009'
            },
            {
              title: 'Drawer',
              path: '#/component/remo-drawer',
              id: '010'
            },
            {
              title: 'Message',
              path: '#/component/remo-message',
              id: '004'
            },
            {
              group: 'Data Entry',
              title: 'Input',
              path: '#/component/remo-input',
              id: '011'
            },
            {
              title: 'Upload Image',
              path: '#/component/remo-upload-img',
              id: '012'
            },
            {
              title: 'Upload',
              path: '#/component/remo-upload',
              id: '013'
            },
            {
              group: 'Data Display',
              title: 'Statistic',
              path: '#/component/remo-statistic',
              id: '020'
            },
            {
              title: 'Image Card',
              path: '#/component/remo-imgcard',
              id: '021'
            },
            {
              group: 'Others',
              title: 'Backtop',
              path: '#/component/remo-backtop',
              id: '030'
            },
            {
              title: 'Loading Bar',
              path: '#/component/remo-loadingbar',
              id: '036'
            },
            {
              title: 'Footer Bar',
              path: '#/component/remo-footerbar',
              id: '031'
            },
            {
              title: 'StatusLight',
              path: '#/component/remo-statuslight',
              id: '032'
            },
            {
              title: 'Collapse',
              path: '#/component/remo-collapse',
              id: '033'
            },
            {
              title: 'Dragger',
              path: '#/component/remo-dragger',
              id: '034'
            },
            {
              title: 'Clipboard',
              path: '#/component/remo-clipboard',
              id: '035'
            }
          ]
        },
        {
          title: 'PlugIns',
          child_data: [
            {
              title: 'Developing...'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      locale: 'locale'
    })
  },
  mounted () {
    console.log(this.locale)
    // 保证刷新导航匹配到刷新前的位置
    const hash = window.location.hash
    // console.log(hash)
    let id = '1'
    for (const i of this.sidebar_data) {
      for (const q of i.child_data) {
        if (q.path === hash) {
          id = q.id
        }
      }
    }
    // console.log(id)
    this.active = id
  },
  methods: {
    ...mapMutations({
      // 组件中使用改变local的方法
      changeLocale: 'SET_LOCALE'
    }),
    jumpIndex () {
      this.$router.push('/')
    },
    handleLocaleChange () {
      const newLocale = this.locale === 'cn' ? 'en' : 'cn'
      this.changeLocale(newLocale)
      // 等同于commit能调用mutation的
      // this.$store.commit('SET_LOCALE', newLocale)
      console.log(this.locale)
    },
    handleNavJump (link) {
      window.open(link)
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
        height: 65px;
        line-height: 65px;  // 字体居中
        background: #fff;
        box-shadow: 1px 1px 5px 1px #ebebeb;
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
              cursor: pointer;
              .logo-left{
                color: #364f6a;
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
                  height: 65px;
                  transition: 0.5s;
                  line-height: 65px;
                  span{
                    font-family: 600;
                    font-size: 15px;
                    color: #409eff;
                  }
                  i{
                    font-size: 24px;
                    margin-right: 4px;
                    cursor: pointer;
                  }
                  a{
                    text-decoration: none;
                    color: #555;
                    font-size: 15px;
                    font-weight: 450;
                  }
                }
              }
            }
        }
    }
    .main{
        position: relative;
        width: 1140px;
        height: -webkit-calc(100%-65px);
        height: -moz-calc(100%-65px);
        height: calc(100%-65px);
        margin: 0 auto;
        padding: 10px 0;
        top: 80px;
        display: flex;
        .sidebar{
            position: fixed;
            margin-right: 40px;
            width: 200px;
            height: 80%;
            top: 100px;
            // visibility: hidden; // 鼠标在才触发滚动条
            border-right: 1px solid #dcdfe6; // 分界线
            overflow: hidden;
            // padding-left: 10px;
            @media (max-width: 1160px) {
              padding-left: 20px;
            }
            &:hover{
                visibility: visible; // 鼠标在才触发滚动条
                border-right: 1px solid #dcdfe6; // 分界线
                overflow: auto;
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
              .nav-group-title_en{
                font-size: 14px;
              }
            }
            .remo-menu-list{
              padding: 0;
              a{
                display: block;
                height: 38px;
                line-height: 38px;
                color: #555;
                font-size: 14px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-weight: 500;
                cursor: pointer;
                margin: 1px 0;
                &:hover{
                  color:#409eff;
                  border-left: 3px solid #409eff;
                  padding-left: 8px;
                }
              }
              .active{
                color:#409eff;
                border-left: 3px solid #409eff;
                padding-left: 8px;
              }
            }
            .remo-menu-list_en{
               a{
                 font-size: 15px;
               }
            }
        }
        .content {
            flex: 1;
            width: 100%;
            padding: 0px 50px 50px 10px;
            margin-left: 240px;
        }
    }
}
</style>
