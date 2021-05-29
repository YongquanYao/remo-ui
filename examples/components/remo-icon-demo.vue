<template>
  <div>
    <div v-if="this.locale === 'cn'" >
      <demo-block title="Remo Icon图标" desc="语义化的矢量图形" type="normal">
           <re-tip class="tip" color="blue"><span>该图标参考使用 Ant Design 官方图标库, 筛选了部分实用图标。在此感谢Ant Design的设计团队 !</span><br/>
            <!-- <a @click="handlejump">https://ant.design/components/icon/</a> -->
           </re-tip>
      </demo-block>
      <demo-block title="使用方法" height="295" desc="直接通过设置类class名为 remoi remo-xxxx">
           <!-- <re-shadow-block height="80px" width="100%"> -->
            <i class="remoi remo-search demoIcon"></i>
            <i class="remoi remo-star demoIcon"></i>
            <i class="remoi remo-calendar demoIcon"></i>
            <i class="remoi remo-phone demoIcon"></i>
            <i class="remoi remo-edit demoIcon"></i>
            <i class="remoi remo-home demoIcon"></i>
            <i class="remoi remo-google demoIcon"></i>
            <i class="remoi remo-alipay demoIcon"></i>
            <i class="remoi remo-heart demoIcon"></i>
            <i class="remoi remo-apartment demoIcon"></i>
            <i class="remoi remo-areachart demoIcon"></i>
            <i class="remoi remo-camera demoIcon"></i>
            <!-- </re-shadow-block> -->
            <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block title="常用图标" type="normal">
        <ul class="remo-list">
          <li v-for="(item,index) in iconList" :key="index">
              <div>
                 <i class="remoi" :class="item"></i>
                 <p>{{item}}</p>
              </div>
          </li>
        </ul>
      </demo-block>
    </div>
    <div v-if="this.locale === 'en'" >
      <demo-block title="Remo Icon" desc="Semantic vector graphics (SVG)" type="normal">
           <re-tip class="tip" color="blue"><span>Remo Icons refer to the official Ant Design Icon library, Which I select part of commonly used icons, Thanks to the Ant Design!</span><br/>
            <!-- <a @click="handlejump">https://ant.design/components/icon/</a> -->
           </re-tip>
      </demo-block>
      <demo-block title="Usage" height="295" desc="By setting the class name with remoi remo-xxxx">
            <i class="remoi remo-search demoIcon"></i>
            <i class="remoi remo-star demoIcon"></i>
            <i class="remoi remo-calendar demoIcon"></i>
            <i class="remoi remo-phone demoIcon"></i>
            <i class="remoi remo-edit demoIcon"></i>
            <i class="remoi remo-home demoIcon"></i>
            <i class="remoi remo-google demoIcon"></i>
            <i class="remoi remo-alipay demoIcon"></i>
            <i class="remoi remo-heart demoIcon"></i>
            <i class="remoi remo-apartment demoIcon"></i>
            <i class="remoi remo-areachart demoIcon"></i>
            <i class="remoi remo-camera demoIcon"></i>
            <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block title="Icon Library" type="normal">
        <ul class="remo-list">
          <li v-for="(item,index) in iconList" :key="index">
              <div>
                 <i class="remoi" :class="item"></i>
                 <p>{{item}}</p>
              </div>
          </li>
        </ul>
      </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoIconDemo',
  components: {
    demoBlock
  },
  props: {

  },
  data () {
    return {
      simple: {
        code: {
          html:
            `
            <template>
              <i class="remoi remo-search demoIcon"></i>
              <i class="remoi remo-star demoIcon"></i>
              <i class="remoi remo-calendar demoIcon"></i>
              <i class="remoi remo-phone demoIcon"></i>
              <i class="remoi remo-edit demoIcon"></i>
              <i class="remoi remo-home demoIcon"></i>
              <i class="remoi remo-google demoIcon"></i>
              <i class="remoi remo-alipay demoIcon"></i>
              <i class="remoi remo-heart demoIcon"></i>
              <i class="remoi remo-apartment demoIcon"></i>
              <i class="remoi remo-areachart demoIcon"></i>
              <i class="remoi remo-camera demoIcon"></i>
            </template>
            `
        }
      },
      iconList: [
        'remo-check-circle',
        'remo-CI',
        'remo-Dollar',
        'remo-compass',
        'remo-close-circle',
        'remo-frown',
        'remo-info-circle',
        'remo-left-circle',
        'remo-down-circle',
        'remo-EURO',
        'remo-copyright',
        'remo-minus-circle',
        'remo-meh',
        'remo-plus-circle',
        'remo-play-circle',
        'remo-question-circle',
        'remo-Pound',
        'remo-right-circle',
        'remo-smile',
        'remo-trademark',
        'remo-time-circle',
        'remo-timeout',
        'remo-earth',
        'remo-YUAN',
        'remo-up-circle',
        'remo-warning-circle',
        'remo-sync',
        'remo-transaction',
        'remo-undo',
        'remo-redo',
        'remo-reload',
        'remo-reloadtime',
        'remo-message',
        'remo-dashboard',
        'remo-issuesclose',
        'remo-poweroff',
        'remo-logout',
        'remo-piechart',
        'remo-setting',
        'remo-eye',
        'remo-location',
        'remo-edit-square',
        'remo-export',
        'remo-save',
        'remo-Import',
        'remo-appstore',
        'remo-close-square',
        'remo-down-square',
        'remo-layout',
        'remo-left-square',
        'remo-play-square',
        'remo-control',
        'remo-codelibrary',
        'remo-detail',
        'remo-minus-square',
        'remo-plus-square',
        'remo-right-square',
        'remo-project',
        'remo-wallet',
        'remo-up-square',
        'remo-calculator',
        'remo-interation',
        'remo-check-square',
        'remo-border',
        'remo-border-outer',
        'remo-border-top',
        'remo-border-bottom',
        'remo-border-left',
        'remo-border-right',
        'remo-border-inner',
        'remo-border-verticle',
        'remo-border-horizontal',
        'remo-radius-bottomleft',
        'remo-radius-bottomright',
        'remo-radius-upleft',
        'remo-radius-upright',
        'remo-radius-setting',
        'remo-adduser',
        'remo-deleteteam',
        'remo-deleteuser',
        'remo-addteam',
        'remo-user',
        'remo-team',
        'remo-areachart',
        'remo-linechart',
        'remo-barchart',
        'remo-pointmap',
        'remo-container',
        'remo-database',
        'remo-sever',
        'remo-mobile',
        'remo-tablet',
        'remo-redenvelope',
        'remo-book',
        'remo-filedone',
        'remo-reconciliation',
        'remo-file-exception',
        'remo-filesync',
        'remo-filesearch',
        'remo-solution',
        'remo-fileprotect',
        'remo-file-add',
        'remo-file-excel',
        'remo-file-exclamation',
        'remo-file-pdf',
        'remo-file-image',
        'remo-file-markdown',
        'remo-file-unknown',
        'remo-file-ppt',
        'remo-file-word',
        'remo-file',
        'remo-file-zip',
        'remo-file-text',
        'remo-file-copy',
        'remo-snippets',
        'remo-audit',
        'remo-diff',
        'remo-Batchfolding',
        'remo-securityscan',
        'remo-propertysafety',
        'remo-safetycertificate',
        'remo-insurance',
        'remo-alert',
        'remo-delete',
        'remo-hourglass',
        'remo-bulb',
        'remo-experiment',
        'remo-bell',
        'remo-trophy',
        'remo-rest',
        'remo-USB',
        'remo-skin',
        'remo-home',
        'remo-bank',
        'remo-filter',
        'remo-funnelplot',
        'remo-like',
        'remo-unlike',
        'remo-unlock',
        'remo-lock',
        'remo-customerservice',
        'remo-flag',
        'remo-moneycollect',
        'remo-medicinebox',
        'remo-shop',
        'remo-rocket',
        'remo-shopping',
        'remo-folder',
        'remo-folder-open',
        'remo-folder-add',
        'remo-deploymentunit',
        'remo-accountbook',
        'remo-contacts',
        'remo-carryout',
        'remo-calendar-check',
        'remo-calendar',
        'remo-scan',
        'remo-select',
        'remo-boxplot',
        'remo-build',
        'remo-sliders',
        'remo-laptop',
        'remo-barcode',
        'remo-camera',
        'remo-cluster',
        'remo-gateway',
        'remo-car',
        'remo-printer',
        'remo-read',
        'remo-cloud-server',
        'remo-cloud-upload',
        'remo-cloud',
        'remo-cloud-download',
        'remo-cloud-sync',
        'remo-video',
        'remo-notification',
        'remo-sound',
        'remo-radarchart',
        'remo-qrcode',
        'remo-fund',
        'remo-image',
        'remo-mail',
        'remo-table',
        'remo-idcard',
        'remo-creditcard',
        'remo-heart',
        'remo-block',
        'remo-error',
        'remo-star',
        'remo-gold',
        'remo-heatmap',
        'remo-wifi',
        'remo-attachment',
        'remo-edit',
        'remo-key',
        'remo-api',
        'remo-disconnect',
        'remo-highlight',
        'remo-monitor',
        'remo-link',
        'remo-man',
        'remo-percentage',
        'remo-pushpin',
        'remo-phone',
        'remo-shake',
        'remo-tag',
        'remo-wrench',
        'remo-tags',
        'remo-scissor',
        'remo-mr',
        'remo-share',
        'remo-branches',
        'remo-fork',
        'remo-shrink',
        'remo-arrawsalt',
        'remo-verticalright',
        'remo-verticalleft',
        'remo-right',
        'remo-left',
        'remo-up',
        'remo-down',
        'remo-fullscreen',
        'remo-fullscreen-exit',
        'remo-doubleleft',
        'remo-doubleright',
        'remo-arrowright',
        'remo-arrowup',
        'remo-arrowleft',
        'remo-arrowdown',
        'remo-upload',
        'remo-colum-height',
        'remo-vertical-align-botto',
        'remo-vertical-align-middl',
        'remo-totop',
        'remo-vertical-align-top',
        'remo-download',
        'remo-sort-descending',
        'remo-sort-ascending',
        'remo-fall',
        'remo-swap',
        'remo-stock',
        'remo-rise',
        'remo-indent',
        'remo-outdent',
        'remo-menu',
        'remo-unorderedlist',
        'remo-orderedlist',
        'remo-align-right',
        'remo-align-center',
        'remo-align-left',
        'remo-pic-center',
        'remo-pic-right',
        'remo-pic-left',
        'remo-bold',
        'remo-font-colors',
        'remo-exclaimination',
        'remo-font-size',
        'remo-infomation',
        'remo-line-height',
        'remo-strikethrough',
        'remo-underline',
        'remo-number',
        'remo-italic',
        'remo-code',
        'remo-column-width',
        'remo-check',
        'remo-ellipsis',
        'remo-dash',
        'remo-close',
        'remo-enter',
        'remo-line',
        'remo-minus',
        'remo-question',
        'remo-rollback',
        'remo-small-dash',
        'remo-pause',
        'remo-bg-colors',
        'remo-crown',
        'remo-drag',
        'remo-desktop',
        'remo-gift',
        'remo-stop',
        'remo-fire',
        'remo-thunderbolt',
        'remo-googleplus',
        'remo-medium',
        'remo-google',
        'remo-IE',
        'remo-amazon',
        'remo-slack',
        'remo-alipay',
        'remo-taobao',
        'remo-zhihu',
        'remo-HTML',
        'remo-linkedin',
        'remo-yahoo',
        'remo-facebook',
        'remo-skype',
        'remo-CodeSandbox',
        'remo-chrome',
        'remo-codepen',
        'remo-aliwangwang',
        'remo-apple',
        'remo-android',
        'remo-sketch',
        'remo-Gitlab',
        'remo-dribbble',
        'remo-instagram',
        'remo-reddit',
        'remo-windows',
        'remo-yuque',
        'remo-Youtube',
        'remo-Gitlab-fill',
        'remo-dropbox',
        'remo-dingtalk',
        'remo-android-fill',
        'remo-apple-fill',
        'remo-windows-fill',
        'remo-QQ',
        'remo-twitter',
        'remo-skype-fill',
        'remo-weibo',
        'remo-yuque-fill',
        'remo-Youtube-fill',
        'remo-yahoo-fill',
        'remo-wechat-fill',
        'remo-chrome-fill',
        'remo-alipay-circle-fill',
        'remo-github-fill',
        'remo-zoomout',
        'remo-apartment',
        'remo-audio',
        'remo-audio-fill',
        'remo-zoomin',
        'remo-comment',
        'remo-signal-fill',
        'remo-videocameraadd',
        'remo-switchuser',
        'remo-whatsapp',
        'remo-search',
        'remo-retweet',
        'remo-login',
        'remo-swap-right',
        'remo-swap-left',
        'remo-woman',
        'remo-plus',
        'remo-eyeclose-fill',
        'remo-eye-close',
        'remo-clear',
        'remo-collapse',
        'remo-expand',
        'remo-subnode',
        'remo-rotate-left',
        'remo-rotate-right',
        'remo-insertrowbelow',
        'remo-insertrowabove',
        'remo-table1',
        'remo-solit-cells',
        'remo-formatpainter',
        'remo-insertrowright',
        'remo-formatpainter-fill',
        'remo-insertrowleft',
        'remo-translate',
        'remo-deleterow',
        'remo-sisternode',
        'remo-Field-number',
        'remo-Field-String',
        'remo-Function',
        'remo-Field-time',
        'remo-GIF',
        'remo-Partition',
        'remo-index',
        'remo-Storedprocedure',
        'remo-Console-SQL',
        'remo-icon-test',
        'remo-aim',
        'remo-compress',
        'remo-expend',
        'remo-folder-view',
        'remo-file-GIF',
        'remo-group',
        'remo-send',
        'remo-Report',
        'remo-View',
        'remo-shortcut',
        'remo-ungroup'
      ]
    }
  },
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      locale: 'locale'
    })
  },
  methods: {
    handlejump () {
      window.open('https://ant.design/components/icon/')
    }
  }

}
</script>

<style lang="scss" scoped>
span{
  font-size: 14px;
  font-weight: 400;
}
a{
  text-decoration: none;
  color:#409EFF;
  cursor: pointer;
}
.demoIcon{
  font-size: 27px;
  padding: 0 9px;
}
.remo-list{
  list-style: none;
  padding: 0;
  margin: 0;
  li{
    width: 166px;
    display: flex;
    float: left;
    justify-content: center;
    text-align: center;
    height: 166px;
    color: #666;
    font-size: 13px;
    border: 1px solid #eee;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
    &:hover{
        background: #409EFF;
        i{
          color:#fff;
          font-size: 45px;
        }
        p{
          color:#fff;
          font-weight: 500;
          font-size: 14px;
        }
    }
    i{
      font-size: 34px;
    }
    p{
      margin: 15px;
      font-size: 14px;
      color: rgb(77, 88, 128);
    }
  }
}
</style>
