import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js').then(
      registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      },
      error => {
        console.error('Service Worker registration failed:', error);
      }
    );
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
