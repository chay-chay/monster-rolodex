import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input className='search'
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
          // if we want to see state update immediately, we have to use callback function
        
      />
    )
}