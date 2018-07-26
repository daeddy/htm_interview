import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import App from './containers/App';
import reducer from './reducers'

//Redux data store
const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('root')
);
