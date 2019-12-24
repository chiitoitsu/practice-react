import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: 'John Wick 3',
        poster: './johnwick3.jpg'
    },
    {
        title: 'Joker',
        poster: './joker.jpg'
    },
    {
        title: 'Harry Potter',
        poster: './harrypotter.jpg'
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                {movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index}/>
                })}
    		</div>
        )
    }
}

export default App;