import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './route';
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode : "history"
});
Vue.use(VueSocialSharing);



Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
