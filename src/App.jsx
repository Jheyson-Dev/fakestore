import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

export const TemplateApp = () => {
  return (
    <div className=''>
      <Header />
      <div className='container mx-auto lg:px-36'>
        <Outlet />
      </div>
    </div>
  );
};
