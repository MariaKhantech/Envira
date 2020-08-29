import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
// import awsconfig from '../../aws-exports';
import Robot from '../Robot';
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
		const myTheme = {
			...AmplifyTheme,
			sectionHeader: {
				...AmplifyTheme.sectionHeader,
				backgroundColor: '#ff6600'
			}
		};
		return (
			<div className="envirabot">
				<Robot />
				<ChatBot
					title="My Bot"
					theme={myTheme}
					botName="BookTrip_dev"
					welcomeMessage="Welcome, how can I help you today?"
					onComplete={this.handleComplete.bind(this)}
					clearOnComplete={true}
					conversationModeOn={false}
					voiceEnabled={true}
				/>
			</div>
		);
	}
}

export default EnviraBot;
