<template>
    <div>
        <demo-block title="默认" desc="页面滚动到一定高度时会出现在右下端，以下是一个测试模块:">
          <re-tip color="blue">本组件需配合<b> Button RemoUI组件 </b>一并使用。若使用按需引用方式，需一并引入。</re-tip>
          <re-backtop></re-backtop>
        </demo-block>
        <div class="testarea">
             Height Test Area
        </div>
        <demo-block title="自定义" desc="可选择放置位置，文案，图片">
          <div class="diycontainer">
            <re-backtop type='customize' icon='remo-totop'>Back to top</re-backtop>
            <re-backtop type='customize' color="#555" icon='remo-up-circle'>Go Back To Top</re-backtop>
            <re-backtop type='customize' color='rgb(250, 67, 67)' circle icon='remo-rocket'>Top</re-backtop>
          </div>
        </demo-block>
        <demo-block title="API" desc="属性说明如下:">
          <re-table :data="tabledata" type="demo"></re-table>
        </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoBacktopDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      tabledata: [
        {
          parameter: 'type',
          description: '使用模式',
          dataTypes: 'String',
          option: 'default / customize',
          default: 'default'
        },
        {
          parameter: 'icon',
          description: '显示的Icon',
          dataTypes: 'String',
          option: '请查看Icon 图标',
          default: 'remo-up'
        },
        {
          parameter: 'color',
          description: '自定义颜色需和type为customize一并使用',
          dataTypes: 'String',
          option: '',
          default: '#409eff'
        },
        {
          parameter: 'circle',
          description: '显示形状',
          dataTypes: 'Boolean',
          option: 'true / false',
          default: 'false'
        },
        {
          parameter: 'target',
          description: '设置需要监听其滚动事件的元素,默认为窗口',
          dataTypes: 'String',
          option: '',
          default: 'window'
        },
        {
          parameter: 'showHeight',
          description: '滚动高度达到此参数值才出现按钮，为0时不隐藏按钮',
          dataTypes: 'Number',
          option: '',
          default: '100'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.testarea{
  margin-top: -30px;
  width: 100%;
  height: 700px;
  // border: 1px solid rgba(255, 221, 255, 0.933);
  background: repeating-linear-gradient(45deg, #999, rgba(221, 237, 255, 0.933), #fff 2px);
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 700px;
  border-radius: 10px;
  color: #555;
}
.diycontainer{
  display: flex;
}
</style>
