import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider} from 'react-cookie';
import App from './components/App.jsx';

// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

window.onload = function() {
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
}