import React from 'react';
import './Main.css';

function Main({name, job}) {
    return (
        <div id='Main'>
            <div>{name}</div>
            <div>{job}</div>
        </div>
    )
}

export default Main;