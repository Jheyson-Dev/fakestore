import { useState } from 'react';
import logo from '../assets/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    username: 'mor_2314',
    password: '83r5^_',
  });

  const login = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        form
      );
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      nav('/');
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    login();
  };

  return (
    <div className='h-screen bg-gray-200'>
      <div className=' h-full flex justify-center items-center'>
        <div className='flex bg-white shadow-2xl rounded-2xl'>
          <form
            className='p-10 grid gap-10'
            onSubmit={handleSubmit}
          >
            <div className='flex justify-center'>
              <img
                src={logo}
                alt='Logo de Fakestore'
                className='w-16'
              />
            </div>
            <div className='grid gap-5'>
              <div>
                <input
                  type='text'
                  defaultValue={'mor_2314'}
                  placeholder='Username'
                  className='rounded-md focus:ring-0 border-none bg-gray-secondary'
                  onChange={e => {
                    setForm({ ...form, username: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type='password'
                  defaultValue={'83r5^_'}
                  placeholder='Password'
                  className='rounded-md focus:ring-0 border-none bg-gray-secondary'
                  onChange={e => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </div>
              <div className=''>
                <button
                  type='submit'
                  className='bg-blue-primary text-white font-bold w-full py-2 rounded-md'
                >
                  LOGIN
                </button>
              </div>
            </div>
          </form>
          <div className='bg-blue-primary rounded-r-2xl p-10 flex flex-col justify-center text-center text-white'>
            <h1 className=' uppercase text-4xl grid gap-2 font-bold'>
              <span>Bienvenido </span>
              <span>a fakestore</span>
            </h1>
            <h2>Una tienda virtual falsa</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
