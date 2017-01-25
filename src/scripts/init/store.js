// src/scripts/store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// the root, initial state object
const state = {
	User: {
		search: {}
	}
};

// define the possible mutations that can be applied to our state
const mutations = {
	assign(s, data) {
		const desired = s[data.collection].search[data.variable] = {};

		Object.assign(desired, data.result);
	}
};

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
const store = new Vuex.Store({
	state,
	mutations
});

export default store;
