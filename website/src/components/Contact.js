import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Dakota Whelchel</h2>
						<img
							src="https://media.licdn.com/dms/image/C4E03AQHD3BBkWOgjjw/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=6G4IjGPCFMDMEvkeKsPT9bREJPY_c7YzE4l_YNeELmc"
							alt="avatar"
							style={{height: '250px', width: '250px', borderRadius: "75px"}}
							/>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type
						specimen book.</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List style={{display: 'inline-block'}}>
							  <ListItem>
							    <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
									<i className="fa fa-phone-square" /> (909) 543-8492
								</ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
									<i className="fa fa-envelope" /> dakotabwhelchel@gmail.com
								</ListItemContent>
							  </ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;
