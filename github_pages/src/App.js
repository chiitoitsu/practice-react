import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import Main from './Main.js'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Menu />
				<Main name='Lee SeungWon' job='Student' />
			</div>	
		)
	}
}

export default App;
