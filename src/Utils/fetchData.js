import { useEffect, useState } from 'react';
import { get as axiosGet } from 'axios';

export const fetchData = async (queryParameters) => {
    try {
        const api = `https://rickandmortyapi.com/api/character/${queryParameters.ids !== undefined ? queryParameters.ids : `?page=${queryParameters.page}&name=${queryParameters.character}`}`;
        const { data: result, status } = await axiosGet(api);
        if (status === 200) {
            return result;
        } else if (status === 404) {
            return {
                result: [],
            };
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

const useFetchData = (character, page) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState('');

    useEffect(() => {
        fetchData({page, character}).then(result => {
            if (result.error) {
                setError(result.error);
            } else {
                setData(result);
                setError('');
            }
            setLoading(false);
        });
    }, [page, character]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetchData;


