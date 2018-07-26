import React from 'react';

const gridItem = {
	backgroundColor: 'rgba(255, 255, 255, 0.8)',
	border: '1px solid rgba(0, 0, 0, 0.8)',
	padding: '20px',
	fontSize: '10px',
	textAlign: 'center',
}

const PropertyCard = ({ property }) => (
	<div style={gridItem}>{property.name}</div>
)

export default PropertyCard;
