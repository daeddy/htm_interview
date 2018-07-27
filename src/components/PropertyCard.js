import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

// Property card for displaying a property
// Displays: name, description, roomcount and bathcount
const PropertyCard = ({ property }) => (
	<div>
		<div class="card text-white" style={{ fontSize: '12px' }}>	
			<a data-toggle="collapse"  href={"#" + property.id} style={{textDecoration: 'none', color:'white'}}>
				<img class="card-img-top" src={require("../sample_data/sampleIMG.jpg")} alt="ERROR"/>
				<div class="card-img-overlay d-flex flex-column">
					<h6 class="card-title mt-auto" style={{ padding: '0px' }}>{property.name}</h6>
				</div>
			</a>
		</div>
		<div class="collapse" id={property.id} style={{ padding: '5px', fontSize: '12px' }}>
			<div class="font-weight-bold" style={{ letterSpacing: '2px', padding: '2px' }}>
				<i class="fa fa-bed fa-lg"/> {property.gradeSort}
				<i style={{ marginLeft:'10px'}} class="fa fa-bath fa-lg"/> {property.bathrooms}
			</div>
			<p>
				<span class="font-weight-bold">Description: </span>
				{property.description}
			</p>
		</div>
	</div>
)

export default PropertyCard;
