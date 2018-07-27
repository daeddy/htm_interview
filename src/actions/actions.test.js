import * as actions from './actions'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import data from '../sample_data/propertyData.json'
import {  
	FETCH_PROP_SUCCESS,
	SEARCH,
} from './ActionTypes'

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('actions.js', () => {
	//clear store before each test
	beforeEach(() => { 
		store.clearActions();
	});

	describe('fetchProperties action', () => {
		it('Dispatches the correct action and payload', () => {
			const expectedResult = [{
				'type': FETCH_PROP_SUCCESS,
				'properties': data,
			}]
			
			store.dispatch(actions.fetchProperties());
			expect(store.getActions()).toEqual(expectedResult);
		});
	});
	
	describe('search action', () => {
		it('Dispatches the correct action and payload', () => {
			const expectedResult = [{
				'type': SEARCH,
				'text': 'a'
			}]
			
			store.dispatch(actions.search('a'));
			expect(store.getActions()).toEqual(expectedResult);
		});
	});
	

});