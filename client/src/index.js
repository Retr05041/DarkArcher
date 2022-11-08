// MAIN CLIENT
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css'; // Added bootstrap@5.2.2 to my app
import App from './App'; // Root component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
