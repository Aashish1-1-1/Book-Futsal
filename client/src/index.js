import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Approuter from './Route'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Approuter />
  </React.StrictMode>
);
