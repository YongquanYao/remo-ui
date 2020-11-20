<template>
    <div>
        <demo-block header="Image Card 图卡">
        </demo-block>
        <demo-block title="基础" desc="静态展示：">
            <!-- <re-tip color="blue">敬请期待,开发ing....</re-tip> -->
             <re-img-card one="123">
                <template v-slot:img>
                    <img src="../assets/4.jpg" alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px">This is description Powered by Remo UI. </p>
                </template>
            </re-img-card>
            <re-img-card >
                <template v-slot:img>
                    <img src="../assets/5.jpg" alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px">This is description Powered by Remo UI. </p>
                </template>
            </re-img-card>
            <re-img-card >
                <template v-slot:img>
                    <img src="../assets/6.jpg" alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px">This is description Powered by Remo UI. </p>
                </template>
            </re-img-card>
        </demo-block>
        <demo-block title="动态显示" desc="设置type为dynamic：">
             <re-img-card  type="dynamic">
                <template slot="img">
                    <img src="../assets/1.jpg"  alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px">Dynamic image card Powered by Remo UI. </p>
                </template>
            </re-img-card>
            <re-img-card type="dynamic" >
                <template v-slot:img>
                    <img src="../assets/2.jpg"  alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px">Dynamic image card Powered by Remo UI. </p>
                </template>
            </re-img-card>
            <re-img-card type="dynamic">
                <template v-slot:img>
                    <img src="../assets/3.jpg" alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px">Dynamic image card Powered by Remo UI. </p>
                </template>
            </re-img-card>
        </demo-block>
         <demo-block title="自定义" desc="可设置图片高度与右上角icon图标：">
             <re-img-card feature="off">
                <template slot="img">
                    <img src="../assets/8.jpg"  alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px"> Image card without right top feature. </p>
                </template>
            </re-img-card>
            <re-img-card type="static" iconTop="remo-zoomin" iconBottom="remo-delete" >
                <template v-slot:img>
                    <img src="../assets/8.jpg"  alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px"> Personal setting right top feature.</p>
                </template>
            </re-img-card>
            <div style='height: 25px'>

            </div>
            <re-img-card type="static" feature="off">
                <template v-slot:img>
                    <img src="../assets/7.jpg" style='height: 355px'  alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px; width: 330px;"> Personal setting image heght 355px.</p>
                </template>
            </re-img-card>
            <re-img-card type="static">
                <template v-slot:img>
                    <img src="../assets/7.jpg" style='height: 275px'  alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px; width: 250px;"> Personal setting image heght 275px.</p>
                </template>
            </re-img-card>
            <re-img-card type="dynamic">
                <template v-slot:img>
                    <img src="../assets/7.jpg" style='height: 125px'  alt="">
                </template>
                <template slot="desc">
                    <p style="margin-top: 30px"> 125px</p>
                </template>
            </re-img-card>
        </demo-block>
        <demo-block title='API' desc="属性说明如下：">
          <re-table :data="tableData" type="demo"></re-table>
        </demo-block>
        <demo-block title='Slot' desc="插槽：">
          <re-table :data="slotData" type="demo"></re-table>
        </demo-block>

    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoInputDemo',
  components: {
    demoBlock
  },
  data () {
    return {
      tableData: [
        {
          parameter: 'type',
          description: '图片显示类型',
          dataTypes: 'String',
          optional: 'static / dynamic',
          default: 'static'
        },
        {
          parameter: 'feature',
          description: '设置卡片右上角图标显示',
          dataTypes: 'String',
          optional: 'on / off',
          default: 'on'
        },
        {
          parameter: 'iconTop',
          description: '第一个Icon图标',
          dataTypes: 'String',
          optional: '',
          default: 'remo-share'
        },
        {
          parameter: 'iconBottom',
          description: '第二个Icon图标',
          dataTypes: 'String',
          optional: '',
          default: 'remo-heart'
        }
      ],
      slotData: [
        {
          parameter: 'img',
          description: '显示的图片, 可设定高度',
          dataTypes: '',
          optional: '',
          default: '250px'
        },
        {
          parameter: 'desc',
          description: '显示的描述',
          dataTypes: '',
          optional: '',
          default: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p{
    width: 230px;
    line-height: 22px;
}
</style>
