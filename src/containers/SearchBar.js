import React, { Component } from 'react';
import { connect } from 'react-redux'
import { search } from '../actions/actions';
import PropTypes from 'prop-types';

const searchBar = {
	padding: '20px',
	fontSize: '30px',
	textAlign: 'center',
}

class SearchBar extends Component {
	render() {
		return (
			<div style={ searchBar }>
				<input 
					type='text' 
					placeholder='Search...' 
					value={ this.props.query }
                    onChange={( e ) => {
                        this.props.dispatch( search( e.target.value ) );
					}}
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	query: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
	query: state.query.text
})

export default connect(
	mapStateToProps
)(SearchBar)
