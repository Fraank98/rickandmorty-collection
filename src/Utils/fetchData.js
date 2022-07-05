import { useEffect, useState } from 'react';
import { get as axiosGet } from 'axios';

const fetchCharacters = async (queryParameters) => {
    try {
        if(queryParameters.ids === "[]"){
            return [];
        }

        const api = `https://rickandmortyapi.com/api/character/${queryParameters.ids !== undefined ? queryParameters.ids : `?page=${queryParameters.page}&name=${queryParameters.character}`}`;
        const { data: result, status } = await axiosGet(api);

        if (status === 200) {
            return result;
        } else if (status === 404) {
            return [];
        } else {
            throw new Error('Error fetching data');
        }
    } catch (error) {
        console.error(error);
        return {
            error: error.message
        };
    }
};

export const useFetchCharacters = (queryParameters) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCharacters(queryParameters).then(result => {
            if (result.error) {
                setError(result.error);
            } else {
                setData(result);
                setError('');
            }
            setLoading(false);
        });
    }, [queryParameters]);

    return {
        data,
        loading,
        error,
    };
};
