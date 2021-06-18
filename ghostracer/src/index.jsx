import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import {Auth, Amplify }from "aws-amplify";
import config from './aws-exports'
Amplify.configure(config)
Auth.configure(config)

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './components/App.jsx';
import { user } from './states/user-reducers.js'
import { play } from './states/play-reducers.js'

const federated = {
  googleClientId: '277180343147-rtoj1qohu41plhoceg3p0l3c2bqmvs97.apps.googleusercontent.com'
}


window.onload = function () {
  Auth.currentAuthenticatedUser().then(user=>{console.log(user)});
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(combineReducers({
    user, play
  }), composeEnhancers(applyMiddleware(thunkMiddleware)));

  store.subscribe(() => { console.log(store.getState()) }) // TODO: disable at prod

  ReactDOM.render(
    <CookiesProvider>
      <Provider store={store}>
        <App federated={federated}/>
      </Provider>
    </CookiesProvider>

    ,document.getElementById('root')
  );
}
