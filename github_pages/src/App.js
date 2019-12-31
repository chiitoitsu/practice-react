import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import Main from './Main.js'
import About from './About.js'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Menu />
				<Main name='Lee SeungWon' job='Student' />
				<About />
			</div>	
		)
	}
}

export default App;
