import React from 'react'
import './Search.css';

const Search = ({inputValue, OnInputChange}) => {
  return (
    <div className="--form-control">
       <input type="text" placeholder="search Products" value={inputValue} onChange={OnInputChange} />
    </div>
  )
}

export default Search