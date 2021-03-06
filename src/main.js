
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from './store'
import VueTouch from "vue-touch"
import "@common/components"
import "@common/filter"
import "@common/components";
import "@utils/mock.js"

import "./lib/loading/index.js";

Vue.config.productionTip = false

Vue.use(VueTouch,{name:"v-touch"})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
