<template>
    <div>
      <span
        :class="{'remo-tip-green': color === 'default' || color === 'green', 'remo-tip-blue': color === 'blue', 'remo-tip-orange': color === 'orange', 'remo-tip-red': color === 'red', 'remo-tip-gray': color === 'gray' }"
        class="remo-tip"
        :style="color !== 'default'  && color !== 'green' && color !== 'blue' && color !== 'red' && color !== 'orange' && color !== 'gray' ? customizeColor : ''"
        >
        <!-- 使用插槽，供父组件传递按钮名字 -->
        <slot></slot>
      </span>
    </div>
</template>

<script>
export default {
  name: 'ReTip',
  props: {
    // 接收参数：type
    color: {
      // 参数类型：String
      type: String,
      // 默认值为 default
      default: 'default'
    }
  },
  data () {
    return {
      customizeColor: {
        backgroundColor: '#fffff',
        border: `1px solid ${this.color}`,
        borderLeft: `6px solid ${this.color}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.remo-tip{
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin: 10px 0px;

  font-size: 15px;
  line-height: 25px;

  border-radius: 4px;
  outline: none;
  font-weight: 400;
  // white-space: nowrap;
  word-wrap:break-word;
  word-break:break-all;
}
.remo-tip-green{
  background-color: #ecffec;
  border-left: 5px solid #41d189;
}
.remo-tip-blue{
  background-color: #ecf8ff;
  border-left: 5px solid #50bfff;
}
.remo-tip-red{
  background-color: #ffecec;
  border-left: 5px solid #ff5050;
}
.remo-tip-orange{
  background-color: #fff5ec;
  border-left: 5px solid #ffb350;
}
.remo-tip-gray{
  background-color: #f7f7f7;
  border-left: 5px solid #929191;
}
</style>
