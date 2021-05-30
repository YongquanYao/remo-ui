<template>
    <div class="remo-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ReBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    icon_class: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      remoBreadcrumb: this
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.remo-breadcrumb{
  font-size: 15px;
  line-height: 1;
}
</style>
