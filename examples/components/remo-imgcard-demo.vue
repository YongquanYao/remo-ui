<template>
    <div>
        <demo-block header="Image Card 图卡">
        </demo-block>
        <demo-block title="基础" desc="展示如下：">
            <re-tip color="blue">敬请期待,开发ing....</re-tip>
        </demo-block>
        <re-img-card >
            <template slot="img">
                <img src="../assets/1.jpg"  alt="">
            </template>
            <template slot="desc">
                <p style="margin-top: 30px">This is description Powered by Remo UI </p>
            </template>
        </re-img-card>
        <re-img-card >
            <template v-slot:img>
                <img src="../assets/2.jpg"  alt="">
            </template>
            <template slot="desc">
                <p style="margin-top: 30px">This is description Powered by Remo UI </p>
            </template>
        </re-img-card>
        <re-img-card >
            <template v-slot:img>
                <img src="../assets/3.jpg" alt="">
            </template>
            <template slot="desc">
                <p style="margin-top: 30px">This is description Powered by Remo UI </p>
            </template>
        </re-img-card>
        <re-img-card >
            <template v-slot:img>
                <img src="../assets/4.jpg" alt="">
            </template>
            <template slot="desc">
                <p style="margin-top: 30px">This is description Powered by Remo UI </p>
            </template>
        </re-img-card>
        <re-img-card >
            <template v-slot:img>
                <img src="../assets/5.jpg" alt="">
            </template>
            <template slot="desc">
                <p style="margin-top: 30px">This is description Powered by Remo UI </p>
            </template>
        </re-img-card><re-img-card >
            <template v-slot:img>
                <img src="../assets/6.jpg" alt="">
            </template>
            <template slot="desc">
                <p style="margin-top: 30px">This is description Powered by Remo UI </p>
            </template>
        </re-img-card>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'RemoInputDemo',
  components: {
    demoBlock
  },  
}
</script>

<style lang="scss" scoped>

</style>