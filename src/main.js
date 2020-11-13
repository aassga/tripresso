//improt css vue 放此處 排列為 VUE => JS => CSS
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '../css/spaces.css'
//improt css vue 放此處 排列為 VUE => JS => CSS

//使用需用到的命名 放此處
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)
//使用需用到的命名 放此處

Vue.config.productionTip = false

new Vue({
  VueResource,
  render: h => h(App),
}).$mount('#app')