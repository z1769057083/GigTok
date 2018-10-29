// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import '@/assets/less/reset.less'
import '@/assets/less/animate.css'
import {getCookie} from '../static/cookie.js'
import {vueTouch} from '../static/touch.js'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false;
Vue.directive("tap",{
    bind:function(el,binding){
        new vueTouch(el,binding,"tap");
    }
});
Vue.directive("swipe",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipe");
    }
});
Vue.directive("swipeleft",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipeleft");
    }
});
Vue.directive("swiperight",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swiperight");
    }
});
Vue.directive("swipedown",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipedown");
    }
});
Vue.directive("swipeup",{
    bind:function(el,binding){
        new vueTouch(el,binding,"swipeup");
    }
});
Vue.directive("longtap",{
    bind:function(el,binding){
        new vueTouch(el,binding,"longtap");
    }
});
    /* eslint-disable no-new */

const i18n = new VueI18n({
    locale: getCookie('PLAY_LANG','zh'),
    messages: {
        'zh': require('../static/zh.js'),
        'en': require('../static/en.js')
    }
})

export default new Vue({
    el: '#app',
    router,
    i18n,
    components: {
        App
    },
    template: '<App/>'
})