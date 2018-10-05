import React from 'react';
import PropTypes from 'prop-types';
import '../styles/sidebar.css';
import Button from './button';

const colorFamilies = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

const colors = colorFamilies.map((color, idx) => <li key={idx}>{color}</li>)

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <Button 
                handleClick={ props.handleClick }
                title="Random Color"/>
            <div className="color-family-container">
                <ul>
                    { colors }
                </ul>
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default Sidebar;