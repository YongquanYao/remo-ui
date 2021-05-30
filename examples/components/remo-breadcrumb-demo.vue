<template>
  <div>
      <div v-if="this.locale === 'cn'">
       <demo-block header="BreadCrumb 面包屑导航" />
       <demo-block height="150" title="基础" desc="">
        <re-breadcrumb separator="/">
          <re-breadcrumb-item>首页</re-breadcrumb-item>
          <re-breadcrumb-item>关于 </re-breadcrumb-item>
          <re-breadcrumb-item>职业</re-breadcrumb-item>
        </re-breadcrumb>
        <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
          </template>
       </demo-block>
       <demo-block height="150" title="自定义" desc="图标做分隔符">
         <re-breadcrumb icon_class="remo-right">
          <re-breadcrumb-item>首页</re-breadcrumb-item>
          <re-breadcrumb-item>关于 </re-breadcrumb-item>
          <re-breadcrumb-item>职业</re-breadcrumb-item>
        </re-breadcrumb>
        <template slot="code">
          <code>{{fCode(diy.code.html)}}</code>
        </template>
       </demo-block>
       <demo-block title="API" desc="属性说明如下: " type="table">
         <re-table :data="tabledata" type="demo"></re-table>
       </demo-block>
       <demo-block title="API - BreadcrumbItem" desc="The properties description are as follows: " type="table">
         <re-table :data="tabledata_cn_1" type="en"></re-table>
       </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
       <demo-block header="BreadCrumb" />
       <demo-block  height="150" title="Usage" desc="">
          <re-breadcrumb separator="/">
              <re-breadcrumb-item><a href="/">Home</a></re-breadcrumb-item>
              <!-- <re-breadcrumb-item><a href="/#/component/remo-about">About</a></re-breadcrumb-item> -->
              <re-breadcrumb-item>Career</re-breadcrumb-item>
          </re-breadcrumb>
          <template slot="code">
              <code>{{fCode(simple.code.html)}}</code>
          </template>
       </demo-block>
       <demo-block  height="150" title="Customize" desc="remo icon as separator">
          <re-breadcrumb icon_class="remo-right">
              <re-breadcrumb-item>Home</re-breadcrumb-item>
              <re-breadcrumb-item to='/component/remo-about'>About </re-breadcrumb-item>
              <re-breadcrumb-item>Career</re-breadcrumb-item>
          </re-breadcrumb>
          <template slot="code">
              <code>{{fCode(diy.code.html)}}</code>
          </template>
       </demo-block>
       <demo-block title="API - Breadcrumb" desc="The properties description are as follows: " type="table">
         <re-table :data="tabledata_en" type="en"></re-table>
       </demo-block>
       <demo-block title="API - BreadcrumbItem" desc="The properties description are as follows: " type="table">
         <re-table :data="tabledata_en_1" type="en"></re-table>
       </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'ReBreadCrumbDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      tabledata: [
        {
          parameter: 'separator',
          description: 'separator 分隔符',
          dataTypes: 'String',
          optional: '-',
          default: '/'
        },
        {
          parameter: 'icon_class',
          description: 'remo icon Class名',
          dataTypes: 'String',
          optional: '-',
          default: '-'
        }
      ],
      tabledata_en: [
        {
          parameter: 'separator',
          description: 'separator symbol',
          dataTypes: 'String',
          optional: '-',
          default: '/'
        },
        {
          parameter: 'icon_class',
          description: 'remo icon Class attribute',
          dataTypes: 'String',
          optional: '-',
          default: '-'
        }
      ],
      tabledata_en_1:[
        {
          parameter: 'to',
          description: 'vue router link',
          dataTypes: 'String',
          optional: '-',
          default: '-'
        },
        {
          parameter: 'replace',
          description: 'whether has router history record',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ],
      tabledata_cn_1:[
        {
          parameter: 'to',
          description: '路由跳转对象，同 vue-router 的 to',
          dataTypes: 'String',
          optional: '-',
          default: '-'
        },
        {
          parameter: 'replace',
          description: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
          dataTypes: 'Boolean',
          optional: 'true / false',
          default: 'false'
        }
      ],
      simple:{
        code: {
          html:`<re-breadcrumb separator="/">
              <re-breadcrumb-item><a href="/">Home</a></re-breadcrumb-item>
              <re-breadcrumb-item><a href="/#/component/remo-about">About</a></re-breadcrumb-item>
              <re-breadcrumb-item>Career</re-breadcrumb-item>
          </re-breadcrumb>`
        }
      },
      diy:{
        code: {
          html:`<re-breadcrumb icon_class="remo-right">
              <re-breadcrumb-item>Home</re-breadcrumb-item>
              <re-breadcrumb-item>About </re-breadcrumb-item>
              <re-breadcrumb-item>Career</re-breadcrumb-item>
          </re-breadcrumb>`
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  mounted() {
    // const items = this.$el.querySelectorAll('.remo-breadcrumb-item')
    // if (items.length) {
    //   items[items.length - 1].setAttribute('aria-current', 'page');
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
