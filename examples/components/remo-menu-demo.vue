<template>
    <div>
        <demo-block header='Menu 菜单'></demo-block>
        <demo-block title='基础用法' desc="通过点击不同选项进行跳转">
            <re-menu :menuList="data"></re-menu>
        </demo-block>
        <demo-block title='API' desc="属性说明如下：">
          <re-table :data="tableData" type="demo"></re-table>
        </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  components: {
    demoBlock
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
