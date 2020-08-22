// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCarousel from 'vue-carousel';
import { store } from './store/store'
import VueLazyload from 'vue-lazyload'
export const eventBus = new Vue();
Vue.use(VueLazyload)
Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(ElementUI);
// Vue.use(VueLazyload)
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'https://screenshotlayer.com/images/assets/placeholder.png',
//   loading: 'https://screenshotlayer.com/images/assets/placeholder.png',
//   attempt: 1
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
