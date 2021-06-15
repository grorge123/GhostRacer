import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider} from 'react-cookie';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import {input, playerStat, gameState} from './states/play-reducers.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

window.onload = function () {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(combineReducers({
    input, playerStat, gameState
  }), composeEnhancers(applyMiddleware(thunkMiddleware)));

  store.subscribe(() => { console.log(store.getState()) }) // TODO: disable at prod

  ReactDOM.render(
    <CookiesProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </CookiesProvider>

    ,document.getElementById('root')
  );
}