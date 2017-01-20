import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//import VueTouch from 'vue-touch';

import store from './store';
import routes from './routes';
import App from './App.vue';

import mixins from './_mixins';

Vue.use(VueResource);
Vue.use(VueRouter);
//Vue.use(VueTouch);


if (process.env.NODE_ENV !== '"production"') {
	Vue.config.devtools = true;
}


Vue.component('App', App);

const router = new VueRouter({ routes });
// register main app

const root = new Vue({
	store,
	el: '#root',
	router,
	methods: mixins
});

window.root = root;

export default root;
