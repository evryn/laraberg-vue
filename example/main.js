import Vue from 'vue'
import App from './App'

import './plugins/laraberg-vue/index'

const app = new Vue({
  el: '#app',
  render: h => h(App),
})
