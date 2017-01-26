import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

import * as firebase from 'firebase';

import VueFire from 'vuefire';
import localFirebase from './init/firebase';
window.firebaseapp = firebase.initializeApp(localFirebase.config);
window.firedb = window.firebaseapp.database();

Vue.use(VueFire);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

if (process.env.NODE_ENV !== '"production"') {
	Vue.config.devtools = true;
}

import App from './App.vue';
import store from './init/store';
import routes from './init/routes';
import mixins from './init/mixins';

Vue.component('App', App);

export default new Vue({
	store,
	el: '#root',
	router: new VueRouter({ routes }),
	methods: mixins

});
