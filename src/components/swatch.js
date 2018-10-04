import React from 'react';
import '../styles/swatch.css'

const Swatch = (props) => {
    return (
        <div className='swatch-container'>
            <ul>
                { props.colorList.map(color => 
                    <li key={color.color_id}>
                        <div className="swatch">
                            <div className="tile" style={{backgroundColor: color.hex}} onClick={ props.handleClick } id={color.hex}>
                            </div>
                            <span onClick={ props.handleClick } id={color.hex}>{ color.hex }</span>
                        </div>
                    </li>) }

            </ul>
        </div>
    )
}

export default Swatch;