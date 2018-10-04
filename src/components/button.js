import React from 'react';
import '../styles/button.css'

const Button = (props) => {
    return (
        <div className="button-container">
            <button
                className="button"
                onClick={props.handleClick}>{ props.title }</button>
        </div>
    )
}

export default Button;
