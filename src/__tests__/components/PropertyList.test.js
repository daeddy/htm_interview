import React from 'react';
import PropertyList from '../../components/PropertyList';
import { shallow } from 'enzyme';

//set up wrappers for different tests
const wrapperSetup = (items, loading, error) => {
	const wrapper = shallow( 
		<PropertyList 
			items={items}
			loading={loading}
			error={error}
			fetchProperties={function(){ }}
		/> 
	);
	return wrapper;
}

//Test PropertyList component
describe('PropertyList.js', () => {
	describe('renders', () => {
		it('cards when theres properties', () => {
			const wrapper = wrapperSetup([{name: 'test'}], false, false);
			
			expect( wrapper.find('PropertyCard') ).toHaveLength(1);
		});
		
		it('no prop msg when theres no properties', () => {
			const wrapper = wrapperSetup([], false, false);
			
			expect( wrapper.find('h3').text() ).toMatch(/^No Properties$/);
		});
		
		it('load spinner when theres loading', () => {
			const wrapper = wrapperSetup([], true, false);
			
			expect( wrapper.find('SyncLoader'));
		});
		
		it('error msg when theres error', () => {
			const wrapper = wrapperSetup([], false, true);
			
			expect( wrapper.find('h3').text() ).toMatch(/^Error loading data$/);
		});
	});
});
