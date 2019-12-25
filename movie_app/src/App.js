import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    state = {
        
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
        return movies
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
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
                    },
                    {
                        title: 'Ford v Ferrari',
                        poster: './ford_v_ferrari.jpg'
                    },
                    {
                        title: 'Forrest Gump',
                        poster: './forrest_gump.jpg'
                    }
                ]
            })
        }, 2000)
    }

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : 'Loading'}
    		</div>
        )
    }
}

export default App;