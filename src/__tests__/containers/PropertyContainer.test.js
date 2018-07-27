import React from 'react';
import { getVisibleProperties } from '../../containers/PropertyContainer';

const mockProperties = [{
	name: 'test',
	description: 'desc'
}]

//Test PropertyContainer container
describe('PropertyContainer.js', () => {
	describe('getVisibleProperties()', () => {
		it('returns all properties with empty query', () => {
			expect( getVisibleProperties(mockProperties, {text: ''}))
				.toEqual(mockProperties);
		});
		
		it('Filters properties by searching name (Sunny)', () => {
			expect( getVisibleProperties(mockProperties, {text: 't'}))
				.toEqual(mockProperties);
		});
		
		it('Filters properties by searching name (rainy)', () => {
			expect( getVisibleProperties(mockProperties, {text: 'a'}))
				.toEqual([]);
		});
		
		it('Filters properties by searching descripton (Sunny)', () => {
			expect( getVisibleProperties(mockProperties, {text: 'd'}))
				.toEqual(mockProperties);
		});
		
		it('Filters properties by searching descripton (rainy)', () => {
			expect( getVisibleProperties(mockProperties, {text: 'b'}))
				.toEqual([]);
		});
	});
});
