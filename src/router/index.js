import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: resolve => require(['@/pages/Home.vue'], resolve),
    },
     {
             path: '/app',
             name: 'Share',
             component: resolve => require(['@/pages/Share.vue'], resolve),
         },
     ]
});