const mixins = {
	getClass: (name) => {


		const input = name.split(' ');
		const output = [];
		const root = window.root;
		const missedClassNames = [];


		input.filter((item, key) => {
			const inputName = item;
			const moduleName = root.$children[0].$style[item];


			if (moduleName) {
				output.push(root.$children[0].$style[inputName]);
			}

			if (!moduleName) {
				missedClassNames.push(inputName);
			}

		});

		if (missedClassNames.length) {
			console.error(`Unable to reach class: %c${missedClassNames.join(' ')}`, 'color: blue');
		}

		return output.join(' ');
	}
};



export default mixins;
