import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.module.css'; // Importa o CSS do seu App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);