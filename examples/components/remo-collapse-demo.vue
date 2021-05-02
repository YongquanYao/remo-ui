<template>
  <div>
    <div v-if="this.locale === 'cn'">
      <demo-block header="Collapse 折叠盒子">
      </demo-block>
      <demo-block height="200" title="基础" desc="通过折叠盒子收缩或展示内容：">
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
      </demo-block>
      <demo-block height="200" title="嵌套" desc="可嵌套多层点击控制隐藏：">
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
      </demo-block>
       <demo-block title='API' desc="属性说明如下：" type="table">
          <re-table :data="tableData" type="demo"></re-table>
      </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
      <demo-block header="Collapse">
      </demo-block>
      <demo-block height="310" title="Usage" desc="Shrink or display the details：">
            <p class="classic" @click="handleshow">Click to View Detail <i class="remoi remo-down"></i></p>
            <re-collapse :show.sync="show">
              <p>This is detail ♪(^∇^*)</p>
              <p>his is detail  \(^o^)/~</p>
              <p>his is detail  (#^.^#)</p>
              <p>his is detail  (＾Ｕ＾)ノ~ＹＯ</p>
            </re-collapse>
            <re-button @click="handleshow1">Click to view </re-button>
              <re-collapse :show.sync="show1" :bodyClose='true'>
                <p>Check it out, this is detail ♪(^∇^*)</p>
                <p>Check it out, this is detail \(^o^)/~</p>
                <p>Check it out, this is detail (#^.^#)</p>
                <p>Check it out, this is detail (＾Ｕ＾)ノ~ＹＯ</p>
            </re-collapse>
            <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
            </template>
      </demo-block>
      <demo-block height="310" title="Nested" desc="">
            <re-button @click="handleshow2">Mutil-layer View</re-button>
            <re-collapse :show.sync="show2">
              <p>cant click to close ♪(^∇^*)</p>
              <p>cant click to close \(^o^)/~</p>
               <re-button @click="handleshow3">Click to View Detail</re-button>
              <re-collapse :show.sync="show3" :bodyClose='true'>
                <p>cant click to close ♪(^∇^*)</p>
                <p>cant click to close \(^o^)/~</p>
                <p>cant click to close (#^.^#)</p>
                <p>cant click to close (＾Ｕ＾)ノ~ＹＯ</p>
              </re-collapse>
              <p>cant click to close (#^.^#)</p>
              <p>cant click to close (＾Ｕ＾)ノ~ＹＯ</p>
            </re-collapse>
            <template slot="code">
              <code>{{fCode(nested.code.html)}}</code>
            </template>
      </demo-block>
       <demo-block title="API" desc="The properties description are as follows: " type="table">
          <re-table :data="tableData_en" type="en"></re-table>
      </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoCollapseDemo',
  components: {
    demoBlock
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  data () {
    return {
      simple:{
        code:{
          html:`
          <p class="classic" @click="handleshow">Click to View Detail <i class="remoi remo-down"></i></p>
          <re-collapse :show.sync="show">
            <p>This is detail ♪(^∇^*)</p>
            <p>his is detail  \(^o^)/~</p>
            <p>his is detail  (#^.^#)</p>
            <p>his is detail  (＾Ｕ＾)ノ~ＹＯ</p>
          </re-collapse>
          <re-button @click="handleshow1">Click to view </re-button>
            <re-collapse :show.sync="show1" :bodyClose='true'>
              <p>Check it out, this is detail ♪(^∇^*)</p>
              <p>Check it out, this is detail \(^o^)/~</p>
              <p>Check it out, this is detail (#^.^#)</p>
              <p>Check it out, this is detail (＾Ｕ＾)ノ~ＹＯ</p>
          </re-collapse>
          `
        }
      },
      nested:{
        code:{
          html:`
          <re-button @click="handleshow2">Mutil-layer View</re-button>
            <re-collapse :show.sync="show2">
            <p>cant click to close ♪(^∇^*)</p>
            <p>cant click to close \(^o^)/~</p>
              <re-button @click="handleshow3">Click to View Detail</re-button>
            <re-collapse :show.sync="show3" :bodyClose='true'>
              <p>cant click to close ♪(^∇^*)</p>
              <p>cant click to close \(^o^)/~</p>
              <p>cant click to close (#^.^#)</p>
              <p>cant click to close (＾Ｕ＾)ノ~ＹＯ</p>
            </re-collapse>
            <p>cant click to close (#^.^#)</p>
            <p>cant click to close (＾Ｕ＾)ノ~ＹＯ</p>
          </re-collapse>
          `
        }
      },
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
      tableData_en: [
        {
          parameter: 'show.sync',
          description: 'collaspe visible value',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        },
        {
          parameter: 'bodyClose',
          description: 'Whether the body of collapse can be clicked to close',
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
