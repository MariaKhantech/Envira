import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
import awsconfig from '../../aws-exports';
import Robot from '../Robot';
Amplify.configure({
    Auth: {
      identityPoolId: 'us-east-1:270e49bd-86d1-42ef-a63f-57867286c0f9',
      region: 'us-east-1'
    },
    Interactions: {
      bots: {
        "BookTrip": {
            "name": "BookTrip_dev",
            "alias": "$LATEST",
            "region": "us-east-1"
        },
      }
    }
  });


export class index extends Component {
    handleComplete(err, confirmation) {
		if (err) {
			alert('Bot conversation failed');
			return;
		}

		alert('Success: ' + JSON.stringify(confirmation, null, 2));
		return 'Trip booked. Thank you! what would you like to do next?';
	}

	componentDidMount() {
	}

	render() {

        const myTheme = {
            ...AmplifyTheme,
            sectionHeader: {
                ...AmplifyTheme.sectionHeader,
                backgroundColor: '#ff6600'
            }
        };
		return (
			<div className="App">
			
					<Robot />
					{/* <ChatBot
						title="My Bot"
						theme={myTheme}
						botName="BookTrip"
						welcomeMessage="Welcome, how can I help you today?"
						onComplete={this.handleComplete.bind(this)}
						clearOnComplete={true}
						conversationModeOn={false}
						voiceEnabled={true}
					/> */}
				
			</div>
		);
	}
}

export default index
