import { SEARCH, SEARCH_CLEAR } from '../actions/ActionTypes'

const INITIAL_STATE = {
	text: ''
};

const query = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEARCH:
			return {...state, text: action.text}
		case SEARCH_CLEAR:
			return {...state, text: ''}
		default:
			return state
	}
}

export default query
