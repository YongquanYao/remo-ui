<template>
    <span class="status-indicator" :[status]="true" :pulse="animation"></span>

</template>

<script>
export default {
  name: 'ReStatusLight',
  props: {
    status: {
      type: String,
      default: '',
      validator (value) {
        if (value === '') return true
        return ['active', 'positive', 'intermediary', 'negative'].indexOf(value) !== -1
      }
    },
    animation: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes status-indicator-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(216, 226, 233, .5)};
  70%  { box-shadow: 0 0 0 10px rgba(216, 226, 233, 0)};
  100% { box-shadow: 0 0 0 0 rgba(216, 226, 233, 0)};
}

@keyframes status-indicator-pulse-active {
  0%   { box-shadow: 0 0 0 0  rgba(0, 149, 255, .5)};
  70%  { box-shadow: 0 0 0 10px rgba(0, 149, 255, 0)};
  100% { box-shadow: 0 0 0 0 rgba(0, 149, 255, 0)};
}

@keyframes status-indicator-pulse-positive {
  0%   { box-shadow: 0 0 0 0 rgba(75, 210, 143, .5)};
  70%  { box-shadow: 0 0 0 10px rgba(75, 210, 143, 0)};
  100% { box-shadow: 0 0 0 0 rgba(75, 210, 143, 0)};
}

@keyframes status-indicator-pulse-intermediary {
  0%   { box-shadow: 0 0 0 0 rgba(255, 170, 0, .5)};
  70%  { box-shadow: 0 0 0 10px  rgba(255, 170, 0, 0)};
  100% { box-shadow: 0 0 0 0 rgba(255, 170, 0, 0)};
}

@keyframes status-indicator-pulse-negative {
  0%   { box-shadow: 0 0 0 0 rgba(255, 77, 77, .5)};
  70%  { box-shadow: 0 0 0 10px rgba(255, 77, 77, 0)};
  100% { box-shadow: 0 0 0 0 rgba(255, 77, 77, 0)};
}

.status-indicator {
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: rgb(216, 226, 233);
}

.status-indicator[pulse] {
  animation-name: status-indicator-pulse;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: 0;
  animation-fill-mode: none;
}

.status-indicator[active] {
  background-color: rgb(0, 149, 255);;
}

.status-indicator[active][pulse] {
  animation-name: status-indicator-pulse-active;
}

.status-indicator[positive] {
  background-color: rgb(75, 210, 143);;
  animation-name: status-indicator-pulse-positive;
}

.status-indicator[positive][pulse] {
  animation-name: status-indicator-pulse-positive;
}

.status-indicator[intermediary] {
  background-color: rgb(255, 170, 0);;
}

.status-indicator[intermediary][pulse] {
  animation-name: status-indicator-pulse-intermediary;
}

.status-indicator[negative] {
  background-color: rgb(255, 77, 77);
  animation-name: status-indicator-pulse-negative;
}

.status-indicator[negative][pulse] {
  animation-name: status-indicator-pulse-negative;
}
</style>
