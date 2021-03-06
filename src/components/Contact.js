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
							src="https://avatars1.githubusercontent.com/u/14877763?s=460&v=4"
							alt="avatar"
							style={{height: '300px', width: '300px', borderRadius: "150px"}}
							/>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
						My phone is available to call or text anytime 9am - 5pm, however I prefer email messages.
						I look forward to speaking with you soon.
						</p>
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
