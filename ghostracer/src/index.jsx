import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
// import {Auth, Amplify }from "aws-amplify";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './components/App.jsx';
import { user } from './states/user-reducers.js'
import { play } from './states/play-reducers.js'


window.onload = function () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(combineReducers({
    user, play
  }), composeEnhancers(applyMiddleware(thunkMiddleware)));

  store.subscribe(() => {console.log(store.getState())}) // TODO: disable at prod

  ReactDOM.render(
    <React.StrictMode>
      <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
