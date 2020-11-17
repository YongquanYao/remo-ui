<template>
    <span class="remo-statistic">
      <span>{{intCheck(value) + floatCheck(value)}}</span>
    </span>
</template>

<script>
export default {
  name: 'ReStat',
  props: {
    value: {
      type: String,
      default: null
    }
  },
  method: {
    intCheck (value) {
      const valueArr = value.split('.')
      const arr = valueArr[0].split('')
      if (arr.length > 3) {
        const b = arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1]
        let a = ''
        for (let i = 0; i < arr.length - 3; i++) {
          a += arr[i]
        }
        return a + ',' + b
      }
    },
    floatCheck (value) {
      const valueArr = value.split('.')
      if (valueArr[1] === undefined) {
        return '.00'
      } else {
        const a = valueArr[1].split('')
        return '.' + a[0] + a[1]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.remo-statistic{
  color: rgba(0,0,0,.65);
  line-height: 1.5;
  list-style: none;
  font-variant: tabular-nums;
  font-size: 24px;
}
</style>
