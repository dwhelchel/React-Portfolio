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
							<h2 style={{paddingTop: '0', margin: '15px 0', textAlign: 'center'}}>Dakota Whelchel</h2>
							<h4 style={{color: 'grey', marginTop: '10px', textAlign: 'center'}}>Junior Software Developer</h4>
							<hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
							<p>Junior Full Stack Software Engineer with experience with front-end tools, libraries,
							and frameworks such as React.js, Angular.js, and Bootstrap3 as well as back end frameworks
							and tools such as .NET and Swagger. I have developed and maintained code within a CI/CD development
							environment with the help of Git and Team Foundation Server. Looking to apply my skills and experience
							as well as learn new skills and techniques.</p>
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
							schoolDesc="Graduated from the University of California, Riverside with a bechalor's degree in
							Computer Science and a cumulative GPA of 3.21. Gained experience in many subjects of Computer
							Science such as computer graphics, machine learning and data mining, cyber security, and data
							structures and algorithms. Worked on and collaborated with many fellow students to build and
							maintain software projects. Gained invaluable experience working within a team to complete a senior
							design project involving the creation of a MiniJava compiler."
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />
						<h2>Experience</h2>
						<Experience
							startYear="June 2018"
							endYear="September 2018"
							jobName="Sandia National Laboratories - Full Stack Software Development Intern"
							jobDesc="Collaborated with another intern to build a Build Radiator web application using tools
							and frameworks such as .NET, Swagger, and Angular2. Built a REST API service using Microsoft Visual
							Studio and C#. Used the JSON array supplied by the back-end service to correctly output relevant
							build and release information to a web application. Fully tested both back-end and front-end services
							using the dependency injection design pattern. Worked within an agile environment, where work was completed
							in three week iterations followed by team planning. Applied paired programming with teammates and fellow
							intern to solve problems together."
						/>
						<Experience
							startYear="October 2018"
							endYear="December 2018"
							jobName="University of California, Riverside - Student Research Assistant"
							jobDesc="Helped Ph.D students at the University of California, Riverside develop a service in C# which
							receives SPaT messages from specific traffic controllers within the Riverside area via UDP connection.
							This service would then decode these SPaT messages and send relevant information such as truck heading
							and traffic signal timing to the front-end application via TCP connection, which was to be displayed on
							a tablet inside of a semi-trailer truck."
						/>
						<hr style={{borderTop: '3px solid #e22947'}} />
						<h2>Skills</h2>
						<Skills skill="React" progress="75"/>
						<Skills skill="Angular2" progress="75"/>
						<Skills skill="JavaScript" progress="90"/>
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
