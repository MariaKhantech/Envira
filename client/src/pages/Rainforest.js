import React, { Component } from 'react';
import RainforestInfo from '../components/RainforestInfo';
import Robot from '../components/EnviraBot';


export class Rainforest extends Component {

	componentDidMount() {
		let welcomeAudio = new Audio(
			'https://envirabucket215241-dev.s3.amazonaws.com/polly/welcomerainforest.86fe6479-4ade-4200-85a6-b77f0b214eef.mp3'
		);
		welcomeAudio.play();
	}
	render() {
		return (
			<div>
				<RainforestInfo />
				<Robot />
			</div>
		);
	}
}

export default Rainforest;
