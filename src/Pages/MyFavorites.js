import CharacterCard from '../Components/CharacterCard';
import { useFetchCharacters } from '../Utils/fetchData';
import { getItem } from '../Utils/storage';

function MyFavorites() {
  const ids = getItem('favorites');
  const { data: characters, loading, error } = useFetchCharacters({ ids });

  if (loading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-around row mt-5">
          <div className='d-flex justify-content-center'>
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="d-flex justify-content-around row mt-5">
          <div className="alert alert-danger" role="alert">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-around row mt-5">
        {(characters && characters.length > 0 )?
          (characters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              deleteItem
            />
          ))) : (
            <div className='d-flex justify-content-center'>
              <h3>No favorites found</h3>
            </div>
          )}
      </div>
    </div>
  )
}
export default MyFavorites