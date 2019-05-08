import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div>
							<div style={{textAlign: 'center'}}>
								<img
									src="https://avatars1.githubusercontent.com/u/14877763?s=460&v=4"
									alt="avatar"
									style={{height: '300px', width: '300px', borderRadius: '150px', marginTop: '0'}} />
							</div>
							<h2 style={{paddingTop: '0', margin: '15px 0'}}>Dakota Whelchel</h2>
							<h4 style={{color: 'grey', marginTop: '10px'}}>Junior Software Developer</h4>
							<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
							<h5>Address</h5>
							<p>3017 N Cedar Ave, 92377</p>
							<h5>Phone</h5>
							<p>(909) 543-8492</p>
							<h5>Email</h5>
							<p>dakotabwhelchel@gmail.com</p>
						</div>
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education
							startYear="September 2015"
							endYear="March 2019"
							schoolName="University of California, Riverside"
							schoolDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum."
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />
						<h2>Experience</h2>
						<Experience
							startYear="June 2018"
							endYear="September 2018"
							jobName="Sandia National Laboratories"
							jobDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum."
						/>
						<Experience
							startYear="October 2018"
							endYear="December 2018"
							jobName="University of California, Riverside"
							jobDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum."
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />
						<h2>Skills</h2>
						<Skills skill="React" progress="75"/>
						<Skills skill="Angular2" progress="75"/>
						<Skills skill="HTML" progress="90"/>
						<Skills skill="CSS" progress="65"/>
						<Skills skill="C++" progress="90"/>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;
