// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import '@/assets/less/reset.less'
import '@/assets/less/animate.css'
import {getCookie} from '../static/cookie.js'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false
    /* eslint-disable no-new */

const i18n = new VueI18n({
    locale: getCookie('PLAY_LANG','zh'),
    messages: {
        'zh': require('../static/zh.js'),
        'en': require('../static/en.js')
    }
})

new Vue({
    el: '#app',
    router,
    i18n,
    components: {
        App
    },
    template: '<App/>'
})