 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css"; // ✅ must-have
import "slick-carousel/slick/slick-theme.css"; // ✅ must-have
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
