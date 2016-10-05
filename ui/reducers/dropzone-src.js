const dropzoneSrc = (state = {}, action) => {
	switch (action.type) {

		case 'DROPZONE_SRC_DISABLED':
			return Object.assign(state, {
				disabled: action.value
			});

		case 'DROPZONE_SRC_HOVERING':
			return Object.assign(state, {
				hovering: action.value
		});

		case 'DROPZONE_SRC_PATH':
			return Object.assign(state, {
				path: action.path,
				isFile: action.isFile
			});

		default:
			return state;

	}
};

module.exports = dropzoneSrc;
