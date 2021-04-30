<template>
    <div>
      <re-backtop></re-backtop>
        <demo-block title="About Remo-UI" desc="" type='normal'>
            <div class="about">
                <p>Just come up in mind having my own UI tool-kit ヾ(◍°∇°◍)ﾉﾞ.</p>
                <p>Project is on going maintance and build.</p>
                <p>Feel free to leave me a message via below email.</p>
                <p>If you think this is cool, give me a star 🌟 in github.</p>
            </div>
        </demo-block>
        <demo-block title="About me" desc="" type='normal'> 
            <div class="about">
              游泳圈 / Raymond 🦁<br/><br/>
              Front End Developer | Full Stack Engineer <br/><br/>
              Guangzhou,China 🇨🇳 -  NewYork, USA 🇺🇸
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
