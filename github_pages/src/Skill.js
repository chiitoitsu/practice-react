import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css';

function Skill({skills}) {
    return (
        <div className='Skill'>
            <ul className='Skill_List'>
                {skills}
            </ul>
        </div>
    )
}

Skill.propTypes = {
    skills: PropTypes.array.isRequired
}

export default Skill;