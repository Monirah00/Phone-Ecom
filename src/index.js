import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'C:/Users/USER/Desktop/E-Comm--Update/my-app/node_modules/font-awesome/css/font-awesome.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  
    <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);


