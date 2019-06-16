import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super();
		this.state = {
			activeTabs: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.toggleCategories = this.toggleCategories.bind(this);
	}

	handleChange(tabId) {
		this.setState({
			activeTabs: tabId
		});
	}

	toggleCategories() {
		// C++
		if (this.state.activeTabs === 0) {
			return (
				<div className="projects-grid">
					{/* Ray tracer */}
					<Card shadow={5} className="project-card">
						<CardTitle
							style={{color: '#fff', height: '176px',
							background: 'url(https://code.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg) center / cover',
							padding: '6px'}}>
							3D Ray Tracer</CardTitle>
						<CardText>
							Implemented a 3D Ray Tracer project, which renders images by tracing cast rays and
							simulating shadows and reflections.
						</CardText>
						<CardActions>
							<Button colored><a className="project-button" href="https://github.com/dwhelchel/CS130-Ray-Tracer" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
						</CardActions>
					</Card>

					{/* Pipeline */}
					<Card shadow={5} className="project-card">
						<CardTitle
							style={{color: '#fff', height: '176px',
							background: 'url(https://code.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg) center / cover',
							padding: '6px'}}>
							Graphics Pipeline</CardTitle>
						<CardText>
							Implemented a graphics pipeline, which is the process of rasterizing a 3D image
							onto a 2D scene.
						</CardText>
						<CardActions>
							<Button colored><a className="project-button" href="https://github.com/dwhelchel/CS130-Pipeline" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
						</CardActions>
					</Card>
				</div>
			);
		}
		// Java
		else if (this.state.activeTabs === 1) {
			return (
				<div className="projects-grid">
					<Card shadow={5} className="project-card">
						<CardTitle
							style={{color: '#fff', height: '176px',
							background: 'url(http://favbulous.com/wp-content/uploads/2016/06/java-logo.png) center / cover',
							padding: '6px'}}>
							MiniJava Compiler</CardTitle>
						<CardText>
							Implemented a four part MiniJava to MIPS compiler using Java.
						</CardText>
						<CardActions>
							<Button colored><a className="project-button" href="https://github.com/anchiou/MiniJava-to-MIPS" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
						</CardActions>
					</Card>
				</div>
			);
		}
		// React
		else {
			return (
				<div className="projects-grid">
					{/* Portfolio */}
					<Card shadow={5} className="project-card">
						<CardTitle className="react-card" style={{color: '#fff', padding: '6px'}}>Portfolio Website</CardTitle>
						<CardText>
							Created a portfolio website with the use of React.js and the React router.
							Utilized components from React Material Design Lite (react-mdl) such as Cards
							and Grids to design the layout and organize information.
						</CardText>
						<CardActions>
							<Button colored><a className="project-button" href="https://github.com/dwhelchel/React-Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
						</CardActions>
					</Card>

					{/* Brewery Directory */}
					<Card shadow={5} className="project-card">
						<CardTitle className="react-card" style={{color: '#fff', padding: '6px'}}>Brewery Directory</CardTitle>
						<CardText>
							Built a brewery directory to look up breweries in the United States by city, name, state, and type.
							Utilized SASS for styling and flexbox for element orientation. This project makes HTTP requests to the 
							Open Brewery DB.
						</CardText>
						<CardActions>
							<Button colored><a className="project-button" href="https://github.com/dwhelchel/ReactJS-Brewery-Site" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
						</CardActions>
					</Card>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTabs={this.state.activeTabs} onChange={this.handleChange} ripple>
					<Tab>C++</Tab>
					<Tab>Java</Tab>
					<Tab>React</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;
