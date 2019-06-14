import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
	render() {
		return (
			<div className="landing-page">
				<Grid className="landing-grid">
					<Cell col={12} syle={{marginBottom: '50px'}}>
						<div className="portrait-container">
							<div className="portrait"></div>
						</div>
						<div className="banner-container">
							<div className="banner-text">
								<h1>Junior Software Engineer</h1>
								<hr />
								<p>CSS | HTML5 | C# | C++ | Python | PostgreSQL | JavaScript | React | Angular | Bootstrap</p>
								<div className="socials">
									<a href="https://github.com/dwhelchel" rel="noopener noreferrer" target="_blank">
										<i className="fa fa-github" aria-hidden="true" />
									</a>
									<a href="https://www.linkedin.com/in/dakota-whelchel" rel="noopener noreferrer" target="_blank">
										<i className="fa fa-linkedin" aria-hidden="true" />
									</a>
								</div>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;
