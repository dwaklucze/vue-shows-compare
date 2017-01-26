// src/scripts/store.js

import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
Vue.use(Vuex);

// the root, initial state object
const state = {
	User: {
		search: {}
	}
};

// define possible getters
const getters = {
	getSearchResults: () => {
		return state.User.search;
	}
};

// define the possible mutations that can be applied to our state
const mutations = {
	assign(s, data) {
		const desired = data.result;

		desired.Writer = desired.Writer.replace(/ *\([^)]*\) */g, '').split(',');
		desired.Actors = desired.Actors.replace(/ *\([^)]*\) */g, '').split(',');

		/* eslint-disable no-magic-numbers */
		desired.imdbRating = ((desired.imdbRating * 10) / 2);

		return Vue.set(s.User.search, data.variable, desired);
	}
};
// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
const store = new Vuex.Store({
	state,
	getters,
	mutations
});

export default store;
