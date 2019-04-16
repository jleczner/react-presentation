import {createReducer} from 'redux-starter-kit';

import setSelectedRow from './actions';

const initialState = {
	selectedRow: null
};

const homePageReducer = createReducer(initialState, {
	[setSelectedRow]: (state, action) => {
		state.selectedRow = action.payload;
	}
});

export default homePageReducer;