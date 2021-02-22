<template>
  <div>
      <div v-if="this.locale === 'cn'">
        <demo-block header="分割线" />
        <demo-block title="基础" desc="对不同章节的文本段落进行分割，水平分割线： ">
          <re-shadow-block width="800px" height="390px">
          Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru.Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.
          <re-divider></re-divider>
          React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          <re-divider></re-divider>
          Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
          </re-shadow-block>
        </demo-block>
        <demo-block title="选择方向" desc="垂直分割线">
          <re-shadow-block width="800px" height="70px">
          <span style="color: #409eff">Vue</span>
          <re-divider direction="vertical"></re-divider>
          React
          <re-divider direction="vertical"></re-divider>
          Angular
          <re-divider direction="vertical"></re-divider>
          JavaScript
          <re-divider direction="vertical"></re-divider>
          TypeScript
          <re-divider direction="vertical"></re-divider>
          jQuery
          </re-shadow-block>
        </demo-block>
        <demo-block title="设置文案" desc="可以在分割线上自定义文案内容">
          <re-shadow-block width="800px" height="170px">
            <re-divider contentPosition>I'm in center</re-divider>
            <re-divider contentPosition="left">I'm in left</re-divider>
            <re-divider contentPosition="right">I'm in right</re-divider>
          </re-shadow-block>
        </demo-block>
        <demo-block title="API" desc="属性说明如下：">
          <re-table :data="tabledata" type="demo"></re-table>
        </demo-block>
      </div>
      <div v-if="this.locale === 'en'">
        <demo-block header="Divider" />
        <demo-block title="Usage" desc="Divide different sections within a paragraph，horizontal divider： ">
          <re-shadow-block width="800px" height="390px">
          Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru.Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.
          <re-divider></re-divider>
          React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
          <re-divider></re-divider>
          Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
          </re-shadow-block>
        </demo-block>
        <demo-block title="Direction" desc="Divide different sections within a paragraph，Vertical divider">
          <re-shadow-block width="800px" height="70px">
          <span style="color: #409eff">Vue</span>
          <re-divider direction="vertical"></re-divider>
          React
          <re-divider direction="vertical"></re-divider>
          Angular
          <re-divider direction="vertical"></re-divider>
          JavaScript
          <re-divider direction="vertical"></re-divider>
          TypeScript
          <re-divider direction="vertical"></re-divider>
          jQuery
          </re-shadow-block>
        </demo-block>
        <demo-block title="Embedded Content" desc="Content in divider">
          <re-shadow-block width="800px" height="170px">
            <re-divider contentPosition>I'm in center</re-divider>
            <re-divider contentPosition="left">I'm in left</re-divider>
            <re-divider contentPosition="right">I'm in right</re-divider>
          </re-shadow-block>
        </demo-block>
        <demo-block title="API" desc="The properties description are as follows: ">
          <re-table :data="tabledata_en" type="en"></re-table>
        </demo-block>
      </div>
    </div>
</template>

<script>
import demoBlock from './demo-block'
import {mapGetters} from 'vuex'
export default {
  name: 'RemoDividerDemo',
  components: {
    demoBlock
  },
  props: {

  },
  data () {
    return {
      tabledata: [
        {
          parameter: 'direction',
          description: '设置分割线模式',
          dataTypes: 'String',
          option: 'horizontal / vertical',
          default: 'horizontal'
        },
        {
          parameter: 'contentPosition',
          description: '设置嵌入文案位置',
          dataTypes: 'String',
          option: 'center / left / right',
          default: 'center'
        }
      ],
      tabledata_en: [
        {
          parameter: 'direction',
          description: 'Direction of Divider',
          dataTypes: 'String',
          option: 'horizontal / vertical',
          default: 'horizontal'
        },
        {
          parameter: 'contentPosition',
          description: 'embedded content position ',
          dataTypes: 'String',
          option: 'center / left / right',
          default: 'center'
        }
      ]
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

</style>
