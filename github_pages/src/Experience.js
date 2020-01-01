import React from 'react';
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

export default Experience;