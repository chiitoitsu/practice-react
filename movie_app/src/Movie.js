import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

class Movie extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		poster: PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<MoviePoster title={this.props.title} poster={this.props.poster} />
			</div>
		)
	}
}

class MoviePoster extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		poster: PropTypes.string.isRequired
	}

	render() {
		return <img src={this.props.poster} alt={this.props.title} width='300px'></img>
	}
}

export default Movie
