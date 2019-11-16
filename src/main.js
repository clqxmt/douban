import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "@common/components";
import "./lib/loading";

import VueTouch from 'vue-touch';
//使用插件         组件名称
Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
