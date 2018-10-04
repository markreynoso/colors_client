import React from 'react';
import '../styles/sidebar.css'
import Button from './button';
import ColorFamily from './colorFamilies';

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <Button 
                handleClick={ props.handleClick }
                title="Random Color"
            />
            <ColorFamily />
        </div>
    )
}

export default Sidebar;