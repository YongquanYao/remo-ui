<template>
    <div class="demo-block">
        <div class="header">
          <span class="big" v-if="header !== ''">{{header}}</span>
          <span class="small" v-if="title !== ''">{{title}}</span>
          <span class="desc" v-if="desc !== ''">{{desc}}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'demoBlock',
  props: {
    title: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.demo-block{
  margin: 30px auto 60px;
  .header{
    font-weight: 450;
    margin: 20px 0 10px;
    .big{
      font-size: 25px;
    }
    .small{
      font-size: 19px;
    }
    .desc{
      display: block;
      font-size: 15px;
      line-height: 40px;
      color:rgb(77, 88, 128);
      font-weight: 350;
    }
  }
}
</style>
