import { connect } from 'react-redux';
import PropertyList from '../components/PropertyList';
import { fetchProperties } from '../actions/actions';

// Filter properties by name or description, export for testing
export const getVisibleProperties = ( properties, query ) => {
	return properties.filter( property => {
        const match =
            property.name.toLowerCase().includes( query.text.toLowerCase() )
				|| property.description.toLowerCase().includes( query.text.toLowerCase() );
        return match;
    });
}

// Get properties from redux store by query, default: ''
const mapStateToProps = state => ({
	properties: getVisibleProperties( state.properties.items, state.query )
});

// Provide callbacks to container component.
const mapDispatchToProps = dispatch => ({
	fetchProperties: function() {
		dispatch( fetchProperties() );
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PropertyList)
