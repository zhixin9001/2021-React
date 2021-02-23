import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Weather1 from './weather1';
import { Weather } from './weather/';
import { Provider } from 'react-redux';
import { CitySelector } from './citySelector/';
import store from './Store.js'
import Routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CitySelector />
      <Weather />
    </div>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
