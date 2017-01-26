// src/scripts/store.js

import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import mixins from './mixins';

Vue.use(Vuex);

// the root, initial state object
const state = {
	User: {
		search: {}
	}
};

// define possible getters
const getters = {
	getSearchResults() {
		return state.User.search;
	},
	countSelections()  {
		return state.User.search.length;
	}
};

// define the possible mutations that can be applied to our state
const mutations = {
	assign(s, data) {
		const desired = data.result;

		desired.Writer = mixins.cleanAndTrim(desired.Writer);
		desired.Actors = mixins.cleanAndTrim(desired.Actors);

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
