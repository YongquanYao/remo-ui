  <template>
  <div class="w__loading-bar">
    <div
      class="w__loading-bar--bar"
      :class="isError ? 'w__loading-bar--error' : ''"
      role="bar"
      :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)'}">
      <div class="w__loading-bar--peg"></div>
    </div>
    <div class="w__loading-bar--spinner" role="spinner" v-if="showSpinner">
      <div class="spinner-icon" :class="isError ? 'spinner-icon--error' : ''">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReLoadingBar',
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      speed: 5,
      easing: 'linear',
      percentNum: 0,
      totalProgress: 0,
      showSpinner: true,
      isError: false
    }
  }
}
</script>

<style lang="scss" scoped>
.w__loading-bar {
  .w__loading-bar--bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 9999;
    transition: all 200ms ease;
    transform: translate3d(-100%, 0, 0);
    background: #3FAAF5;
  }
  .w__loading-bar--error {
    background: #ff4949;
  }
  .w__loading-bar--peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #ffdc00, 0 0 5px #ffdc00;
    opacity: 1.0;
    transform: rotate(3deg) translate(0px,-4px);
  }
  .w__loading-bar--spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
    .spinner-icon{
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #3FAAF5;
      border-left-color: #3FAAF5;
      border-radius: 50%;
      animation: spinner 400ms linear infinite;
    }
    .spinner-icon--error{
      border-top-color: #ff4949;
      border-left-color: #ff4949;
    }
  }
}
@keyframes spinner{
  0%{
    transform:rotate(0)
  }
  100%{
    transform:rotate(360deg)
  }
}
</style>
