import Vue from 'vue'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'

import {routes} from './router';


Vue.use(VueRouter);
Vue.use(VueResource);


import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
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
