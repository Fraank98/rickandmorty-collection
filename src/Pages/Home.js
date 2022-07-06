import { useState } from 'react';
import Search from '../Components/Search'
import { useFetchCharacters } from '../Utils/fetchData'
import CharacterCard from '../Components/CharacterCard'
import Pagination from '../Components/Pagination'

function Home() {
    const [character, setCharacter] = useState('');
    const [page, setPage] = useState(1);
    const { data, loading, error } = useFetchCharacters({ character, page });

    return (
        <>
            <Search setCharacter={setCharacter} />
            {!loading ?
                (!error && !!data.results && !!data.info ?
                    (
                        <div className="container">
                            <div className="d-flex justify-content-around row mt-5">
                                {data.results.map(character => (
                                    <CharacterCard
                                        key={character.id}
                                        character={character}
                                    />
                                ))}
                            </div>
                            <Pagination setPage={setPage} page={page} totalPages={data.info.pages} />
                        </div>
                    ) : (
                        <div className="alert alert-danger" role="alert">
                            No characters found
                        </div>
                    )
                ) : (
                    <div className='d-flex justify-content-center'>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        </>
    )
}

export default Home