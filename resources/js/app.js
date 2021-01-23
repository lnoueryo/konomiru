require('./bootstrap');

window.Vue = require('vue');
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// VueRouter
import VueRouter from 'vue-router';
import router from './routes';

// Vuex
import Vuex from 'vuex';
import store from './store/store';

// Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Vuetify Icon
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

Vue.component('index', require('./Index').default);



const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
        }
    })
});