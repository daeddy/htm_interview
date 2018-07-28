import { 
	FETCH_PROP_REQUEST, 
	FETCH_PROP_FAILURE, 
	FETCH_PROP_SUCCESS
} from '../actions/ActionTypes'

const INITIAL_STATE = {
	items: [],
	loading: false,
	error: false
};

const properties = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_PROP_REQUEST:
			return {...state, loading: true}
		case FETCH_PROP_SUCCESS:
			return {...state, loading: false, items: action.items}
		case FETCH_PROP_FAILURE:
			return {...state, loading: false, error: true}
		default:
			return state
	}
}

export default properties
