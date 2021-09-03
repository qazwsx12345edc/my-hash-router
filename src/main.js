import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import myrouter from "./router/index"

Vue.prototype.$myrouter = myrouter

Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  myrouter,
  render: h => h(App),
}).$mount('#app')
