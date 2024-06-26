import Vue from 'vue'
import { fitChartSize } from './utils/dataUtil'
import App from './App.vue'

// 这样可以在.vue文件中直接使用this.fitChartSize(14)调用,使图表字体、间距、位移等尺寸自适应
Vue.prototype.fitChartSize = fitChartSize
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
