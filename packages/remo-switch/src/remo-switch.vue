<template>
  <div>
    <label class="switch" >
        <input type="checkbox" :checked="value" :disabled="disable" @click="e => handleCheck(e)" >
        <span :class="{ 'slider': true, 'rounded': type === 'round', 'disable': disable }"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ReSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'rect'
    },
    activeColor: {
      type: String,
      default: '#2196F3'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleCheck (e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

// check
.slider.rounded {
  border-radius: 30px;
}

.slider.rounded:before {
  border-radius: 50%;
}
// disable

.slider.disable {
  background-color: rgba(211, 211, 211, 0.425);
  cursor: not-allowed;
}
input:checked + .slider.disable {
  background-color: #60aff0;
  cursor: not-allowed;
}
</style>
