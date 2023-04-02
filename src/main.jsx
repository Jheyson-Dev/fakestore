import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterProvider router={router}></RouterProvider>
  // </React.StrictMode>
  <CartProvider>
    <RouterProvider router={router}></RouterProvider>
  </CartProvider>
);
