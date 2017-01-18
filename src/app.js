import Vue from 'vue';
import template from './templates/index.jade';
import styles from './styles/main.scss';

if (process.env.NODE_ENV !== '"production"') {
	Vue.config.devtools = true;
}

// register
Vue.component('my-component', {
	styles,
	template
})

export default new Vue({
	el: '#root',
	data: {
		message: 'You loaded this page on ' + new Date()
	}
});
