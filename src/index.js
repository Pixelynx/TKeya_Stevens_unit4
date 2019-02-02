import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);


serviceWorker.unregister();
