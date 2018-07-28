import { search } from '../../actions'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SEARCH } from '../../actions/ActionTypes'

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('actions.js', () => {
	
	describe('search action', () => {
		it('Dispatches the correct action and payload', () => {
			const expectedResult = [{
				'type': SEARCH,
				'text': 'a'
			}]
			
			store.dispatch(search('a'));
			expect(store.getActions()).toEqual(expectedResult);
		});
	});
	

});