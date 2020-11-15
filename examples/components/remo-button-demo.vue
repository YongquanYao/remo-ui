<template>
    <div>
      <div class="demo-block">
        <div class="title">
          <span>基础用法</span>
          <span class="desc">常用的7种Type:</span>
        </div>
        <re-block-shadow width="100%" height="90px">
          <re-button>default</re-button>
          <re-button type="primary">Primary</re-button>
          <re-button type="success">Success</re-button>
          <re-button type="warning">Warning</re-button>
          <re-button type="danger">Danger</re-button>
          <re-button type="dashed" >dashed</re-button>
          <re-button type="dotted" >dotted</re-button>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span >禁用</span>
          <span class="desc">无法点击模式:</span>
        </div>
        <re-block-shadow width="100%" height="90px">
          <re-button :disabled="true">default</re-button>
          <re-button :disabled="true" type="primary">Primary</re-button>
          <re-button :disabled="true" type="success">Success</re-button>
          <re-button :disabled="true" type="warning">Warning</re-button>
          <re-button :disabled="true" type="danger">Danger</re-button>
          <re-button :disabled="true" type="dashed" >dashed</re-button>
          <re-button :disabled="true" type="dotted" >dotted</re-button>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>圆形</span>
          <span class="desc">配合icon使用:</span>
        </div>
        <re-block-shadow width="100%" height="90px">
          <re-button type="primary" circle  icon="remo-user"></re-button>
          <re-button type="warning" circle  icon="remo-phone"></re-button>
          <re-button type="success" circle  icon="remo-plus"></re-button>
          <re-button type="danger" circle  icon="remo-shop"></re-button>
          <re-button type="dashed" circle  icon="remo-download"></re-button>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>自定义</span>
          <span class="desc">颜色图标自定义, type必须为customize: </span>
        </div>
        <re-block-shadow width="100%" height="90px">
           <re-button type="customize" :color="'#1AAD19'"  icon="remo-wechat-fill">Customize Color</re-button>
          <re-button type="customize" icon="remo-alipay">Customize Color</re-button>
          <re-button type="customize" color="red"  icon="remo-google">Customize Color</re-button>
           <re-button type="customize" :color="'#0067a5'"  icon="remo-facebook">Customize Color</re-button>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>API</span>
          <span class="desc">属性说明如下: </span>
        </div>
        <div>
          <re-table type="demo" :data="tableData"></re-table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RemoBtnDemo',
  data () {
    return {
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
          optional: 'true/false',
          default: 'true'
        },
        {
          parameter: 'disabled',
          description: '是否禁用按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'remo',
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
          optional: 'true/false',
          default: 'false'
        }
      ]
    }
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
