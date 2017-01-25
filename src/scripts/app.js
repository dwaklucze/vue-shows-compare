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

import store from './init/store';
import routes from './init/routes';

import mixins from './init/mixins';

import App from './App.vue';
import Searchbox from './components/searchbox.vue';
import SearchboxRES from './components/searchbox_result.vue';

if (process.env.NODE_ENV !== '"production"') {
	Vue.config.devtools = true;
}


Vue.component('App', App);
// register main app
/* eslint-disable no-new */

Vue.component('searchbox-result', SearchboxRES);
Vue.component('searchbox', Searchbox);

export default new Vue({
	store,
	el: '#root',
	router: new VueRouter({ routes }),
	methods: mixins

});
