<template>
  <div>
    <div v-if="this.locale === 'cn'">
        <demo-block header='Menu 菜单'></demo-block>
        <demo-block title='基础用法' desc="通过点击不同选项进行跳转">
            <re-menu :menuList="data"></re-menu>
        </demo-block>
        <demo-block title='API' desc="属性说明如下：">
          <re-table :data="tableData" type="demo"></re-table>
        </demo-block>
    </div>
    <div v-if="this.locale === 'en'">
        <demo-block header='Menu'></demo-block>
        <demo-block title='Usage' desc="navigate by clicking the menu item">
            <re-menu :menuList="data_en"></re-menu>
        </demo-block>
        <demo-block title="API" desc="The properties description are as follows: ">
          <re-table :data="tableData_en" type="en"></re-table>
        </demo-block>
    </div>
  </div>
</template>

<script>
import demoBlock from './demo-block'
import { mapGetters } from 'vuex'
export default {
  name: 'RemoMenuDemo',
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
      data: [
        {
          icon: 'home',
          name: '主页',
          link: '#/component/remo-menu'
        },
        {
          icon: 'phone',
          name: '联系',
          link: '#/component/remo-menu'
        },
        {
          icon: 'scan',
          name: '扫码',
          link: '#/component/remo-menu'
        },
        {
          icon: 'setting',
          name: '设置',
          link: '#/component/remo-menu'
        }
      ],
      data_en: [
        {
          icon: 'home',
          name: 'Home',
          link: '#/component/remo-menu'
        },
        {
          icon: 'phone',
          name: 'Contact',
          link: '#/component/remo-menu'
        },
        {
          icon: 'scan',
          name: 'Scan',
          link: '#/component/remo-menu'
        },
        {
          icon: 'setting',
          name: 'Setting',
          link: '#/component/remo-menu'
        }
      ],
      tableData: [
        {
          parameter: 'menuList',
          description: '绑定值 / 设置menu的数据',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'activeIndex',
          description: '当前激活菜单的index',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        }
      ],
      tableData_en: [
        {
          parameter: 'menuList',
          description: 'Binding value',
          dataTypes: 'Array',
          optional: '',
          default: ''
        },
        {
          parameter: 'activeIndex',
          description: 'active index of menu item',
          dataTypes: 'Number',
          optional: '',
          default: '0'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
