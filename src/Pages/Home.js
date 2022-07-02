import React from 'react'
import Search from '../Components/Search'
import useFetchData from '../Utils/fetchData'
import CharacterCard from '../Components/CharacterCard'
import Pagination from '../Components/Pagination'

function Home() {
    const [character, setCharacter] = React.useState('r');
    const [page, setPage] = React.useState(1);
    const { data, loading } = useFetchData(character, page);
    console.log(data);
    return (
        <>
            <Search setCharacter={setCharacter} />
            <div className="container">
                <div className="d-flex row mt-5">
                    {!loading ?
                        data.results.map(character => (
                            <CharacterCard
                                key={character.id}
                                img={character.image}
                                name={character.name}
                                species={character.species}
                                status={character.status}
                                location={character.location.name}
                                origin={character.origin.name}
                            />
                        )) :
                        <div className='d-flex justify-content-center'>
                            <h1>Loading...</h1>
                        </div>
                    }
                </div>
                <Pagination setPage={setPage} page={page} totalPages={data.info.pages} />
            </div>
        </>
    )
}

export default Home