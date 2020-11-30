<template>
    <div>
      <demo-block header="Collapse 折叠盒子">
      </demo-block>
      <demo-block title="基础" desc="通过折叠盒子收缩或展示内容：">
          <re-shadow-block width="100%" height="100%" :bodyClose='false'>
            <p class="classic" @click="handleshow">点击查看详情 <i class="remoi remo-down"></i></p>
            <re-collapse :show.sync="show">
              <p>这就是详情啦啦啦啦 ♪(^∇^*)</p>
              <p>这就是详情啦啦啦啦 \(^o^)/~</p>
              <p>这就是详情啦啦啦啦 (#^.^#)</p>
              <p>这就是详情啦啦啦啦 (＾Ｕ＾)ノ~ＹＯ</p>
            </re-collapse>
            <re-button @click="handleshow1">Click to view </re-button>
              <re-collapse :show.sync="show1" :bodyClose='true'>
                <p>Check it out, this is detail ♪(^∇^*)</p>
                <p>Check it out, this is detail \(^o^)/~</p>
                <p>Check it out, this is detail (#^.^#)</p>
                <p>Check it out, this is detail (＾Ｕ＾)ノ~ＹＯ</p>
              </re-collapse>
          </re-shadow-block>
      </demo-block>
      <demo-block title="嵌套" desc="可嵌套多层点击控制隐藏：">
          <re-shadow-block width="100%" height="100%" :bodyClose='true'>
            <re-button @click="handleshow2">Mutil-layer View</re-button>
            <re-collapse :show.sync="show2">
              <p>点内容不可关闭 ♪(^∇^*)</p>
              <p>点内容不可关闭 \(^o^)/~</p>
               <re-button @click="handleshow3">点击看详情</re-button>
              <re-collapse :show.sync="show3" :bodyClose='true'>
                <p>点内容可关闭 ♪(^∇^*)</p>
                <p>点内容可关闭 \(^o^)/~</p>
                
                <p>点内容可关闭 (#^.^#)</p>
                <p>点内容可关闭 (＾Ｕ＾)ノ~ＹＯ</p>
              </re-collapse>
              <p>点内容不可关闭 (#^.^#)</p>
              <p>点内容不可关闭 (＾Ｕ＾)ノ~ＹＯ</p>
            </re-collapse>
          </re-shadow-block>
      </demo-block>
       <demo-block title='API' desc="属性说明如下：">
          <re-table :data="tableData" type="demo"></re-table>
      </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoCollapseDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      tableData: [
        {
          parameter: 'show.sync',
          description: 'collaspe显示状态',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'bodyClose',
          description: '点击内容是否关闭',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'true'
        }
      ],
      show: false,
      show1: false,
      show2: false,
      show3: false
    }
  },
  methods: {
    handleshow () {
      this.show = !this.show
    },
    handleshow1 () {
      this.show1 = !this.show1
    },
    handleshow2 () {
      this.show2 = !this.show2
    },
    handleshow3 () {
      this.show3 = !this.show3
    }
  }
}
</script>

<style lang="scss" scoped>
.classic{
  color: #409EFF;
  font-size: 15px;
  cursor: default;
}
</style>
