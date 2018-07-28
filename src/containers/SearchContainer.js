import { connect } from 'react-redux';
import { search } from '../actions';
import SearchBar from '../components/SearchBar';


const mapStateToProps = state => ({
	query: state.query.text
});

// Provide callbacks to container component.
const mapDispatchToProps = dispatch => ({
	search: function( value ) {
		dispatch( search( value ) );
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar)
