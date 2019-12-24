import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    state = {
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
            }
        ]
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
                    ...this.state.movies,
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
                {this.state.movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index}/>
                })}
    		</div>
        )
    }
}

export default App;