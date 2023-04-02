import { useEffect, useState } from 'react';
import { useFecth } from '../hooks/UseFecth';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
  const { response, loading, error } = useFecth('/products');
  const [data, setData] = useState([]);

  const hanldleFilter = e => {
    const filtro = e.target.innerHTML;

    if (filtro === 'All') {
      return setData(response.data);
    }
    setData(
      data.filter(p => {
        if (p.category === filtro) {
          return p;
        }
      })
    );
  };

  useEffect(() => {
    if (response) {
      setData(response.data);
    }
  }, [response]);
  const filters = [
    {
      id: 1,
      name: 'electronics',
    },
    {
      id: 2,
      name: 'jewelery',
    },
    {
      id: 3,
      name: "men's clothing",
    },
    {
      id: 4,
      name: "women's clothing",
    },
  ];
  return (
    <div className='py-10'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-semibold'>Nuestros productos</h2>
        <div>
          <input
            type='text'
            placeholder='Search'
            className='rounded-full placeholder:text-xl placeholder:font-semibold focus:ring-0 border-blue-primary border-2 focus:border-blue-primary'
          />
        </div>
      </div>
      <div>
        <div>
          <span>Filtros</span>
          <div className=' flex gap-2'>
            <button
              className='bg-blue-primary text-white font-semibold px-2 rounded-md'
              onClick={hanldleFilter}
            >
              All
            </button>
            {filters.map(({ id, name }) => {
              return (
                <button
                  key={id}
                  className='bg-blue-primary text-white font-semibold px-2 rounded-md'
                  onClick={hanldleFilter}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
        <div className='grid grid-cols-5 gap-3 py-10'>
          {loading && <span>Cargando</span>}
          {data &&
            data.map(el => {
              return (
                <Link
                  to={`/product/${el.id}`}
                  key={el.id}
                  className='rounded-lg flex flex-col cursor-pointer'
                >
                  <div className='flex justify-center items-center h-56'>
                    <img
                      src={el.image}
                      alt=''
                      className='object-contain h-full'
                    />
                  </div>
                  <div className='flex-1 rounded-b-lg flex flex-col justify-center bg-gray-secondary text-center'>
                    <span className='font-semibold'>{el.title}</span>
                    <span className='font-bold'>Price: ${el.price}</span>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
