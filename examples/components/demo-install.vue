<template>
    <div>
        <demo-block title="致谢">
            <re-tip style="width:90%" color="#c8d6fa">
              <span>
                该项目使用了 <b>Vue.js</b> 框架开发做底层搭建。</br>
                项目参考模仿了 <b>Ant Design-UI</b> / <b>Element-UI</b>。
              </span>
            </re-tip>
        </demo-block>
        <demo-block title="npm 安装" desc="推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。">
            <re-tip style="width:90%" color="red">
              <span>
                正在研发ing..
              </span>
            </re-tip>
        </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'installDemo',
  components: {
    demoBlock
  },
  props: {},
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>