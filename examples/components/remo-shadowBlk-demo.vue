<template>
    <div>
      <demo-block title="Default - 默认" desc="基础阴影效果:">
         <re-block-shadow>
          <span style="color:#409eff">
            Hi there ! I am Default block card.
          </span>
        </re-block-shadow>
      </demo-block>
      <demo-block title="Light - 轻微" desc="淡阴影效果:">
         <re-block-shadow mode="light">
          <span style="color:#409eff">
            Hi there ! I am Light block card.
          </span>
        </re-block-shadow>
      </demo-block>
      <div class="demo-block">
        <div class="title">
          <span>Deep - 明显</span>
          <span class="desc">深阴影效果:</span>
        </div>
        <re-block-shadow mode="deep">
          <span style="color:#409eff">
            Hi there ! I am Deep block card.
          </span>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>Curve - 曲线</span>
          <span class="desc">线性阴影效果:</span>
        </div>
        <re-block-shadow mode="curve">
          <span style="color:#409eff">
            Hi there ! I am Curve block card.
          </span>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>Sharp - 弯翘</span>
          <span class="desc">翘阴影效果:</span>
        </div>
        <re-block-shadow mode="sharp">
          <span style="color:#409eff">
            Hi there ! I am Sharp block card.
          </span>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>自定义大小 </span>
          <span class="desc">可直接设置宽高:</span>
        </div>
        <re-block-shadow mode="curve" width="600px" height="200px">
          <span style="color:#409eff">
            Hi there ! I am block with 600px Width and 200px Height.
          </span>
        </re-block-shadow>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>API</span>
          <span class="desc">属性说明如下: </span>
        </div>
        <re-table :data="tabledata" type="demo"></re-table>
      </div>
    </div>
</template>

<script>
import demoBlock from './demo-block.vue'
export default {
  name: 'RemoShadowBlkDemo',
  components: {
    demoBlock
  },
  data () {
    return {
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
