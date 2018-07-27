import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Inline styling for searchbar container
const barContainer = {
	backgroundColor: '#01579b',
	padding: '20px'
}

// SearchBar with text input
class SearchBar extends Component {
	render() {
		return (
			<div class="col-xs-1" align="center" style={ barContainer }>
				<input 
					style={{ width: '200px'}}
					class="form-control"
					type='text' 
					placeholder='Search...' 
					value={ this.props.query }
                    onChange={( e ) => {
                        this.props.search( e.target.value );
					}}
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	query: PropTypes.string.isRequired,
	search: PropTypes.func.isRequired
}

export default SearchBar;
