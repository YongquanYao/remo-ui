<template>
  <div>
    <div v-if="this.locale === 'cn'">
      <demo-block header="Shadow Block 阴影块" />
      <demo-block title="Default - 默认" desc="基础阴影效果:">
         <remo-shadow-block  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Default block card.
          </span>
        </remo-shadow-block>
      </demo-block>
      <demo-block title="Light - 轻微" desc="淡阴影效果:">
         <remo-shadow-block mode="light"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Light block card.
          </span>
        </remo-shadow-block>
      </demo-block>
      <div class="demo-block">
        <div class="title">
          <span>Deep - 明显</span>
          <span class="desc">深阴影效果:</span>
        </div>
        <remo-shadow-block mode="deep"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Deep block card.
          </span>
        </remo-shadow-block>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>Curve - 曲线</span>
          <span class="desc">线性阴影效果:</span>
        </div>
        <remo-shadow-block mode="curve"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Curve block card.
          </span>
        </remo-shadow-block>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>Sharp - 弯翘</span>
          <span class="desc">翘阴影效果:</span>
        </div>
        <remo-shadow-block mode="sharp" width="100%">
          <span style="color:#409eff">
            Hi there ! I am Sharp block card.
          </span>
        </remo-shadow-block>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>自定义大小 </span>
          <span class="desc">可直接设置宽高:</span>
        </div>
        <remo-shadow-block mode="curve" width="600px" height="200px">
          <span style="color:#409eff">
            Hi there ! I am block with 600px Width and 200px Height.
          </span>
        </remo-shadow-block>
      </div>
      <div class="demo-block">
        <div class="title">
          <span>API</span>
          <span class="desc">属性说明如下: </span>
        </div>
        <re-table :data="tabledata" type="demo"></re-table>
      </div>
    </div>
    <div v-if="this.locale === 'en'">
      <demo-block header="Shadow Block" />
      <demo-block title="Default" desc="Defalut shadow effect:">
         <remo-shadow-block  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Default block card.
          </span>
        </remo-shadow-block>
      </demo-block>
      <demo-block title="Light" desc="Light shadow effect:">
         <remo-shadow-block mode="light"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Light block card.
          </span>
        </remo-shadow-block>
      </demo-block>
      <demo-block title="Deep" desc="Deep shadow effect:">
        <remo-shadow-block mode="deep"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Deep block card.
          </span>
        </remo-shadow-block>
      </demo-block>
      <demo-block title="Curve" desc="Curve shadow effect:">
        <remo-shadow-block mode="curve"  width="100%">
          <span style="color:#409eff">
            Hi there ! I am Curve block card.
          </span>
        </remo-shadow-block>
      </demo-block>
      <demo-block title="Sharp" desc="Sharp shadow effect:">
        <remo-shadow-block mode="sharp" width="100%">
          <span style="color:#409eff">
            Hi there ! I am Sharp block card.
          </span>
        </remo-shadow-block>
      </demo-block>
      <demo-block title="Customize" desc="Customize width and height:">
        <remo-shadow-block mode="curve" width="600px" height="200px">
          <span style="color:#409eff">
            Hi there ! I am block with 600px Width and 200px Height.
          </span>
        </remo-shadow-block>
      </demo-block>
      <demo-block title="API" desc="The properties description are as follows: ">
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
