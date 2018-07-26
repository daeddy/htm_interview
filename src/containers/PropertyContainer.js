import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropertyList from '../components/PropertyList';
import PropTypes from 'prop-types';
import { fetchProperties } from '../actions/actions';

class PropertyContainer extends Component {
	componentDidMount() {
		// When container was mounted, we need to start fetching todos.
		this.props.fetchProperties();
	}
  
	render() {
		if(this.props.properties)
			return (
				<div>
					<PropertyList items={this.props.properties}/>
				</div>
			);
		return (
				<div>
					<h3>No Properties</h3>
				</div>
			);
	}
}

PropertyContainer.propTypes = {
	properties: PropTypes.array.isRequired,
}

const getVisibleProperties = ( properties, query ) => {
	return properties.filter( property => {
        const match =
            property.name.toLowerCase().includes( query.text.toLowerCase() );

        return match;
    });
}

const mapStateToProps = state => ({
	properties: getVisibleProperties( state.properties.items, state.query )
})

// This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
	return {
		// This function will be available in component as `this.props.fetchTodos`
		fetchProperties: function() {
			dispatch(fetchProperties());
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PropertyContainer)
