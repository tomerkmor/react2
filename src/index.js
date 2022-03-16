import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//the login imports
import './pages/Login_v4/css/main.css';
import './pages/Login_v4/css/util.css';
import './pages/Login_v4/images/icons/favicon.ico';
import './pages/Login_v4/vendor/bootstrap/css/bootstrap.min.css';
import './pages/Login_v4/fonts/iconic/css/material-design-iconic-font.min.css';
import './pages/Login_v4/vendor/animate/animate.css';
import './pages/Login_v4/vendor/css-hamburgers/hamburgers.min.css';
import './pages/Login_v4/vendor/animsition/css/animsition.min.css';
import './pages/Login_v4/vendor/select2/select2.min.css';
import './pages/Login_v4/vendor/daterangepicker/daterangepicker.css';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
