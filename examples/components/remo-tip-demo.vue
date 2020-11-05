<template>
  <div>
    <h2>remoUI - Tip</h2>
    <re-tip>
      Green
      Green    
    </re-tip>
    <re-tip color="blue">
      Blue
    </re-tip>
     <re-tip color="gray">
      Gray
    </re-tip>
    <re-tip color="orange">
      orange
    </re-tip>
    <re-tip color="red">
      red
    </re-tip>
  </div>
</template>

<script>
export default {
  name: 'RemoTipDemo',
  data () {
    return {

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
</style>
