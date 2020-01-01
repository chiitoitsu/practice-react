import React from 'react';
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

export default Menu;