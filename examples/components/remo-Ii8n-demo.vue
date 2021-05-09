<template>
    <div>
        <div v-if="this.locale=== 'cn' ">
            <demo-block header="iI8n 语种切换" />      
            <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vue-i18n: <a href="https://github.com/kazupon/vue-i18n"> https://github.com/kazupon/vue-i18n</a></re-tip> 
            <demo-block height="130">
                安装
                <template slot="code">
                    <code class="html">{{fCode(install.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="280">
                注册插件
                <template slot="code">
                    <code class="html">{{fCode(imported.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="240">
                使用例子
                <template slot="code">
                    <code class="html">{{fCode(example.code.html)}}</code>
                </template>
            </demo-block>
        </div>
        <div v-if="this.locale=== 'en' ">
            <demo-block header="iI8n" />
            <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vue-i18n: <a href="https://github.com/kazupon/vue-i18n"> https://github.com/kazupon/vue-i18n</a></re-tip>
            <demo-block height="130">
                Install
                <template slot="code">
                    <code class="html">{{fCode(install.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="280">
                Import
                <template slot="code">
                    <code class="html">{{fCode(imported.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="240">
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
    name: 'remoIi8nDemo',
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
                    import { createApp } from 'vue'
                    import { createI18n } from 'vue-i18n'

                    const i18n = createI18n({
                    // something vue-i18n options here ...
                    })

                    const app = createApp({
                    // something vue options here ...
                    })

                    app.use(i18n)
                    app.mount('#app')
                    `
                }
            },
            install:{
                code:{
                    html:`
                    $ npm install vue-i18n@next
                    ## or
                    $ yarn add vue-i18n@next
                    `
                }
            },
            example:{
                code:{
                    html:`
                    const messages = {
                        en: {
                            message: {
                            hello: '{msg} world'
                            }
                        }
                    }
                    <template>
                        <p>{{ $t('message.hello', ['hello']) }}</p>
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