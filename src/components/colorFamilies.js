import React from 'react';
import '../styles/colorFamilies.css'

const colorList = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

const colors = colorList.map((color, idx) => <li key={idx}>{color}</li>)

const ColorFamily = () => {
    return (
        <div className="color-family-container">
            <ul>
                { colors }
            </ul>
        </div>
    )
}

export default ColorFamily;