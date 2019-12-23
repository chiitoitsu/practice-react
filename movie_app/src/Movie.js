import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster} alt='johnwick3' width='300px'></img>
        )
    }
}

export default Movie;