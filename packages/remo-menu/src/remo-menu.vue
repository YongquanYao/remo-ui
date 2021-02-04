<template>
    <div>
      <ul class="menu-list">
        <li v-for="(item, index) of menuList" :key="index" @click="hadnleActive(index)" >
            <a :href="item.link" :class="{'active_link': activeIndex === index ? true: false}"><i class="remoi" :class="`remo-${item.icon}`"></i>{{item.name}}</a>
            <span :class="{'active': activeIndex === index ? true: false}"></span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ReMenu',
  props: {
    menuList: {
      type: Array,
      default: () => {
        return []
      }
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  methods: {
    hadnleActive (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-list{
  display:flex;
  list-style: none;
  border-bottom: 1px solid #ebebeb;
  &:first-child{
      padding-left: 0px;
  }
  li {
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:first-child{
      padding-left: 0px;
    }
    a {
      padding: 0 10px;
      text-decoration: none;
      font-size: 15px;
      padding-right: 15px;
      color: #000;
      i {
        padding-right: 5px;
      }
    }
    .active_link{
       color: #409EFF;
       transition: 1s;
    }
    .active{
      margin-top: 10px;
      height: 2px;
      background: #409EFF;
      transition: 1s;
    }
    span{
      margin-top: 10px;
      height: 2px;
      transition: 1s;
    }
  }
}
</style>
