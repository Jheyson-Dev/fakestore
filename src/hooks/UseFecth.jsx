import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFecth = endpoint => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${endpoint}`
      );
      setResponse(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { response, loading, error };
};
