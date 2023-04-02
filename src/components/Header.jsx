import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className='bg-blue-primary h-20 sticky top-0 '>
      <div className='container mx-auto flex items-center h-full justify-between lg:px-36'>
        <div>
          <img
            src={logo}
            alt='Logo Fakestore'
            className='w-16'
          />
        </div>
        <nav>
          <ul className='flex gap-5 items-center'>
            <li>
              <div>
                <NavLink
                  to={'/'}
                  className='text-2xl font-semibold'
                >
                  Home
                </NavLink>
              </div>
            </li>
            <li>
              <div className='relative'>
                <NavLink to={'/cart'}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                  </svg>
                </NavLink>
                <div className='absolute -right-2 -top-2 w-4 h-4 flex justify-center font-bold bg-white rounded-full text-xs'>
                  {cart.length}
                </div>
              </div>
            </li>
            <li>
              <div>
                <NavLink to={'/profile'}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
