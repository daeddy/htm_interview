import React from 'react';
import PropertyList from '../../components/PropertyList';
import { shallow } from 'enzyme';

//set up wrappers for different tests
const wrapperSetup = (propertyList) => {
	const wrapper = shallow( 
		<PropertyList 
			properties={propertyList}
			fetchProperties={function(){ }}
		/> 
	);
	return wrapper;
}

//Test PropertyList component
describe('PropertyList.js', () => {
	describe('renders', () => {
		it('cards when theres properties', () => {
			const wrapper = wrapperSetup([{name: 'test'}]);
			
			expect( wrapper.find('PropertyCard') ).toHaveLength(1);
		});
		
		it('error when theres no properties', () => {
			const wrapper = wrapperSetup([ ]);
			
			expect( wrapper.find('h3').text() ).toMatch(/^No Properties$/);
		});
	});
});
