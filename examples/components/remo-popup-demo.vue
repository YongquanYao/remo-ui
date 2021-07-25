<template>
  <div>
      <div v-if="this.locale === 'cn'">
       <demo-block header="Popup 弹窗" />
       <demo-block title="图片广告" desc="可放图片超链接"  height="150">
          <re-button @click="popup_visible_1=true">打开广告弹窗</re-button>
          <re-popup :visible.sync="popup_visible_1">
            <template slot="img">
              <img src="@/assets/logo.png" alt="popup_show_img" @click="this.img_function">
            </template>
          </re-popup>
            <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
            </template>
       </demo-block>
       <demo-block title="自定义" desc="根据需求设计自己的弹窗" height="250">
          <re-button @click="popup_visible_2=true">打个个性化弹窗</re-button>
          <re-popup :visible.sync="popup_visible_2">
            <template slot="content">
              <div class="remo-diy-popup">
                  <span>Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.</span>
                  <re-divider></re-divider>
                  <span>React is an open-source, front end, JavaScript library for building user interfaces or UI components. I</span>
                  <re-divider></re-divider>
                  <span>Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations</span>
              </div>
            </template>
          </re-popup>
          <template slot="code">
            <code>{{fCode(diy.code.html)}}</code>
          </template>
       </demo-block>
       <demo-block title="API" desc="属性说明如下: " type="table">
         <re-table :data="tabledata" type="demo"></re-table>
       </demo-block>
       <demo-block title='Slot' type="table">
            <re-table :data="slotData_cn" type="en"></re-table>
       </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
       <demo-block header="Popup" />
       <demo-block title="Advertising Display" desc="Putting activly events or promotion" height="150">
          <re-button @click="popup_visible_1=true">Show advertising popup</re-button>
          <re-popup :visible.sync="popup_visible_1">
            <template slot="img">
              <img src="@/assets/logo.png" alt="popup_show_img" @click="this.img_function">
            </template>
          </re-popup>
          <template slot="code">
            <code>{{fCode(simple.code.html)}}</code>
          </template>
       </demo-block>
       <demo-block title="Customize" desc="Design your own popup according to the demand" height="250">
          <re-button @click="popup_visible_2=true">Show DIY popup</re-button>
          <re-popup :visible.sync="popup_visible_2">
            <template slot="content">
              <div class="remo-diy-popup">
                  <span>Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.</span>
                  <re-divider></re-divider>
                  <span>React is an open-source, front end, JavaScript library for building user interfaces or UI components. I</span>
                  <re-divider></re-divider>
                  <span>Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations</span>
              </div>
            </template>
          </re-popup>
          <template slot="code">
            <code>{{fCode(diy.code.html)}}</code>
          </template>
       </demo-block>
       <demo-block title="API" desc="The properties description are as follows: " type="table">
         <re-table :data="tabledata_en" type="en"></re-table>
       </demo-block>
       <demo-block title='Slot' type="table">
            <re-table :data="slotData_en" type="en"></re-table>
       </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RePopupDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      popup_visible_1: false,
      popup_visible_2: false,
      tabledata: [
        {
          parameter: 'visible',
          description: 'popup visiblity',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ],
      tabledata_en: [
        {
          parameter: 'visible',
          description: 'popup visiblity',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ],
      slotData_en: [
        {
          parameter: 'name',
          description: 'type of popup',
          dataTypes: 'String',
          optional: 'img / content',
          default: '-'
        }
      ],
      slotData_cn: [
        {
          parameter: 'name',
          description: '弹窗内容区类型',
          dataTypes: 'String',
          optional: 'img / content',
          default: '-'
        }
      ],
      simple: {
        code: {
          html: `
          <re-popup :visible.sync="popup_visible_1">
            <template slot="img">
              <img src="@/assets/logo.png" alt="popup_show_img" @click="this.img_function">
            </template>
          </re-popup>
          `
        }
      },
      diy: {
        code: {
          html: `
          <re-popup :visible.sync="popup_visible_2">
            <template slot="content">
              <div class="remo-diy-popup">
                  <span>Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.</span>
                  <re-divider></re-divider>
                  <span>React is an open-source, front end, JavaScript library for building user interfaces or UI components. I</span>
                  <re-divider></re-divider>
                  <span>Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations</span>
              </div>
            </template>
          </re-popup>
          `
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  methods: {
    img_function () {
      this.$message('You Click the advertising pop up')
    }
  }
}
</script>

<style lang="scss" scoped>
  .remo-diy-popup{
    width: 500px;
    // height: 300px;
    background: #fff;
    margin-top: 20px;
    padding:15px 20px;
    // border: 1px solid linear-gradient(195.55deg, #AADBAC -16.04%, #2E8BF5 99.28%);
    border-radius: 4px;
    font-style: italic;
    background: linear-gradient(195.55deg, #AADBAC -16.04%, #2E8BF5 99.28%);
    color: #444;
  }
</style>
