<template>
  <div class="demo-block">
      <div class="header">
        <span class="big" v-if="header !== ''">{{header}}</span>
        <span class="small" v-if="title !== ''">{{title}}</span>
        <span class="desc" v-if="desc !== ''">{{desc}}</span>
      </div>
      <!-- 用于api table展示的 -->
      <div v-if="type==='normal' || type === 'table'" >
        <slot></slot>
      </div>
      <!-- 用于默认demo展示的，且不是header标题下的demo block -->
      <div
        v-if="type ==='demo' && header === ''"
        @mouseout="arrowAnimation ? hover_animation = false : null"
        @mouseover="arrowAnimation ? hover_animation = true : null"
        class="src-block"
      >
        <div class="source">
          <!-- <slot name="demo" /> -->
          <slot></slot>
        </div>
        <div :style="{ height: code_height + 'px' }" class="code">
          <pre v-highlightjs>
            <slot name="code" />
          </pre>
        </div>
        <div @click="showCode()" class="demo-block-control">
          <i
            :class="{
              hovering_i: hover_animation || !arrowAnimation,
              'remoi remo-down': code_height === 0,
              'remoi remo-up': code_height !== 0
            }"
            class="remo"
          ></i>
          <span :class="{ hovering_span: hover_animation || !arrowAnimation }" v-if="locale==='cn'">
            {{
            code_height === 0 ? '显示代码' : '隐藏代码'
            }}
          </span>
           <span :class="{ hovering_span: hover_animation || !arrowAnimation }" v-if="locale==='en'">
            {{
            code_height === 0 ? 'Show code' : 'Hide code'
            }}
          </span>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'demoBlock',
  props: {
    type: {
      type: String,
      default:'demo'
    },
    title: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '100'
    },
    arrowAnimation: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      hover_animation: false,
      code_height: 0,
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  methods: {
    showCode() {
      if (this.code_height === 0) {
        this.code_height = this.height
      } else {
        this.code_height = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-block{
  margin: 30px auto 60px;
  // overflow-x: scroll;
  .header{
    font-weight: 450;
    margin: 20px 0 10px;
    .big{
      font-size: 25px;
    }
    .small{
      font-size: 19px;
    }
    .desc{
      display: block;
      font-size: 15px;
      line-height: 40px;
      color:rgb(77, 88, 128);
      font-weight: 350;
    }
  }
  .src-block {
    width: 100%;
    margin-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    .source {
      position: relative;
      padding: 24px;
    }
    .code {
      height: 0;
      background: #282c34;
      border-top: 1px solid #eaeefb;
      transition: height 0.2s;
      overflow: hidden;
      padding-left: 20px;
      font-size: 0.8725rem;
    }
    .demo-block-control {
      cursor: pointer;
      position: relative;
      margin-top: -1px;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-top: 1px solid #eaeefb;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      color: #d3dce6;
      &:hover {
        color: #409eff;
        background-color: #f9fafc;
      }
      i {
        display: inline-block;
        position: relative;
        font-size: 16px;
        line-height: 44px;
        transition: 0.3s;
      }
      span {
        display: inline-block;
        position: absolute;
        transform: translateX(10px);
        font-size: 14px;
        line-height: 44px;
        transition: 0.3s;
        opacity: 0;
      }
      .hovering_i {
        transform: translateX(-40px);
      }
      .hovering_span {
        transform: translateX(-30px);
        opacity: 1;
      }
    }
  }
}
</style>
