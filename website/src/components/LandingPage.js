import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
	render() {
		return (
			<div className="landing-page">
				<Grid className="landing-grid">
					<Cell col={12}>
						<div className="banner-text">
							<h1>Front-End Web Developer</h1>
							<hr />
							<p>CSS | HTML5 | C# | C++ | PosgresSQL | JavaScript | React | Angular</p>
							<div className="socials">
								<a href="https://github.com/dwhelchel" target="_blank"></a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;
