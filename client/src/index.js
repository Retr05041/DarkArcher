// MAIN CLIENT 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; // Added bootstrap@5.2.2 to my app
import Counters from './components/counters'; // Imported my first custom component 'Counter'
import NavBar from './components/navBar'; // Imported my first custom component 'Counter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    <Counters />
  </React.StrictMode>
); // We edit the middle line so we use our 'Counter' component, and not the default 'App' component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
