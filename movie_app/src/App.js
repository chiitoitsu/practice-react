import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieName = [
	'John Wick 3',
	'Joker',
	'Harry Potter',
]

const moviePoster = [
    './johnwick3.jpg',
    './joker.jpg',
    './harrypotter.jpg'
]

class App extends Component {
    render() {
        return (
            <div className="App">
				<Movie title={movieName[0]} poster={moviePoster[0]}/>
				<Movie title={movieName[1]} poster={moviePoster[1]}/>
				<Movie title={movieName[2]} poster={moviePoster[2]}/>
    		</div>
        )
    }
}

export default App;