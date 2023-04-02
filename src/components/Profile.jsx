import { useEffect, useState } from 'react';
import { useFecth } from '../hooks/UseFecth';

export const Profile = () => {
  const { response, error, loading } = useFecth('/users/2');
  const [user, setUser] = useState();

  console.log(user);

  useEffect(() => {
    if (response) {
      setUser(response.data);
    }
  }, [response]);

  return (
    <div className='bg-blue py-10'>
      <div className=' flex justify-center'>
        <div className='grid gap-5 p-10 shadow-2xl rounded-lg'>
          <div>
            <h2 className='text-center text-xl font-bold uppercase'>
              Datos del Usuario
            </h2>
            <div className='grid gap-1 mt-2 font-semibold'>
              <div className='flex gap-2'>
                <span>Nombre:</span>
                <span>{user?.name.firstname}</span>
              </div>
              <div className='flex gap-2'>
                <span>Apellidos:</span>
                <span>{user?.name.lastname}</span>
              </div>
              <div className='flex gap-2'>
                <span>Phone</span>
                <span>{user?.phone}</span>
              </div>
              <div className='flex gap-2'>
                <span>Email:</span>
                <span>{user?.email}</span>
              </div>
              <div className='flex gap-2'>
                <span>username:</span>
                <span>{user?.username}</span>
              </div>
              <div className='flex gap-2'>
                <span>Password:</span>
                <span>{user?.password}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-center text-xl font-bold uppercase'>
              Datos de Ubicacion
            </h2>
            <div className='grid gap-1 mt-2 font-semibold'>
              <div className='flex gap-2'>
                <span>City:</span>
                <span>{user?.address.city}</span>
              </div>
              <div className='flex gap-2'>
                <span>Street:</span>
                <span>{user?.address.street}</span>
              </div>
              <div className='flex gap-2'>
                <span>Number:</span>
                <span>{user?.address.number}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
