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
    searchName: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleInput: PropTypes.func
}

export default Search;