import { SEARCH, SEARCH_CLEAR } from '../actions/ActionTypes'
import query from './searchReducer'

// Same as reducer
const INITIAL_STATE = {
	text: ''
};

// Test searchReducer
describe('searchReducer reducer', () => {
	it('handles initial state', () => {
		expect( query( undefined, {} ) ).toEqual(INITIAL_STATE)
	});
	
	it('handles SEARCH', () => {
		const testAction = { 
			type: SEARCH,
			text: 'a' 
		}
		expect( query( [], testAction ) ).toEqual({ text: 'a' })
	});
	
	it('handles SEARCH_CLEAR', () => {
		const testAction = { 
			type: SEARCH_CLEAR,
		}
		expect( query( [], testAction ) ).toEqual({ text: '' })
	});
});
