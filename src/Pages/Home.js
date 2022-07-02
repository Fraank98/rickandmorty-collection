import React from 'react'
import Search from '../Components/Search'
import useFetchData from '../Utils/fetchData'
import CharacterCard from '../Components/CharacterCard'

function Home() {
    const [character, setCharacter] = React.useState('r');
    const {data, loading} = useFetchData(character);
    console.log(data);

    return (
       <>
        <Search setCharacter={setCharacter} />
        <div className="container">
            <div className="d-flex row mt-5">
                {data.results.map(character => (
                    <CharacterCard
                        key={character.id}
                        img={character.image}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        location={character.location.name}
                        origin={character.origin.name}
                    />
                ))}
            </div>
        </div>
       </>
    )
}

export default Home