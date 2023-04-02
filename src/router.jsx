import { createBrowserRouter } from 'react-router-dom';
import { TemplateApp } from './App';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Profile } from './components/Profile';
import { Cart } from './components/Cart';

export const router = createBrowserRouter([
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <TemplateApp />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
