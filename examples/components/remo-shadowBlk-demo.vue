<template>
  <div>
    <div v-if="this.locale === 'cn'">
      <demo-block header="Shadow Block 阴影块" />
      <demo-block height="150" title="Default - 默认" desc="基础阴影效果:">
         <remo-shadow-block  width="100%">
          <span style="color:#409eff">
            基础阴影效果卡片
          </span>
        </remo-shadow-block>
        <template slot="code">
            <code>{{fCode(de.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block height="150" title="Light - 轻微" desc="淡阴影效果:">
         <remo-shadow-block mode="light"  width="100%">
          <span style="color:#409eff">
            淡阴影效果卡片
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(light.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block height="150" title="Deep - 明显" desc="深阴影效果:">
        <remo-shadow-block mode="deep"  width="100%">
          <span style="color:#409eff">
            深阴影效果卡片
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(deep.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block height="150"  title="Curve - 曲线" desc="线性阴影效果:">
        <remo-shadow-block mode="curve"  width="100%">
          <span style="color:#409eff">
            线性阴影效果卡片
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(curve.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block height="150"  title="Sharp - 弯翘" desc="翘阴影效果:">
        <remo-shadow-block mode="sharp" width="100%">
          <span style="color:#409eff">
            翘阴影效果卡片
          </span>
        </remo-shadow-block>
         <template slot="code">
              <code>{{fCode(sharp.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block height="150"  title="自定义大小" desc="可直接设置宽高:">
        <remo-shadow-block mode="curve" width="600px" height="200px">
          <span style="color:#409eff">
            自定义大小效果卡片
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(diy.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block title="API" desc="属性说明如下:" type="table">
          <re-table :data="tabledata" type="demo"></re-table>
      </demo-block>
    </div>

    
    <div v-if="this.locale === 'en'">
      <demo-block header="Shadow Block" />
      <demo-block  height="150" title="Default" desc="Defalut shadow effect:">
         <remo-shadow-block  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Default block card.
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(de.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block  height="150" title="Light" desc="Light shadow effect:">
         <remo-shadow-block mode="light"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Light block card.
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(light.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block  height="150" title="Deep" desc="Deep shadow effect:">
        <remo-shadow-block mode="deep"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Deep block card.
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(deep.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block  height="150" title="Curve" desc="Curve shadow effect:">
        <remo-shadow-block mode="curve"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Curve block card.
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(curve.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block  height="150" title="Sharp" desc="Sharp shadow effect:">
        <remo-shadow-block mode="sharp" width="100%">
          <span style="color:#409eff">
            Hi there ! I am Sharp block card.
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(sharp.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block height="150" title="Customize" desc="Customize width and height:">
        <remo-shadow-block mode="curve" width="600px" height="200px">
          <span style="color:#409eff">
            Hi there ! I am block with 600px Width and 200px Height.
          </span>
        </remo-shadow-block>
        <template slot="code">
              <code>{{fCode(diy.code.html)}}</code>
        </template>
      </demo-block>
      <demo-block title="API" desc="The properties description are as follows: " type="table">
        <re-table :data="tabledata_en" type="en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import RemoShadowBlock from '../../packages/remo-shawdow-block/src/remo-shadow-block.vue'
import demoBlock from './demo-block.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoShadowBlkDemo',
  components: {
    demoBlock,
    RemoShadowBlock
  },
  data () {
    return {
      de:{
        code:{
          html:`
            <remo-shadow-block width="100%">
              <span style="color:#409eff">
                Hi there ! I am Default block card.
              </span>
            </remo-shadow-block>
          `
        }
      },
      light:{
        code:{
          html:`
            <remo-shadow-block mode="light" width="100%">
              <span style="color:#409eff">
                Hi there ! I am Light block card.
              </span>
            </remo-shadow-block>
          `
        }
      },
      deep:{
        code:{
          html:`
            <remo-shadow-block mode="deep" width="100%">
              <span style="color:#409eff">
                Hi there ! I am Deep block card.
              </span>
            </remo-shadow-block>
          `
        }
      },
      curve:{
        code:{
          html:`
            <remo-shadow-block mode="curve" width="100%">
              <span style="color:#409eff">
                Hi there ! I am Curve block card.
              </span>
            </remo-shadow-block>
          `
        }
      },
      sharp:{
        code:{
          html:`
            <remo-shadow-block mode="sharp" width="100%">
              <span style="color:#409eff">
                Hi there ! I am Sharp block card.
              </span>
            </remo-shadow-block>
          `
        }
      },
      diy:{
        code:{
          html:`
            <remo-shadow-block mode="curve" width="600px" height="200px">
              <span style="color:#409eff">
                Hi there ! I am block with 600px Width and 200px Height.
              </span>
            </remo-shadow-block>
          `
        }
      },
      tabledata: [
        {
          parameter: 'mode',
          description: '设置模块阴影模式',
          dataTypes: 'String',
          optional: 'default / light / deep / curve / sharp',
          default: 'default'
        },
        {
          parameter: 'width',
          description: '设置模块宽度',
          dataTypes: 'String',
          optional: '',
          default: '400px'
        },
        {
          parameter: 'height',
          description: '设置模块最大高度',
          dataTypes: 'String',
          optional: '',
          default: '150px'
        }
      ],
      tabledata_en: [
        {
          parameter: 'mode',
          description: 'Setting mode',
          dataTypes: 'String',
          optional: 'default / light / deep / curve / sharp',
          default: 'default'
        },
        {
          parameter: 'width',
          description: 'Customize block width',
          dataTypes: 'String',
          optional: '',
          default: '400px'
        },
        {
          parameter: 'height',
          description: 'Customize block height',
          dataTypes: 'String',
          optional: '',
          default: '150px'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  }
}
</script>

<style lang="scss" scoped>
.demo-block{
  margin: 30px auto 60px;
  .title{
    font-size: 19px;
    font-weight: 450;
    margin: 20px 0 10px;
    .desc{
      display: block;
      font-size: 15px;
      line-height: 40px;
      color:rgb(77, 88, 128);
      font-weight: 350;
    }
  }
}
</style>
