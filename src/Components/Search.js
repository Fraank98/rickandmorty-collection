import React from 'react'

const Search = ({setCharacter}) => {
    const [searchValue, setSearchValue] = React.useState('');
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    const handleSearchClick = (e) => {
        e.preventDefault();
        setCharacter(searchValue);
    }
    return (
        <form>
            <div className="form-group d-flex justify-content-center mt-5">
                <input type="text"
                    className="form-control w-50 shadow-sm border-2"
                    id="search"
                    placeholder="Search character"
                    onChange={handleChange} />
                <button type="button" className="btn btn-primary mx -2" onClick={handleSearchClick} >Search</button>
            </div>
        </form>
    )
}

export default Search