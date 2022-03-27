import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import AppHooks from './AppHooks';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppHooks />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
