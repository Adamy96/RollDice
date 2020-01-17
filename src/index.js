import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Righteous', cursive;
    font-size: 62.5%;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
);
