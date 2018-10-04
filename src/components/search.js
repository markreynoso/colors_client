import React from 'react';
import '../styles/search.css'

const Search = (props) => {
    return (
        <div className='input-box'>
            <input
                className='input-text'
                type='text'
                placeholder='Search'
                value={props.searchName}
                onKeyPress={props.handleSubmit}
                onChange={props.handleInput} 
            />
        </div>
    )
}

export default Search;