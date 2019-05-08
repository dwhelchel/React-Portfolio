import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img
								src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
								alt="avatar"
								style={{height: '200px'}} />
						</div>
						<h2 style={{paddingTop: '2em'}}>Dakota Whelchel</h2>
						<h4 style={{color: 'grey'}}>Software Developer</h4>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
						<p>Lorem ipsum a whole lotta bullshit</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
						<h5>Address</h5>
						<p>3017 N Cedar Ave, 92377</p>
						<h5>Phone</h5>
						<p>(909) 543-8492</p>
						<h5>Email</h5>
						<p>dakotabwhelchel@gmail.com</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear="2015"
							endYear="2019"
							schoolName="University of California, Riverside"
							schoolDesc="Lorem ipsum"
						/>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;
