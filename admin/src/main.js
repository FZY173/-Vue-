import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from  './http'
import echarts from 'echarts'
//
// Vue.prototype.$echarts = echarts




Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
