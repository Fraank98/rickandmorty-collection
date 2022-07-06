import { useEffect, useState } from 'react';

const fetchCharacters = async (queryParameters) => {
    try {
        if (queryParameters.ids === "[]") {
            return false;
        }
        const api = `https://rickandmortyapi.com/api/character/${queryParameters.ids !== undefined ? queryParameters.ids : `?page=${queryParameters.page}&name=${queryParameters.character}`}`;
        const response = await fetch(api);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else if (response.status === 404) {
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

const fetchEpisodes = async (episodes) => {
    try {
        const promises = await Promise.all(episodes.map(episode => fetch(episode)));
        const episodeTitles = await Promise.all(promises.map(promise => promise.json()));
        return episodeTitles;
    } catch (error) {
        console.error(error);
        return {
            error: error.message
        };
    }
}

export const useFetchEpisodes = (character) => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const episodeTitle = [];
        fetchEpisodes(character.episode).then(result => {
            if (result.error) {
                setError(result.error)
            } else {
                result.forEach(episode => {
                    episodeTitle.push(episode);
                });
                setEpisodes(episodeTitle);
                setError('')
            }
            setLoading(false)
        });
    }, [character.episode]);

    return {
        episodes,
        loading,
        error,
    };
}


