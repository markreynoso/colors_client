import React from 'react';
import PropTypes from 'prop-types';
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
                onChange={props.handleInput}/>
        </div>
    )
}

Search.propTypes = {
    searchName: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired
}

export default Search;