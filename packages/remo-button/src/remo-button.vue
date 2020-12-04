<template>
  <button
    class="remo-button"
    :class="{'remo-button-primary': type === 'primary' || type === 'customize', 'remo-button-success': type === 'success', 'remo-button-danger': type === 'danger', 'remo-button-warning': type === 'warning', 'remo-button-dashed':type === 'dashed', 'remo-button-dotted':type === 'dotted', 'ripple':animation,'disabled':disabled,'circle':circle,'block':block, }"
    :disabled="disabled"
    :style="customizeColor"
    @click="click"
  >
   <i
      :class="[icon === '' ? 'remo-question':icon ]"
      class="remoi"
      style="font-size:14px"
      v-if="icon != '' || circle"
    ></i>
  <span class="remo-button-span" v-if="!circle">
      <slot></slot>
  </span>
</button>
</template>

<script>
export default {
  name: 'ReButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    animation: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      customizeColor: {
        backgroundColor: this.color,
        borderColor: this.color
      }
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }

}
</script>

<style lang="scss" scoped>
.remo-button {
  position: relative;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 12px;
  padding: 0 15px;
  height: 32px;
  line-height: 1.6;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  outline: none;
  &:hover,
  &:focus {
    color: #409EFF;
    background-color: #fff;
    border-color: #409EFF;
  }
  i + .remo-button-span {
    margin-left: 5px;
  }
}
.ripple {
  overflow: hidden;
  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    //设置初始状态
    transition: 0s;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    //设置径向渐变
    background-image: radial-gradient(circle, #aaa 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
}
.remo-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: mix(#fff, #67c23a, 20%);
    border-color: mix(#fff, #67c23a, 20%);
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: mix(#fff, #67c23a, 20%);
    border-color: mix(#fff, #67c23a, 20%);
    &:hover,
    &:focus {
      color: #fff;
      background-color: mix(#fff, #67c23a, 50%);
      border-color: mix(#fff, #67c23a, 50%);
    }
  }
}
.remo-button-primary {
  color: #fff;
  background-color: #409EFF;
  border-color: #409EFF;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: mix(#fff, #409EFF, 20%);
    border-color: mix(#fff, #409EFF, 20%);
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: mix(#fff, #409EFF, 50%);
    border-color: mix(#fff, #409EFF, 50%);
    &:hover,
    &:focus {
      color: #fff;
      background-color: mix(#fff, #409EFF, 50%);
      border-color: mix(#fff, #409EFF, 50%);
    }
  }
}
.remo-button-dashed {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
}
.remo-button-dotted {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dotted;
  border-width: 2px;
}
.remo-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: mix(#fff, #f56c6c, 20%);
    border-color: mix(#fff, #f56c6c, 20%);
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: mix(#fff, #f56c6c, 50%);
    border-color: mix(#fff, #f56c6c, 50%);
    &:hover,
    &:focus {
      color: #fff;
      background-color: mix(#fff, #f56c6c, 50%);
      border-color: mix(#fff, #f56c6c, 50%);
    }
  }
}
.remo-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: mix(#fff,#e6a23c, 20%);
    border-color: mix(#fff, #e6a23c, 20%);
  }
  &:after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  }
  &.disabled {
    color: #fff;
    background-color: mix(#fff, #e6a23c, 50%);
    border-color: mix(#fff, #e6a23c, 50%);
    &:hover,
    &:focus {
      color: #fff;
      background-color: mix(#fff, #e6a23c, 50%);
      border-color: mix(#fff, #e6a23c, 50%);
    }
  }
}
.circle {
  padding: 0;
  width: 32px;
  border-radius: 50%;
}
.disabled {
  cursor: not-allowed;
  color: #c0c4cc;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
  &:hover,
  &:focus {
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
</style>
