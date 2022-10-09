import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css" ;
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';




import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min.js"



ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

,document.getElementById('root'));




