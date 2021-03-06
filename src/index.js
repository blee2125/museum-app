import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import {compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import searchReducer from '../src/reducers/searchReducer'

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(searchReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//const apiKey= IFeTnxJCjHBZyf77fnVb0SXC2eBr4MFt47SAhb0H
