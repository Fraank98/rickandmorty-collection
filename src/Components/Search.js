import React from 'react'

const Search = ({setSearchValue}) => {
    return (
        //a search bar for the user to search for a character
        <form>
            <div className="form-group d-flex justify-content-center mt-5">
                <input type="text"
                    className="form-control w-50 shadow-sm border-2"
                    id="search"
                    placeholder="Search character"
                    onChange={(e) => {setSearchValue(e.target.value)} } />
                <button type="button" class="btn btn-primary mx -2">Search</button>
            </div>
        </form>
    )
}

export default Search