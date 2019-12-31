import React from 'react';
import './Main.css';

function Main({name, job}) {
    return (
        <div id='Main'>
            <div id='Main_Name'>{name}</div>
            <div id='Main_Job'>{job}</div>
        </div>
    )
}

export default Main;