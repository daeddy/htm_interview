import { 
	SEARCH,
	//SEARCH_CLEAR
} from './ActionTypes'


// Update query in store
// TODO: SEARCH_CLEAR
export const search = ( query = '' ) => ({
    type: SEARCH,
    text: query
});