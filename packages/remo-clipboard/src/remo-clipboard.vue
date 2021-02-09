<template>
  <re-button @click="copyFunction" :type="type">{{text}}
    <textarea class="clipFakeInput" id="clipFakeInput">这是幕后黑手</textarea>
  </re-button>
</template>

<script>
export default {
  name: 'ReClipboard',
  props: {
    target: {
      type: String,
      default: 'remo-clipboard'
    },
    text: {
      type: String,
      default: 'Copy'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // 复制需要用一个text-area做承接，把要复制的内容放进去，然后再做.select()
    copyFunction () {
      let textElement = document.getElementById(this.target)
      /* Select the text field */
      console.log(textElement.innerText)
      // 不是节点 是输入框
      if (textElement.innerText === '') {
        textElement.select()
        textElement.setSelectionRange(0, 99999) /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand('copy')
        /* Alert the copied text */
        alert('Copied the text: ' + textElement.value)
        return
      }
      const fakeInput = document.getElementById('clipFakeInput')
      fakeInput.value = textElement.innerText
      fakeInput.select()
      fakeInput.setSelectionRange(0, 99999) /* For mobile devices */
      /* Copy the text inside the text field */
      document.execCommand('copy')
      /* Alert the copied text */
      alert('Copied the text: ' + fakeInput.value)
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
  top: 3px;
  width: 3px;
  height: 8px;
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
  width: 7px;
  height: 7px;
  left: 5px;
  top: 5px;
}

.checkbox .disable{
  cursor: not-allowed;
}
.clipFakeInput{
  display: none;
}
</style>
