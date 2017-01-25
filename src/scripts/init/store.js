// src/scripts/store.js

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import _ from 'lodash';

// the root, initial state object
const state = {
	User: {
		search: {}
	}
};

// define possible getters
const getters = {
	getSearchResults: state => {
		console.log(state);
	}
};

// define the possible mutations that can be applied to our state
const mutations = {
	assign(s, data) {
		const desired = s[data.collection].search[data.variable] = {};

		Object.assign(desired, data.result);
		desired.Writer = desired.Writer.split(',');
		desired.Actors = desired.Actors.split(',');
		/* eslint-disable no-magic-numbers */
		desired.imdbRating = ((desired.imdbRating * 10) / 2);

		return desired;
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
