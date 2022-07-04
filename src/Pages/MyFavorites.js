import { useEffect, useMemo, useState } from 'react';
import CharacterCard from '../Components/CharacterCard';
import { fetchData } from '../Utils/fetchData';
import { getItem } from '../Utils/storage';


function MyFavorites() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const deleteItem = true

  useEffect(() => {
    const ids = getItem('favorites');
    if (ids !== "[]") {
      fetchData({ ids }).then(result => {
        setCharacters(result);
        setLoading(false);
      });
    }
    else {
      setError('No favorites found');
      setLoading(false);
    }
  }, [characters]);

  return (
    <div className="container">
      <div className="d-flex justify-content-around row mt-5">
        {!loading ?
          (!error ? (characters.map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              img={character.image}
              status={character.status}
              species={character.species}
              location={character.location.name}
              origin={character.origin.name}
              deleteItem
            />
          ))) : (
            error && <div className="alert alert-danger" role="alert">{error}</div>
          )) : (
            <div className='d-flex justify-content-center'>
              <h1>Loading...</h1>
            </div>
          )}
      </div>
    </div>

  )
}
export default MyFavorites