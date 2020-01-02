import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js';
import Main from './Main.js';
import About from './About.js';
import Experience from './Experience.js';
import Education from './Education.js';

class App extends Component {

	state = {
		menu: [
			'About',
            'Experience',
            'Education',
            'Projects',
            'Skills',
            'Contact'
		],
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
		],
		edus: [
			{
				school: 'A University',
				grade: 'Bachelor of Computer Software Engineering',
				term: '2015.01.01. ~ 2016.01.01.',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus.'
			},
			{
				school: 'A University',
				grade: 'Master of Computer Software Engineering',
				term: '2017.01.01. ~ 2018.01.01.',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus.'
			}
		]
	}

	_renderMenu = () => {
		const menu = this.state.menu.map((menu_list, index) => {
			return <li key={index}>{menu_list}</li>
		})
		return menu
	}
	
	_renderExperience = () => {
		const exps = this.state.exps.map((exp, index) => {
			return <Experience term={exp.term} name={exp.name} job={exp.job} text={exp.text} key={index} />
		})
		return exps
	}

	_renderEducation = () => {
		const edus = this.state.edus.map((edu, index) => {
			return <Education school={edu.school} grade={edu.grade} term={edu.term} text={edu.text} key={index}/>
		})
		return edus
	}

	render() {
		return (
			<div className='App'>
				<Menu menu={this._renderMenu()} />
				<Main name='Lee SeungWon' job='Student' />
				<About />
				{this._renderExperience()}
				{this._renderEducation()}
			</div>
		)
	}
}

export default App;