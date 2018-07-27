import React from 'react';
import PropertyContainer from './PropertyContainer';
import SearchContainer from './SearchContainer';
import PlaceholderHeader from '../components/PlaceholderHeader'
//Main page with search bar and property container
const App = () => (
	<div>  
		<PlaceholderHeader/>
		<SearchContainer/>
		<PropertyContainer/>
	</div> 
)

export default App;
