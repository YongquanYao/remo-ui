<template>
  <div @click="handleClose" class="re-collapse" :class="{'re-collapse-active':show === true, 're-collapse-inactive':show === false, }" >
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ReCollapse',
  props: {
    show: {
      type: Boolean,
      defaule: false
    },
    bodyClose: {
      type: Boolean,
      defaule: true
    }
  },
  methods: {
    handleClose () {
      if (this.bodyClose) {
        this.$emit('update:show', false)
        return null
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.re-collapse{
  cursor: pointer;
  height: 0;
  overflow: hidden;
   visibility: hidden;
   opacity: 0;
   transition: opacity 0.9s ease-in-out;
}
.re-collapse-active{
  visibility: visible;
  opacity: 1;
  height: auto;
  opacity: 1;
}
</style>
