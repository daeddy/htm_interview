import { fetchProperties } from '../../actions'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
	FETCH_PROP_REQUEST, 
	FETCH_PROP_FAILURE, 
	FETCH_PROP_SUCCESS,
} from '../../actions/ActionTypes'

const mockStore = configureStore([thunk]);
const store = mockStore();

global.fetch = require('jest-fetch-mock');
			 
describe('actions.js', () => {
	describe('fetchProperties action', () => {
		//clear store and fetch before each test
		beforeEach(() => { 
			store.clearActions();
			fetch.resetMocks();
		});
		
		it('Dispatches the correct action and payload', () => {
			// First action loading
			const expectedLoading = [{'type': FETCH_PROP_REQUEST}]
			// Second action with payload
			const expectedResult = [{
				'type': FETCH_PROP_SUCCESS,
				'items': [{name: 'test'}],
			}]
			fetch.mockResponseOnce(JSON.stringify([{name: 'test'}]));
			
			return store.dispatch(fetchProperties()).then(() => {
				// Loading action first
				expect(store.getActions()).toEqual(expectedLoading)
			}).then(() => {
				setTimeout(() => {
					expect(store.getActions()).toEqual(expectedResult)
				}, 1000)
			})
		});
		
		it('handles an error from api', () => {
			// Error action triggered after loading
			const expectedResult = [
				{'type': FETCH_PROP_REQUEST,},
				{'type': FETCH_PROP_FAILURE,},
			]
			fetch.mockReject(new Error('error'));
			
			return store.dispatch(fetchProperties()).then(() => {
				expect(store.getActions()).toEqual(expectedResult)
			})
		});
	});
	
	
	

});