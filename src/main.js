import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import FAQContainer from './containers/FAQContainer';
import App from './containers/App'

// Pre-part 3
// ReactDOM.render(
//   <FAQContainer />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
