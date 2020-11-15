//improt css vue 放此處 排列為 VUE => JS => CSS
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import moment from "vue-moment"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//improt css vue 放此處 排列為 VUE => JS => CSS

//使用需用到的命名 放此處
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)
Vue.use(moment)

//使用需用到的命名 放此處

Vue.config.productionTip = false

new Vue({
  VueResource,
  render: h => h(App),
}).$mount('#app')