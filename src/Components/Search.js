import { useState } from 'react';

const Search = ({ setCharacter }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value === '') {
            setCharacter('');
        }
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        setCharacter(searchValue);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setCharacter(searchValue);
        }
    };

    return (
        <div className="form-group d-flex justify-content-center mt-5">
            <input type="text"
                className="form-control w-50 shadow-sm border-2"
                id="search"
                placeholder="Search character"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <button type="button" className="btn btn-primary mx -2" onClick={handleSearchClick} >Search</button>
        </div>
    )
}

export default Search