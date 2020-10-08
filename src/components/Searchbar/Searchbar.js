import React from 'react'
import './_searchbar.scss'

const Searchbar = ({handleSearch, cityName, searchCity, searchCityEnter}) => {
    return(
        <div className="searchbar">
            <input 
                onChange={handleSearch}
                value={cityName}
                placeholder="Type city here..."
            />
            <button 
                onClick={searchCity}
            >
                Go
            </button>
        </div>
    )
}

export default Searchbar