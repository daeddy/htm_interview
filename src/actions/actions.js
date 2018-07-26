import { 
	FETCH_PROP_REQUEST, 
	FETCH_PROP_FAILURE, 
	FETCH_PROP_SUCCESS,
	SEARCH,
	SEARCH_CLEAR
} from './ActionTypes'

import data from '../sample_data/propertyData.json'

export function fetchProperties() {
  return function( dispatch ) {
	dispatch({
		type: FETCH_PROP_SUCCESS,
		properties: data
    });
  }
}

export const search = ( query = '' ) => ({
    type: 'SEARCH',
    query
});