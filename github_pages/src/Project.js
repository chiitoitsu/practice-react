import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

function Project ({img, name, text, url}) {
    return (
        <div className='Project'>
            <div className='Prj_Img'>
                <img src={img} alt={name + '_img'}/>
            </div>
            <div className='Prj_Name'>{name}</div>
            <div className='Prj_Text'>{text}</div>
            <div className='Prj_Url'>
                <a href={url}>View Project</a>
            </div>
            <div className='Clear'></div>
        </div>
    )
}

Project.propType = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Project;