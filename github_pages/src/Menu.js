import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

function Menu({menu}) {
    return (
        <div className='Menu'>
            <ul className='Menu_List'>
                {menu}
            </ul>
        </div>
    )
}

Menu.propTypes = {
    menu: PropTypes.array.isRequired
}

export default Menu;