import React from 'react';
import SearchBar from '../../components/SearchBar';
import { shallow } from 'enzyme';

//set up wrappers for different tests
const wrapperSetup = (queryText, searchFnc) => {
	const wrapper = shallow( 
		<SearchBar 
			query={queryText}
			search={searchFnc}
		/> 
	);
	return wrapper;
}

//Test SearchBar component
describe('SearchBar.js', () => {
	describe('renders', () => {
		it('input element', () => {
			const wrapper = wrapperSetup('', function(){ })
			
			expect( wrapper.find('input') ).toHaveLength(1);
		});
		
		it('value from query', () => {
			const wrapper = wrapperSetup('a', function(){ })
			
			expect( wrapper.find('input').prop('value') ).toMatch('a');
		});
	});
});
