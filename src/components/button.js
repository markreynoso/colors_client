import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

const Button = (props) => {
    return (
        <div className="button-container">
            <button
                className="button"
                onClick={props.handleClick}>{ props.title }</button>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Button;
