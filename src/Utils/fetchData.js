import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (character) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  let api = `https://rickandmortyapi.com/api/character/?page=1&name=${character}`;

  useEffect(() => {
    console.log("Fecthing data...");
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(api);
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, [api]);

  return {
    data,
    loading,
  };
};

export default useFetchData;


