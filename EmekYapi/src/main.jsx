import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // EKLENDİ
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* EKLENDİ */}
      <App />
    </BrowserRouter> {/* EKLENDİ */}
  </React.StrictMode>
);