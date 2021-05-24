<template>
  <div>
    <div v-if="this.locale ==='cn'">
        <demo-block title="致谢" type="normal">
            <re-tip color="#c8d6fa">
              <span>
                该项目使用了 <b>Vue.js</b> 框架开发做底层搭建。</br>
                <!-- 项目参考学习了 <b>Ant Design-UI</b> / <b>Element-UI</b>。 -->
              </span>
            </re-tip>
        </demo-block>
        <demo-block header="安装"></demo-block>
        <demo-block title="npm 安装" desc="推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。在项目文件目录下输入：" type="normal">
            <re-tip color="blue">
               <b>~$ npm i remo-ui -S </b>
            </re-tip>
        </demo-block>
        <demo-block title="yarn 安装" desc="在项目文件目录下输入：" type="normal">
            <re-tip color="blue">
               <b>~$ yarn add remo-ui </b>
            </re-tip>
        </demo-block>
        <demo-block header="快速上手"></demo-block>
        <demo-block title="全局引入" desc="你可以在项目的main.js(入口文件)中引入整个remo-ui" type="normal" >
            <re-tip  color="gray">
               <b><p>import RemoUI from 'remo-ui';</p>
                  Vue.use(RemoUI)</b>
            </re-tip>
        </demo-block>
        <demo-block title="按需加载" desc="你可以根据个人喜好引入需要的组件,项目打包时不用打包这个RemoUI" type="normal">
            <re-tip  color="gray">
               <b><p>import { &nbsp;ReButton, ReInput&nbsp; } from 'remo-ui';</p>
                   Vue.use(ReButton)</br>
                   Vue.use(ReInput)</b>
            </re-tip>
        </demo-block>
        <demo-block title="SSR 环境下" desc="如果使用如Nuxt.js/ Next.js 需要加<client-only>" type="normal">
            <re-tip  color="gray">
            <b>< client-only ><br>
              &nbsp;&nbsp;&nbsp;< re-buttton >Remo 按钮</ re-buttton ><br>
            </ client-only ></b>
            </re-tip>
        </demo-block>
    </div>
    <div v-if="this.locale ==='en'">
        <demo-block title="Acknowledgements" type="normal">
            <re-tip color="#c8d6fa">
              <span>
                This project uses <b>Vue.js</b> as framework to construct.<br/>
                <!-- 项目参考学习了 <b>Ant Design-UI</b> / <b>Element-UI</b>。 -->
              </span>
            </re-tip>
        </demo-block>
        <demo-block header="Installation"></demo-block>
        <demo-block title="npm" desc="The npm method is recommended as it works better with the Webpack. In the project file directory, enter:" type="normal">
            <re-tip  color="blue">
               <b>~$ npm i remo-ui -S </b>
            </re-tip>
        </demo-block>
        <demo-block title="yarn" desc="In the project directory enter:" type="normal">
            <re-tip color="blue">
               <b>~$ yarn add remo-ui </b>
            </re-tip>
        </demo-block>
        <demo-block header="Quick Start"></demo-block>
        <demo-block title="Global import" desc="Import remo-ui in the entry file (main.js) " type="normal">
            <re-tip color="gray">
               <b><p>import RemoUI from 'remo-ui';</p>
                  Vue.use(RemoUI)</b>
            </re-tip>
        </demo-block>
        <demo-block title="Import on Demand" desc="Remo supports tree shaking of ES modules, so using import { ReButton } from 'remo-ui'; would drop js code you didn't use." type="normal">
            <re-tip  color="gray">
               <b><p>import { &nbsp;ReButton, ReInput&nbsp; } from 'remo-ui';</p>
                   Vue.use(ReButton)</br>
                   Vue.use(ReInput)</b>
            </re-tip>
        </demo-block>
        <demo-block title="SSR Environment" desc="If you using Nuxt.js/ Next.js should start with <client-only>" type="normal">
            <re-tip color="gray">
            <b>< client-only ><br>
              &nbsp;&nbsp;&nbsp;< re-buttton >Remo Button</ re-buttton ><br>
            </ client-only ></b>
            </re-tip>
        </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'installDemo',
  components: {
    demoBlock
  },
  props: {},
  data () {
    return {

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
p{
  margin-top: 0;
}
</style>