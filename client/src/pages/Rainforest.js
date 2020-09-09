import React, { Component } from 'react';
import RainforestInfo from '../components/RainforestInfo';
import Robot from '../components/EnviraBot';

export class Rainforest extends Component {
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
