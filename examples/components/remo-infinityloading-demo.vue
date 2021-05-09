<template>
    <div>
        <div v-if="this.locale=== 'cn' ">
            <demo-block header="Infinite Loading 无限加载" />      
             <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vue-infinite-loading: <a href="https://peachscript.github.io/vue-infinite-loading/"> https://peachscript.github.io/vue-infinite-loading/</a></re-tip>
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
            <demo-block height="580">
                UI库一起使用
                <template slot="code">
                    <code class="html">{{fCode(uilibrary.code.html)}}</code>
                </template>
            </demo-block>
        </div>
        <div v-if="this.locale=== 'en' ">
            <demo-block header="Infinite Loading" />
            <re-tip color="blue"> <i class="remoi remo-github-fill"/>  vue-lazyload: <a href="https://github.com/hilongjw/vue-lazyload"> https://github.com/hilongjw/vue-lazyload</a></re-tip>
            <demo-block>
                Install
                <template slot="code">
                    <code class="html">{{fCode(install.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="250">
                Import
                <template slot="code">
                    <code class="html">{{fCode(imported.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="720">
                Example
                <template slot="code">
                    <code class="html">{{fCode(example.code.html)}}</code>
                </template>
            </demo-block>
            <demo-block height="250">
                Use with UI Library
                <template slot="code">
                    <code class="html">{{fCode(uilibrary.code.html)}}</code>
                </template>
            </demo-block>
        </div>
    </div>
</template>

<script>
import demoBlock from './demo-block';
import {mapGetters} from 'vuex'
export default {
    name: 'remoInfinityLoadingDemo',
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
                    <template>
                        <infinite-loading></infinite-loading>
                    </template>

                    import InfiniteLoading from 'vue-infinite-loading';

                    export default {
                        components: {
                            InfiniteLoading,
                        },
                    };
                    `
                }
            },
            install:{
                code:{
                    html:`
                    $ npm install vue-infinite-loading -S
                    `
                }
            },
            example:{
                code:{
                    html:`
                    <header>
                    <!-- Hacker News header -->
                    </header>

                    <div v-for="(item, $index) in list" :key="$index">
                    <!-- Hacker News item loop -->
                    </div>

                    <infinite-loading @infinite="infiniteHandler"></infinite-loading>


                    import axios from 'axios';

                    const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

                    export default {
                        data() {
                            return {
                            page: 1,
                            list: [],
                            };
                        },
                        methods: {
                            infiniteHandler($state) {
                            axios.get(api, {
                                params: {
                                page: this.page,
                                },
                            }).then(({ data }) => {
                                if (data.hits.length) {
                                this.page += 1;
                                this.list.push(...data.hits);
                                $state.loaded();
                                } else {
                                $state.complete();
                                }
                            });
                            },
                        },
                    };
                    `
                },
            },
            uilibrary:{
                code:{
                    html:`
                    <div id="app">
                        <el-table>
                            <!-- el-table-column items -->

                            <infinite-loading
                            slot="append"
                            @infinite="infiniteHandler"
                            force-use-infinite-wrapper=".el-table__body-wrapper">
                            </infinite-loading>
                        </el-table>
                    </div>
                    `
                }
            },
        }
    }
}
</script>

<style lang="sass" scoped>

</style>