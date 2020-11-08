<template>
  <div class="example_content">
    <div class="container">
    <h2>remoUI - Tip</h2>
      <re-tip>GreenGreen </re-tip>
      <re-tip color="blue">Blue</re-tip>
      <re-tip color="gray">Gray</re-tip>
      <re-tip color="orange">orange</re-tip>
      <re-tip color="red">red</re-tip>
    </div>
    <div class="container">
      <h2>remoUI - Button</h2>
      <re-button>default</re-button>
      <re-button type="primary">Primary</re-button>
      <re-button type="success">Success</re-button>
      <re-button type="danger" circle @click="tesClick">11</re-button>
      <re-button type="dashed" >dashed</re-button>
      <re-button type="dotted" >dotted</re-button>
    </div>
     <div class="container block">
      <h2>remoUI - Shadow Block</h2>
      <re-block-shadow>Default</re-block-shadow>
      <re-block-shadow mode="light"> Light</re-block-shadow>
      <re-block-shadow mode="deep"> Deep</re-block-shadow>
      <re-block-shadow mode="curve">Curve</re-block-shadow>
      <re-block-shadow mode="sharp">Sharp</re-block-shadow>
      <re-block-shadow width="550px" height="150px" >Customisze 550px(W) 150px(H)</re-block-shadow>
    </div>
    <div >
      <h2>remoUI - Input</h2>
      <re-input v-model="input"/>
      <span style="margin-left:20px" >{{input}}</span>
      <re-input v-model="input1" pattern='frame'/>
      <span style="margin-left:20px">{{input1}}</span>
    </div>
     <div >
      <h2>remoUI - Divider</h2>
      <p>Normal horizontal divider</p>
      <re-divider/>
      <p>Normal horizontal divider</p>
      <p>Normal vertical divider<re-divider direction="vertical"/>Normal vertical divider</p>
      <re-divider contentPosition="left">
          Left
      </re-divider>
      <re-divider contentPosition="right">
        right
      </re-divider>
      <re-divider>
        Center normal
      </re-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemoUiDemo',
  data () {
    return {
      input: '',
      input1: ''
    }
  },
  methods: {
    tesClick () {
      alert('1')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-left: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.example_content{
  display: flex;
  flex-wrap: wrap;
}
.container{
  margin: 0 10px;
  padding: 10px;
}
.block div{
    margin-top: 15px;
    text-align: center;
}
.example_content div{
   margin-right:20px;
}
</style>
