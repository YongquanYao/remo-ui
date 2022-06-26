<template>
    <div>
        <div v-if="this.locale=== 'cn' ">
            <demo-block header="Lazyload 懒加载" />      
             <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vue-lazyload: <a href="https://github.com/hilongjw/vue-lazyload"> https://github.com/hilongjw/vue-lazyload</a></re-tip>
            <demo-block>
                安装
                <template slot="code">
                    <code class="html">{{fCode(install.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="350">
                注册插件
                <template slot="code">
                    <code class="html">{{fCode(imported.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="380">
                使用例子
                <template slot="code">
                    <code class="html">{{fCode(example.code.html)}}</code>
                </template>
            </demo-block>
        </div>
        <div v-if="this.locale=== 'en' ">
            <demo-block header="Lazyload" />
            <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vue-lazyload: <a href="https://github.com/hilongjw/vue-lazyload"> https://github.com/hilongjw/vue-lazyload</a></re-tip>
            <demo-block>
                Install Instruction
                <template slot="code">
                    <code class="html">{{fCode(install.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="350">
                Import and Initial Instruction
                <template slot="code">
                    <code class="html">{{fCode(imported.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="380">
                Example
                <template slot="code">
                    <code class="html">{{fCode(example.code.html)}}</code>
                </template>
            </demo-block>
        </div>
    </div>
</template>

<script>
import demoBlock from './demo-block';
import {mapGetters} from 'vuex'
export default {
    name: 'remoLazyloadDemo',
    components: {
        demoBlock
    },
    computed: {
        ...mapGetters({
        locale: 'locale'
        })
    },
    data(){
        return{
            imported:{
                code:{
                    html:`
                    // main.js:
                    import Vue from 'vue'
                    import App from './App.vue'
                    import VueLazyload from 'vue-lazyload'
                    // 使用方法1:
                    Vue.use(VueLazyload)

                    // 使用方法2: 自定义参数选项配置
                    Vue.use(VueLazyload, {
                    preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
                    error: 'dist/error.png', // 当加载图片失败的时候
                    loading: 'dist/loading.gif', // 图片加载状态下显示的图片
                    attempt: 3 //  加载错误后最大尝试次数 默认值:3
                    })
                    `
                }
            },
            install:{
                code:{
                    html:`
                    $ npm install vue-lazyload -D
                    `
                }
            },
            example:{
                code:{
                    html:`
                    <!-- 使用方法1: 可能图片url是直接从后台拿到的，把':src'替换成'v-lazy'就行 --> 
                    <template>
                    <ul>
                        <li v-for="img in list">
                        <img v-lazy="img.src" >
                        </li>
                    </ul>
                    </template>

                    <!-- 使用方法2: 使用懒加载容器v-lazy-container,和v-lazy差不多,通过自定义指令去定义的，不过v-lazy-container扫描的是内部的子元素 --> 
                    <template>
                    <div v-lazy-container="{ selector: 'img'}">
                        <img data-src="/static/mobile/bohai/p2/bg.jpg">
                        <img data-src="/static/mobile/bohai/p3/bg.jpg">
                        ...
                        <img data-src="/static/mobile/bohai/p13/bg.jpg">
                    </div>
                    </template>
                    `
                }
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>