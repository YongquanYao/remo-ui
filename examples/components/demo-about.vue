<template>
    <div>
      <re-backtop></re-backtop>
        <demo-block title="About Remo-UI" desc="">
            <p>Just come up in mind having my own UI tool-kit ヾ(◍°∇°◍)ﾉﾞ.</p>
            <p>Feel free to leave me a message via below email.</p>
        </demo-block>
        <demo-block title="About me" desc="">
            <a href="https://github.com/YongquanYao"><i class="remoi remo-github-fill"></i></a>
            <a href="mailto:hi@raymondyao.info"><i class="remoi remo-mail"></i></a>
        </demo-block>
    </div>
</template>

<script>
import demoBlock from './demo-block'
export default {
  name: 'AboutDemo',
  components: {
    demoBlock
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.remo-github-fill{
  font-size: 22px;
  padding-right:10px;
  color: #000;
}
.remo-mail{
  font-size: 22px;
  padding: 0 10px;
  color: #000;
}
a{
  text-decoration: none;
}
p{
  font-weight: 400;
}

</style>
