import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import Movie2 from './Movie2';

class App extends Component {

    state = {
			
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
        return movies
    }

    _renderMovies2 = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie2 title={movie.title} poster={movie.poster} key={index}/>
        })
        return movies
    }

    componentDidMount() {
        fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => console.log(err))

	// fetch().then().catch()
	/*
        .catch(function (err) {
            console.log(err)
		})
		.catch((err) => {
			console.log(err)
		})
	*/
    }

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : 'Loading'}
                {this.state.movies ? this._renderMovies2() : 'Loading'}
    		</div>
        )
    }
}

export default App;