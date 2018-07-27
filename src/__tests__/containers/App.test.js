import React from 'react';
import App from '../../containers/App';
import { shallow } from 'enzyme';

//Test App container
describe('App.js', () => {
	it('renders', () => {
		const wrapper = shallow( <App /> );
		expect(wrapper.find('SearchBar') 
			&& wrapper.find('PropertyContainer'));
	});
})