<template>
    <span class="remo-statistic">
      <span class="unit" v-if="unit !==''">{{unit}}</span>
      <i v-if="prefix!==''" class="remoi" :class="`${prefix}`" :style="{'color': iconColor !== '' ? iconColor : ''}" />
      <span class="int" :style="{'fontSize': fontSize !== '' ? fontSize : '', 'color': fontColor !== '' ? fontColor : ''}">{{intValue}}</span>
      <span class="float">{{floatValue.trim()}}</span>
      <i v-if="suffix!==''" class="remoi" :class="`${suffix}`" :style="{'color': iconColor !== '' ? iconColor : ''}" />
    </span>
</template>

<script>
export default {
  name: 'ReStat',
  props: {
    value: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: ''
    },
    decimal: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  // computed()有数据就执行计算
  computed: {
    intValue: {
      get () {
        console.log(this.intCheck(this.value))
        return this.intCheck(this.value)
      },
      set (newValue) {
        this.value = newValue
      }
    },
    floatValue: {
      get () {
        if (this.decimal) {
          return this.floatCheck(this.value)
        } else {
          return ''
        }
      },
      set (newValue) {
        this.value = newValue
      }
    }
  },
  // watch负责监视传递数据发生变化才执行
  // watch: {
  //   value: function (newvalue) {
  //     this.int = this.intCheck(newvalue)
  //     this.float = this.floatCheck(newvalue)
  //   }
  // },
  methods: {
    intCheck (value) {
      const valueArr = value.split('.')
      const arr = valueArr[0].split('')
      if (arr.length > 3) {
        const b = arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1]
        let a = ''
        for (let i = 0; i < arr.length - 3; i++) {
          a += arr[i]
        }
        return a + ',' + b.trim()
      } else {
        let a = ''
        for (let i = 0; i < arr.length; i++) {
          a += arr[i]
        }
        return a.trim()
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
  .int {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-right: -6px;
  }
  .float {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .unit{
    padding-right: 4px;
    font-size: 14px;
    font-weight: 500;
  }
  .remoi{
    padding-right: 1px;
    font-weight: 600;
  }
}
</style>
