import React, { Component } from 'react'
import './App.css'
import Movie from './Movie'
import Movie2 from './Movie2'

class App extends Component {
	state = {}

	componentDidMount() {
		this._getMovies()
	}

	_renderMovies = () => {
		const movies = this.state.movies.map(movie => {
			return (
				<Movie
					title={movie.title_english}
					poster={movie.medium_cover_image}
					key={movie.id}
				/>
			)
		})
		return movies
	}

	_renderMovies2 = () => {
		const movies = this.state.movies.map(movie => {
			return (
				<Movie2
					title={movie.title_english}
					poster={movie.medium_cover_image}
					key={movie.id}
					genres={movie.genres}
					synopsis={movie.synopsis}
				/>
			)
		})
		return movies
	}

	_getMovies = async () => {
		const movies = await this._callApi()
		this.setState({
			movies: movies
		})
	}

	_callApi = () => {
		return fetch('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
			.then(response => response.json())
			.then(json => json.data.movies)
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className={this.state.movies ? 'App' : 'App--loading'}>
				{this.state.movies ? this._renderMovies2() : 'Loading'}
			</div>
		)
	}
}

export default App
