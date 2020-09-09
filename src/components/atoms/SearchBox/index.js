import React from 'react'
import './searchBox.scss';

const SearchBox = ({handleChange, placeholder}) => {
    return ( 
            <input type="search" placeholder={placeholder} onChange={handleChange} className="search"/>
    )
}

export default SearchBox
