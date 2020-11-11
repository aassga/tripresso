//improt css vue 放此處 排列為 VUE => JS => CSS
import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueResource from 'vue-resource'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../css/main.css'

//improt css vue 放此處 排列為 VUE => JS => CSS

//使用需用到的命名 放此處
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

Vue.use(ElementUI)
Vue.use(VueResource)
//使用需用到的命名 放此處

Vue.config.productionTip = false

new Vue({
  // BootstrapVue,
  // IconsPlugin,
  VueResource,
  render: h => h(App),
}).$mount('#app')