<<<<<<< HEAD
import Vue from 'vue';
import App from './App.vue';
import router from './router';
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
>>>>>>> 43315f135e2740ba6028db3c4fcfafaf34d718b7
import "@common/components";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
