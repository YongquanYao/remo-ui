<template>
    <div>
        <div v-if="this.locale=== 'cn' ">
            <demo-block header="Persisted State 状态保存" />      
             <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vuex-persisted-state: <a href="https://github.com/robinvdvleuten/vuex-persistedstate"> https://github.com/robinvdvleuten/vuex-persistedstate</a></re-tip>
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
            <demo-block height="580">
                使用例子
                <template slot="code">
                    <code class="html">{{fCode(example.code.html)}}</code>
                </template>
            </demo-block>
            <!-- <demo-block height="580">
                UI库一起使用
                <template slot="code">
                    <code class="html">{{fCode(uilibrary.code.html)}}</code>
                </template>
            </demo-block> -->
        </div>
        <div v-if="this.locale=== 'en' ">
            <demo-block header="Persisted State" />
            <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vue-lazyload: <a href="https://github.com/hilongjw/vue-lazyload"> https://github.com/hilongjw/vue-lazyload</a></re-tip>
            <demo-block>
                Install
                <template slot="code">
                    <code class="html">{{fCode(install.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="210">
                Import
                <template slot="code">
                    <code class="html">{{fCode(imported.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="620">
                Example
                <template slot="code">
                    <code class="html">{{fCode(example.code.html)}}</code>
                </template>
            </demo-block>
            <!-- <demo-block height="250">
                Use with UI Library
                <template slot="code">
                    <code class="html">{{fCode(uilibrary.code.html)}}</code>
                </template>
            </demo-block> -->
        </div>
    </div>
</template>

<script>
import demoBlock from './demo-block';
import {mapGetters} from 'vuex'
export default {
    name: 'remoPersistedStateDemo',
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
                    import Vuex from "vuex";
                    import createPersistedState from "vuex-persistedstate";

                    const store = new Vuex.Store({
                        // ...
                        plugins: [createPersistedState()],
                    });
                    `
                }
            },
            install:{
                code:{
                    html:`
                    $ npm install --save vuex-persistedstate
                    `
                }
            },
            example:{
                code:{
                    html:`
                    import Vue from 'vue'
                    import Vuex from 'vuex';
                    import createPersistedState from 'vuex-persistedstate';

                    Vue.use(Vuex)

                    const store = new Vuex.Store({
                    state: {
                        count: 0
                    },
                    plugins: [createPersistedState()],
                    mutations: {
                        increment: state => state.count++,
                        decrement: state => state.count--
                    }
                    });

                    new Vue({
                    el: '#app',
                    computed: {
                        count() {
                        return store.state.count;
                        }
                    },
                    methods: {
                        increment() {
                        store.commit('increment');
                        },
                        decrement() {
                        store.commit('decrement');
                        }
                    }
                    });
                    `
                },
            },
        }
    }
}
</script>

<style lang="sass" scoped>

</style>