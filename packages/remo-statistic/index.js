import ReStat from './src/remo-statistic'

ReStat.install = Vue => {
  Vue.component(ReStat.name, ReStat)
}
export default ReStat
