import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
// import awsconfig from '../../aws-exports';
import Robot from '../Robot';
import Zoom from 'react-reveal/Zoom';
import './style.scss';
// Amplify.configure(awsconfig);

export class EnviraBot extends Component {
	handleComplete(err, confirmation) {
		if (err) {
			alert('Bot conversation failed');
			return;
		}

		alert('Success: ' + JSON.stringify(confirmation, null, 2));
		return 'Trip booked. Thank you! what would you like to do next?';
	}

	componentDidMount() {}

	render() {
	
		// let topPos ='65%';
		// let leftPos='80%';
		// let robotPostition = 'fixed'

		// if(this.props.centerRobot === true ) {
		// 	topPos ='80%';
		// 	leftPos= '50%';
		// 	robotPostition='relative'
		// }
		let enviraPosition = {};

		if(this.props.centerRobot === true ) {
			enviraPosition = {
				position: 'relative',
				width: '13rem',
				marginLeft: '50px'
			}

		} else {
           enviraPosition = {
				position: 'fixed',
				top: '65%',
				left: '80%',
				width: '10rem'
			}
		}
		
		return (
			<div style = {enviraPosition}>
				<Zoom>
				<Robot />
				</Zoom>
				<ChatBot
					title="My Bot"
					botName="BookTrip_dev"
					welcomeMessage="Welcome, how can I help you today?"
					// onComplete={this.handleComplete.bind(this)}
					clearOnComplete={true}
					conversationModeOn={false}
					voiceEnabled={true}
				/>
			</div>
		);
	}
}

export default EnviraBot;
