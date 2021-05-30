<template>
    <span class="remo-breadcrumb-item">
        <span
            :class="['re-breadcrumb__inner', to ? 'is-link' : '']"
            ref="link"
            role="link">
            <slot></slot>
        </span>
        <i v-if="icon_class" class="remoi remo-breadcrumb-separator" :class="icon_class"></i>
        <span v-else class="remo-breadcrumb-separator">{{separator}}</span>
    </span>
</template>

<script>
export default {
  name: 'ReBreadcrumbItem',
  inject: ['remoBreadcrumb'],
  props: {
    to: {
      type: String,
      default: ''
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      separator: '',
      icon_class: ''
    }
  },
  mounted () {
    this.separator = this.remoBreadcrumb.separator
    console.log(this.remoBreadcrumb.separator)
    this.icon_class = this.remoBreadcrumb.icon_class
    const link = this.$refs.link
    link.setAttribute('role', 'link')
    link.addEventListener('click', _ => {
      const { to, $router } = this
      if (!to || !$router) return
      this.replace ? $router.replace(to) : $router.push(to)
    })
  }
}
</script>

<style lang="scss">
// .remo-breadcrumb-item{

// }
.remo-breadcrumb-separator{
  margin: 0 9px;
  font-weight: 700;
  color: #c0c4cc;
}
.remo-breadcrumb-item:last-child .remo-breadcrumb-separator{
  display: none;
}
.remo-breadcrumb-item{
  cursor: pointer;
  .remoi{
    font-size: 13px;
  }
  a{
    text-decoration: none;
    color: #2c3e50;
    font-weight: 700;
    &:hover{
      color: #409EFF;
    }
  }
}
</style>
