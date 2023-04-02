import { useParams } from 'react-router-dom';
import { useFecth } from '../hooks/UseFecth';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

export const Product = () => {
  const { cart, setCart } = useContext(CartContext);
  const { id } = useParams();
  const { error, response, loading } = useFecth(`/products/${id}`);
  const [product, setProduct] = useState();
  useEffect(() => {
    if (response) {
      setProduct(response?.data);
    }
  }, [response]);
  console.log(product);

  console.log(cart);
  return (
    <div className='py-10 grid gap-5'>
      <div className='grid grid-cols-2 px-36 gap-5'>
        <div className='justify-self-center w-56 flex items-center'>
          <img
            src={product?.image}
            alt=''
            className=''
          />
        </div>
        <div className='p-5 flex flex-col gap-5 rounded-lg shadow-2xl'>
          <h2 className='text-2xl font-semibold'>{product?.title}</h2>
          <div className='flex flex-col gap-1'>
            <span>{product?.description}</span>
            <div className='flex items-center gap-1'>
              <span>Category: </span>
              <span className='border-2 text-sm border-blue-primary text-blue-primary font-bold px-2 rounded-md bg-white'>
                {product?.category}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <span>Puntuacion: </span>
              <span className=''>{product?.rating.rate}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='yellow'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='yellow'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
              </svg>
            </div>
            <div className='flex items-center gap-1'>
              <span>Personas: </span>
              <span className=''>{product?.rating.count}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='black'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='black'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                />
              </svg>
            </div>
            <div className='flex gap-1 self-center font-bold text-xl'>
              <span>Price:</span>
              <span>${product?.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          className='bg-blue-primary px-5 py-2 rounded-md font-bold text-white'
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
