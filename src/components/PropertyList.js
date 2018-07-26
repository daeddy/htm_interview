import React from 'react';
import PropertyCard from './PropertyCard';

const gridContainer = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 2fr))',
	gridGap: '20px',
	backgroundColor: '#2196F3',
	padding: '10px',
}
const errorContainer = {
	backgroundColor: '#2196F3',
	padding: '10px',
	textAlign: 'center',
}

const PropertyList = ({ items }) => {
	if(items.length > 0)
		return(
			<div style={gridContainer}>
				{items.map(property => 
					<PropertyCard property={property}/>
				)}
			</div>
		);
	return(
		<div style={errorContainer}>
			<h3>No Properties</h3>
		</div>
	);
}

export default PropertyList;
