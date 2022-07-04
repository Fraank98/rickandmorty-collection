import { useEffect, useMemo, useState } from 'react';
import CharacterCard from '../Components/CharacterCard';
import { fetchData } from '../Utils/fetchData';


function MyFavorites() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const ids = favorites.toString();

    fetchData({ ids }).then(result => {
      setCharacters(result);
      setLoading(false);
    });
  }, [characters]);

  return (
    <div className="container">
      <div className="d-flex justify-content-around row mt-5">
        {!loading ? (characters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            location={character.location.name}
            origin={character.origin.name}
          />
        ))) :
          <div className='d-flex justify-content-center'>
            <h1>Loading...</h1>
          </div>
        }
      </div>
    </div>

      )
}

      export default MyFavorites