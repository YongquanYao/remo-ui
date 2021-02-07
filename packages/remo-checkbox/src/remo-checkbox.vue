<template>
  <div>
    <label class="checkbox" >
        <input type="checkbox" :checked="value" :disabled="disable" @click="e => handleCheck(e)" >
        <span :class="{ 'checkmark': true, 'rounded': type === 'round', 'disable': disable }"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ReCheckbox',
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
.checkbox {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide default HTML checkbox */
.checkbox input {
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
  position: absolute;
}

/* The slider */
.checkmark {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  -webkit-transition: .4s;
  transition: .4s;
}

.checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 7px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox .rounded{
  border-radius: 50%;
}

.checkbox .checkmark.rounded:after{
  border-radius: 50%;
  background: white;
  width: 9px;
  height: 9px;
  left: 4px;
  top: 4px;
}

.checkbox .disable{
  cursor: not-allowed;
}
</style>
