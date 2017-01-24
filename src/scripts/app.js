import 'babel-polyfill';

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(Vuex);
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


import lodash from 'lodash';
window._ = lodash();


import store from './init/store';
import routes from './init/routes';

import mixins from './init/mixins';

import App from './App.vue';
import Searchbox from './components/searchbox.vue';

if (process.env.NODE_ENV !== '"production"') {
	Vue.config.devtools = true;
}


Vue.component('App', App);
Vue.component('searchbox', Searchbox);

// register main app
// eslint-disable no-new

const root = new Vue({
	store,
	el: '#root',
	router: new VueRouter({ routes }),
	methods: mixins

});

window.root = root;

export default root;
