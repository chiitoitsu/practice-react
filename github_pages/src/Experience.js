import React from 'react';
import PropTypes from 'prop-types';
import './Experience.css';

function Experience({term, name, job, text}) {
    return (
        <div className='Experience'>
            <div className='Exp_Term'>{term}</div>
            <div className='Exp_Icon'></div>
            <div className='Exp_Col'>
                <div className='Exp_Name'>{name}</div>
                <div className='Exp_Job'>{job}</div>
                <div className='Exp_Text'>{text}</div>
            </div>
            <div className='Clear'></div>
        </div>
    )
}

Experience.propTypes = {
    term: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Experience;