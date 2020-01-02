import React from 'react';
import PropTypes from 'prop-types';
import './Education.css';

function Education({school, grade, term, text}) {
    return (
        <div className='Education'>
            <div className='Edu_School'>{school}</div>
            <div className='Edu_Grade'>{grade}</div>
            <div className='Edu_Term'>{term}</div>
            <div className='Edu_Text'>{text}</div>
            <div className='Clear'></div>
        </div>
    )
}

Education.propTypes = {
    school: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Education;