import { 
	FETCH_PROP_REQUEST, 
	FETCH_PROP_FAILURE, 
	FETCH_PROP_SUCCESS,
} from './ActionTypes'

// Temporay method of loading data
const url = 'https://5b5c92f96a725000148a6796.mockapi.io/properties'

// dispatch methods for fetchProperties()
function fetchError() {
    return {
        type: FETCH_PROP_FAILURE
    };
}
function isFetching() {
    return {
        type: FETCH_PROP_REQUEST
    };
}
function fetchSuccess(items) {
    return {
        type: FETCH_PROP_SUCCESS,
        items: items
    };
}

// Load property data into store
export function fetchProperties() {
    return (dispatch) => {
        dispatch(isFetching());
        return fetch(url)
            .then((response) => response.json())
            .then((items) => 
				// Delay to show loading
				setTimeout(() => {
					dispatch(fetchSuccess(items))
				}, 1000)
			)
            .catch(() => dispatch(fetchError()));
    };
}