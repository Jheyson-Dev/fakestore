import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-bold text-center'>Tu carrito de compras</h2>
      <div className='grid gap-5 mt-10'>
        {cart.map(el => {
          return (
            <div className='flex gap-2 items-center justify-between shadow-lg px-10 py-2 rounded-lg h-40'>
              <div>
                <img
                  src={el.image}
                  alt=''
                  className='w-24'
                />
              </div>
              <div className='text-xl font-semibold'>
                <span>Calificacion: </span>
                <span>{el.rating.rate}</span>
              </div>
              <div className='text-xl font-semibold'>
                <span>Categoria: </span>
                <span className='border-2 rounded-md text-sm px-2 border-blue-primary text-blue-primary font-semibold'>
                  {el.category}
                </span>
              </div>
              <div className='text-xl font-semibold'>
                <span>Price: </span>
                <span>${el.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
