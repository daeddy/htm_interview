import { combineReducers } from 'redux'
import properties from './propertiesReducer'
import query from './searchReducer'

// Combine for export
export default combineReducers({
	properties,
	query
})
