import React from 'react';
import PropertyCard from './PropertyCard';
import { shallow } from 'enzyme';

const mockProperty = {
	id: 1,
	name: 'test',
	description: 'desc'
}

//Test PropertyList component
describe('PropertyCard.js', () => {
	describe('renders', () => {
		it('correct name', () => {
			const wrapper = shallow( <PropertyCard property={mockProperty} /> )
			
			expect( wrapper.find('h6').text() ).toMatch(/^test$/);
		});
		
		it('correct description', () => {
			const wrapper = shallow( <PropertyCard property={mockProperty} /> )
			
			expect( wrapper.find('p').text() ).toMatch(/^Description: desc$/);
		});
	});
});
