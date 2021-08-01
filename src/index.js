import React from 'react';
import ReactDOM from 'react-dom';
import Router1 from './Projects/Router/Router';
import App from './Projects/ContextApiPrac/App';
import CompB from './Projects/ContextApiPrac/CompB';
import KeepApp from './Projects/KeepApp/KeepApp';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Router1/>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);


