import React, { Component } from 'react'
import OceanParallax from "../components/OceanParallax"
import Jumbotron from 'react-bootstrap/Jumbotron'

export class Ocean extends Component {

	// const jumbotron = {
	// margin-bottom
	//   };

	render() {
		return (
			<div>
				{/*jumbotron for youtube video*/}
				<Jumbotron fluid className="embed-responsive embed-responsive-16by9 mb-0">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/6zrn4-FfbXw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</Jumbotron>
				
				
				<OceanParallax />
			</div>
		)
	}
}

export default Ocean;
