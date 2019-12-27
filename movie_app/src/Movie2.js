import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Dumb Component
function Movie2({title, poster, genres, synopsis}) {
    return (
        <div className='Movie'>
            <div className='Movie_Columns'>
                <MoviePoster2 title={title} poster={poster}/>
            </div>
            <div className='Movie_Columns'>
                <h1>{title}</h1>
                <div className='Movie_Genres'>
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className='Movie_Synopsis'>
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster2({title, poster}) {
    return (
        <img className='Movie_Poster' src={poster} alt={title} />
    )
}

function MovieGenre({genre}) {
    return (
        <span className='Movie_Genre'>{genre} </span>
    )
}

// PropType Check for dumb component
Movie2.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster2.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}



export default Movie2;