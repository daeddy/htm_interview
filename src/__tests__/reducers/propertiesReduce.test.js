import { 
	FETCH_PROP_REQUEST, 
	FETCH_PROP_FAILURE, 
	FETCH_PROP_SUCCESS
} from '../../actions/ActionTypes'
import properties from '../../reducers/propertiesReducer'

// Same as reducer
const INITIAL_STATE = {
	items: [],
	loading: false,
	error: undefined
};

// Test propertiesReducer
describe('propertiesReducer reducer', () => {
	it('handles initial state', () => {
		expect( properties( undefined, {} ) ).toEqual(INITIAL_STATE)
	});
	
	it('handles FETCH_PROP_REQUEST', () => {
		const testAction = { 
			type: FETCH_PROP_REQUEST
		}
		expect( properties( [], testAction ) ).toEqual({ loading: true })
	});
	
	it('handles FETCH_PROP_SUCCESS', () => {
		const testAction = { 
			type: FETCH_PROP_SUCCESS,
			properties: [{ name: 'test' }]
		}
		expect( properties( [], testAction ) )
			.toEqual({ loading: false, items: [{ name: 'test' }] })
	});
	
	it('handles FETCH_PROP_FAILURE', () => {
		const testAction = { 
			type: FETCH_PROP_FAILURE,
			error: 'error'
		}
		expect( properties( [], testAction ) )
			.toEqual({ loading: false, error: 'error' })
	});
});

