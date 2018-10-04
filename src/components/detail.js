import React from 'react';
import '../styles/detail.css';
import '../styles/swatch.css';
import Button from './button';

const Detail = (props) => {
    return (
        <div className='swatch-container' onClick={ props.handleClick }>
            <div className='detail-swatch'>
                <div className="tile detail-tile" style={{backgroundColor: props.colorSelection }}>
                </div>
                <span>{ props.colorSelection }</span>
            </div>
            <Button title="Clear" handleClick={ props.handleClick }/>
        </div>
    )
}

export default Detail;