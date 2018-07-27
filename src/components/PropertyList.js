import React, { Component } from 'react';
import PropertyCard from './PropertyCard';
import PropTypes from 'prop-types';

//Inline styling for grid view
const gridContainer = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 2fr))',
	gridGap: '20px',
	padding: '10px',
}
// error view
const errorView = {
	padding: '30px',
	textAlign: 'center',
}

// Displays grid of properties or error is none
class PropertyList extends Component {
	componentDidMount() {
		// Fetch property data. 
		this.props.fetchProperties();
	}
	
	render(){
		var items = this.props.properties; //array of property obj
		// If there are properties
		if(items.length > 0)
			return(
				<div style={gridContainer}>
					{items.map((property, i) => 
						<PropertyCard key={i} property={property}/>
					)}
				</div>
			);
		// No properties displayed
		return(
			<div style={errorView}>
				<h3>No Properties</h3>
			</div>
		);
	}
}

// Typechecking
PropertyList.propTypes = {
	properties: PropTypes.array.isRequired,
	fetchProperties: PropTypes.func.isRequired
}

export default PropertyList;
