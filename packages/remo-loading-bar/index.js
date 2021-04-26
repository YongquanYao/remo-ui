import Vue from 'vue'
import ReLoadingBar from './src/remo-loading-bar.vue'

let LoadingBarModel = Vue.extend(ReLoadingBar)

let timer = null
let removeTimer = null

let gobalLoadingBar = () => {
  return new LoadingBarModel()
}

LoadingBarModel.prototype.config = function (options) {
  Object.keys(options).forEach((key) => {
    if (key === 'isError' || key === 'totalProgress') {
      return
    }
    this[key] = options[key]
  })
}

LoadingBarModel.prototype.init = function () {
  clearTimeout(timer)
  this.totalProgress = 0
  this.isError = false
  this.vm = this.$mount()
  document.body.appendChild(this.vm.$el)
  return this
}

LoadingBarModel.prototype.start = function () {
  this.init()
  timer = setInterval(() => {
    if (this.totalProgress < 90) {
      this.totalProgress += (this.percentNum || Math.random()) * this.speed
    }
  }, 100)
}

LoadingBarModel.prototype.end = function () {
  timer || this.init()
  this.totalProgress = 100
  clearTimeout(removeTimer)
  removeTimer = setTimeout(() => {
    clearTimeout(timer)
    timer = null
    document.body.removeChild(this.vm.$el)
  }, 200)
}

LoadingBarModel.prototype.error = function () {
  this.end()
  this.totalProgress = 100
  this.isError = true
}

export default gobalLoadingBar()
