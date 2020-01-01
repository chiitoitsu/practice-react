import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import Main from './Main.js'
import About from './About.js'
import Experience from './Experience.js'

class App extends Component {

	state = {
		exps: [
			{
				term: '2015.01.01. ~ 2016.01.01.',
				name: 'Employer Name',
				job: 'Job Title',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus.'
			},
			{
				term: '2017.01.01. ~ 2018.01.01.',
				name: 'Employer Name',
				job: 'Job Title',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus.'
			},
			{
				term: '2019.01.01. ~ 2020.01.01.',
				name: 'Employer Name',
				job: 'Job Title',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus.'
			}
		]
	}

	_renderExperience = () => {
		const exps = this.state.exps.map(exp => {
			return <Experience term={exp.term} name={exp.name} job={exp.job} text={exp.text}/>
		})
		return exps
	}

	render() {
		return (
			<div className='App'>
				<Menu />
				<Main name='Lee SeungWon' job='Student' />
				<About />
				{this._renderExperience()}
			</div>
		)
	}
}

export default App;