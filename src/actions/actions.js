import { 
	//FETCH_PROP_REQUEST, 
	//FETCH_PROP_FAILURE, 
	FETCH_PROP_SUCCESS,
	SEARCH,
	//SEARCH_CLEAR
} from './ActionTypes'

// Temporay method of loading data
import data from '../sample_data/propertyData.json'

// Load property data into store
// TODO: implement with api call using 
// FETCH_PROP_REQUEST and FETCH_PROP_FAILURE
export function fetchProperties() {
  return function( dispatch ) {
	dispatch({
		type: FETCH_PROP_SUCCESS,
		properties: data
    });
  }
}

// Update query in store
// TODO: implement with api call using
// SEARCH_CLEAR
export const search = ( query = '' ) => ({
    type: SEARCH,
    text: query
});