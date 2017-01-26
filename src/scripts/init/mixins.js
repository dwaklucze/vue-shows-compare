const mixins = {
	debounce(func, wait, immediate) {
		let timeout = null;

		return () => {

			/* eslint-disable one-var */

			const context = this;
			const args = arguments;

			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			const callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	},
	cleanAndTrim(str) {
		return str.replace(/ *\([^)]*\) */g, '').split(',')
		.map(item => _.trim(item));
	}
};



export default mixins;
