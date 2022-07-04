import { useState } from 'react';

import Search from '../Components/Search'
import useFetchData from '../Utils/fetchData'
import CharacterCard from '../Components/CharacterCard'
import Pagination from '../Components/Pagination'

function Home() {
    const [character, setCharacter] = useState('');
    const [page, setPage] = useState(1);
    const { data, loading, error } = useFetchData(character, page);
    console.log(data);
    return (
        <>
            <Search setCharacter={setCharacter} />
            {!loading
                ? (!error && !!data.results && !!data.info
                    ? (
                        <div className="container">
                            <div className="d-flex justify-content-around row mt-5">
                                {data.results.map(character => (
                                    <CharacterCard
                                        key={character.id}
                                        img={character.image}
                                        name={character.name}
                                        species={character.species}
                                        status={character.status}
                                        location={character.location.name}
                                        origin={character.origin.name}
                                        id={character.id}
                                    />
                                ))}
                            </div>
                            <Pagination setPage={setPage} page={page} totalPages={data.info.pages} />
                        </div>
                    )
                    : (
                        <div className="alert alert-danger" role="alert">
                            No characters found
                        </div>
                    )
                )
                : (
                    <div className='d-flex justify-content-center'>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        </>
    )
}

export default Home