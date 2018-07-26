import { combineReducers } from 'redux'
import properties from './propertiesReducer'
import query from './searchReducer'

export default combineReducers({
	properties,
	query
})
