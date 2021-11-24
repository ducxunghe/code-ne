import state from './state'; // eslint-disable-line

export default {
	activePreloading(state: { isActive: boolean }) {
		state.isActive = true;
	},
	deActivePreloading(state: { isActive: boolean }) {
		state.isActive = false;
	},
};
