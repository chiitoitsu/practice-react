import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Dumb Component
function Movie2({title, poster}) {
    return (
        <div>
            <h1>{title}</h1>
            <MoviePoster2 title={title} poster={poster}/>
        </div>
    )
}

// PropType Check for dumb component
Movie2.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

function MoviePoster2({title, poster}){
    return (
        <img src={poster} alt={title} width='300px'></img>
    )
}

MoviePoster2.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie2;