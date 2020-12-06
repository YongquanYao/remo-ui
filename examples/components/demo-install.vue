<template>
    <div>
        <demo-block title="致谢">
            <re-tip style="width:90%" color="#c8d6fa">
              <span>
                该项目使用了 <b>Vue.js</b> 框架开发做底层搭建。</br>
                <!-- 项目参考学习了 <b>Ant Design-UI</b> / <b>Element-UI</b>。 -->
              </span>
            </re-tip>
        </demo-block>
        <demo-block header="安装"></demo-block>
        <demo-block title="npm 安装" desc="推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。在项目文件目录下输入：">
            <re-tip style="width:90%" color="blue">
               <b>~$ npm i remo-ui -S </b>
            </re-tip>
        </demo-block>
        <demo-block title="yarn 安装" desc="在项目文件目录下输入：">
            <re-tip style="width:90%" color="blue">
               <b>~$ yarn add remo-ui </b>
            </re-tip>
        </demo-block>
        <demo-block header="快速上手"></demo-block>
        <demo-block title="全局引入" desc="你可以在项目的main.js(入口文件)中引入整个remo-ui">
            <re-tip style="width:90%" color="gray">
               <b><p>import RemoUI from 'remo-ui';</p>
                  Vue.use(RemoUI)</b>
            </re-tip>
        </demo-block>
        <demo-block title="按需加载" desc="你可以根据个人喜好引入需要的组件,项目打包时不用打包这个RemoUI">
            <re-tip style="width:90%" color="gray">
               <b><p>import { ReButton, ReInput } from 'remo-ui';</p>
                   Vue.use(ReButton)</br>
                   Vue.use(ReInput)</b>
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
p{
  margin-top: 0;
}
</style>