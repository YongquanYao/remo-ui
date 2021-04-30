<template>
  <div>
    <div v-if="this.locale === 'cn' ">
      <demo-block header="Button 按钮" />
      <demo-block height="190" title="基础用法" desc="常用的7种Type:" >
          <re-button>default</re-button>
          <re-button type="primary">Primary</re-button>
          <re-button type="success">Success</re-button>
          <re-button type="warning">Warning</re-button>
          <re-button type="danger">Danger</re-button>
          <re-button type="dashed" >dashed</re-button>
          <re-button type="dotted" >dotted</re-button>
          <template slot="code">
            <code class="html">{{fCode(simple.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block height="190" title="禁用" desc="无法点击模式:" >
          <re-button :disabled="true">default</re-button>
          <re-button :disabled="true" type="primary">Primary</re-button>
          <re-button :disabled="true" type="success">Success</re-button>
          <re-button :disabled="true" type="warning">Warning</re-button>
          <re-button :disabled="true" type="danger">Danger</re-button>
          <re-button :disabled="true" type="dashed" >dashed</re-button>
          <re-button :disabled="true" type="dotted" >dotted</re-button>
           <template slot="code">
               <code class="html">{{fCode(disabled.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block  height="190" title="圆形" desc="配合icon使用:" >
          <re-button type="primary" circle  icon="remo-user"></re-button>
          <re-button type="warning" circle  icon="remo-phone"></re-button>
          <re-button type="success" circle  icon="remo-plus"></re-button>
          <re-button type="danger" circle  icon="remo-shop"></re-button>
          <re-button type="dashed" circle  icon="remo-download"></re-button>
          <template slot="code">
              <code class="html">{{fCode(round.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block title="自定义" height="140" desc="颜色图标自定义, type必须为customize:" >
          <re-button type="customize" :color="'#1AAD19'"  icon="remo-wechat-fill">Customize Color</re-button>
          <re-button type="customize" icon="remo-alipay">Customize Color</re-button>
          <re-button type="customize" color="red"  icon="remo-google">Customize Color</re-button>
          <re-button type="customize" :color="'#0067a5'"  icon="remo-facebook">Customize Color</re-button>
          <template slot="code">
              <code class="html">{{fCode(customize.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block title="API" desc="属性说明如下: " type="table">
          <re-table type="demo" :data="tableData"></re-table>
      </demo-block>
    </div>
    <div v-if="this.locale === 'en' ">
      <demo-block header="Button"/>
      <demo-block height="190" title="Usage" desc="Seven different types:" >
          <re-button>default</re-button>
          <re-button type="primary">Primary</re-button>
          <re-button type="success">Success</re-button>
          <re-button type="warning">Warning</re-button>
          <re-button type="danger">Danger</re-button>
          <re-button type="dashed" >dashed</re-button>
          <re-button type="dotted" >dotted</re-button>
          <template slot="code">
            <code class="html">{{fCode(simple.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block height="190" title="Disabled" desc="Unable to click:" >
          <re-button :disabled="true">default</re-button>
          <re-button :disabled="true" type="primary">Primary</re-button>
          <re-button :disabled="true" type="success">Success</re-button>
          <re-button :disabled="true" type="warning">Warning</re-button>
          <re-button :disabled="true" type="danger">Danger</re-button>
          <re-button :disabled="true" type="dashed" >dashed</re-button>
          <re-button :disabled="true" type="dotted" >dotted</re-button>
          <template slot="code">
              <code class="html">{{fCode(disabled.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block  height="150" title="Round" desc="Use with icon:" >
          <re-button type="primary" circle  icon="remo-user"></re-button>
          <re-button type="warning" circle  icon="remo-phone"></re-button>
          <re-button type="success" circle  icon="remo-plus"></re-button>
          <re-button type="danger" circle  icon="remo-shop"></re-button>
          <re-button type="dashed" circle  icon="remo-download"></re-button>
          <template slot="code">
              <code class="html">{{fCode(round.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block  height="140" title="Customize" desc='Customize color and icon with type="customize": ' >
          <re-button type="customize" :color="'#1AAD19'"  icon="remo-wechat-fill">Customize Color</re-button>
          <re-button type="customize" icon="remo-alipay">Customize Color</re-button>
          <re-button type="customize" color="red"  icon="remo-google">Customize Color</re-button>
          <re-button type="customize" :color="'#0067a5'"  icon="remo-facebook">Customize Color</re-button>
          <template slot="code">
              <code class="html">{{fCode(customize.code.html)}}</code>
          </template>
      </demo-block>
      <demo-block title="API" desc="The property description is as follows: " type="table">
          <re-table type="en" :data="tableData_en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import remoShadowBlock from '../../packages/remo-shawdow-block/src/remo-shadow-block.vue'
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
import Demo from './demo.vue'
import DemoBlock from './demo-block.vue'
export default {
  components: { remoShadowBlock, demoBlock, Demo, DemoBlock },
  name: 'RemoBtnDemo',
  data () {
    return {
      simple: {
        code: {
          html: `
            <re-button>default</re-button>
            <re-button type="primary">Primary</re-button>
            <re-button type="success">Success</re-button>
            <re-button type="warning">Warning</re-button>
            <re-button type="danger">Danger</re-button>
            <re-button type="dashed" >dashed</re-button>
            <re-button type="dotted" >dotted</re-button>
          `
        }
      },
      disabled: {
        code: {
          html: `
            <re-button :disabled="true">default</re-button>
            <re-button :disabled="true" type="primary">Primary</re-button>
            <re-button :disabled="true" type="success">Success</re-button>
            <re-button :disabled="true" type="warning">Warning</re-button>
            <re-button :disabled="true" type="danger">Danger</re-button>
            <re-button :disabled="true" type="dashed" >dashed</re-button>
            <re-button :disabled="true" type="dotted" >dotted</re-button>
          `
        }
      },
      round: {
        code: {
          html: `
            <re-button type="primary" circle  icon="remo-user"></re-button>
            <re-button type="warning" circle  icon="remo-phone"></re-button>
            <re-button type="success" circle  icon="remo-plus"></re-button>
            <re-button type="danger" circle  icon="remo-shop"></re-button>
            <re-button type="dashed" circle  icon="remo-download"></re-button>
            `
        }
      },
      customize: {
        code: {
          html: `
            <re-button type="customize" :color="'#1AAD19'"  icon="remo-wechat-fill">Customize Color</re-button>
            <re-button type="customize" icon="remo-alipay">Customize Color</re-button>
            <re-button type="customize" color="red"  icon="remo-google">Customize Color</re-button>
            <re-button type="customize" :color="'#0067a5'"  icon="remo-facebook">Customize Color</re-button>
            `
        }
      },
      tableData: [
        {
          parameter: 'type',
          description: '设置按钮类型',
          dataTypes: 'String',
          optional:
            'default / primary / success / dashed / dotted / danger / warning / customize',
          default: 'default'
        },
        {
          parameter: 'animation',
          description: '是否开启点击动画效果',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'disabled',
          description: '是否禁用按钮',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'icon',
          description: '图标类名',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'color',
          description: '自定义按钮颜色，必须将按钮类型设置为customize',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'block',
          description: '将按钮宽度调整为其父宽度的选项',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ],
      tableData_en: [
        {
          parameter: 'type',
          description: 'button type',
          dataTypes: 'String',
          optional:
            'default / primary / success / dashed / dotted / danger / warning / customize',
          default: 'default'
        },
        {
          parameter: 'animation',
          description: 'enable click animations',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        },
        {
          parameter: 'disabled',
          description: 'enable disabled type',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'circle',
          description: 'round type',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'icon',
          description: 'icon class name',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'color',
          description: 'button color, and type must be in "customize"',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'block',
          description: 'width height inherit',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
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
