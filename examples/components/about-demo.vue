<template>
    <div class="scorll_hidden">
      <re-backtop></re-backtop>
        <demo-block title="About Remo-UI" desc="" type='normal' class="scorll_hidden">
            <div class="about scorll_hidden ">
                <p>Just come up in mind having my own UI tool-kit ヾ(◍°∇°◍)ﾉﾞ. </p>
                <p>Platform is on going update and develop.</p>
                <p>Feel free to leave me a message via below email.</p>
                <p>If you think this is cool, give me a star 🌟 &nbsp;in github.</p>
            </div>
        </demo-block>
        <demo-block title="About me" desc="" type='normal' class="scorll_hidden">
            <div class="about scorll_hidden">
              游泳圈 / Raymond 🦁&nbsp; / Yongquan Yao<br/><br/>
              Full Stack Developer || Front End Developer <br/><br/>
              Guangzhou, China 🇨🇳 &nbsp; ✈️ &nbsp; New York, United State 🇺🇸
              <br/>
              <br/>
              Contact: &nbsp;&nbsp;
              <a href="https://github.com/YongquanYao"><i class="remoi remo-github-fill"></i></a>
              <a href="mailto:hi@raymondyao.info"><i class="remoi remo-mail"></i></a>
              </div>
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
* {
  overflow-y: scroll;
}
.scorll_hidden {
  overflow: hidden;
}
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
  overflow: hidden;
}
.about{
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
}
</style>
