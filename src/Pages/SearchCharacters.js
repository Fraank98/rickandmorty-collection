import React from 'react'
import Search from '../Components/Search'
import useFetchData from '../Utils/fetchData'
import CharacterCard from '../Components/CharacterCard'

function SearchCharacters() {
    const [searchValue, setSearchValue] = React.useState('');
    const {data, loading} = useFetchData(searchValue);
    console.log(data);

    return (
       <>
        <Search setSearchValue={setSearchValue} />
        <div className="container">
            <div className="row">
                {data.results.map(character => (
                    <CharacterCard
                        key={character.id}
                        img={character.image}
                        name={character.name}
                        species={character.species}
                    />
                ))}
            </div>
        </div>
       </>
    )
}

export default SearchCharacters