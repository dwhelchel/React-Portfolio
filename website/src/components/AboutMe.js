import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
	render() {
		return (
			<div className="about-me-div">
				<Grid className="about-me-grid">
					<Cell col={12}>
						<h1>Hi There. Nice to meet you.</h1>
						<h3>My Upbringing</h3>
						<p>I was born in Riverside California on December 20, 1996 and raised in Rialto California
						since then. Growing up I was raised around lots of technology and music. Because of this,
						these two subjects became my passions in life as I grew up. My parents tought me about math,
						science, technology, and music all the time, and it became fascinating to learn about these
						subjects. Computers became my favorite technological subject, considering how my father is a
						computer hardware and software consultant. Both of my passions and love for them grew over the
						course of my childhood life.
						</p>
						<h3>My College Days</h3>
						<p>During high school I chose to persue my passion for technology in the form of computer science.
						I chose computer science because I am a natural builder. I love to design, implement, and test
						projects. Once I started attending the University of California, Riverside, my love for technology
						and computer science rose even higher than before. Through school, I fell in love with building
						applications and solving problems. I also gained invaluable friendships and experience
						working in groups and alone on projects. The university offered me the ability to work on projects I
						was interested in and passionate about. I worked on many projects, such as computer graphics ray tracing,
						machine learning and data mining, robotic submarines, and many more.
						</p>
						<h3>Life After College</h3>
						<p>After graduating from my university, I discovered a new found passion of mine. I discovered web
						development and I immediately started to love the practice. In particular, I love full-stack development.
						Full stack development allows me to use both sides of my brain, left and right. Through working on these
						projects, I can be creative with the front-end while also being analytical with the back-end. One of the
						most satisfying aspects to me about web development is taking a step back and visualizing how the back-end,
						front-end, and database technologies are all communicating together.</p>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default AboutMe;
