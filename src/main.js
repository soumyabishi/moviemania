import Vue from 'vue'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'

import {routes} from './router';


import VueLazyload from 'vue-lazyload';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLazyload, {
  preLoad: 2,
  loading: '/dist/img-loader.gif',
  listenEvents: [ 'transitionend' ]
});

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#57C5CB',
  failedColor: 'red',
  height: '2px'
})






const router = new VueRouter({

    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },

    mode: 'history',
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
