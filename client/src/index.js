import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//amplify config per docs imports
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import config from "./config.json"

Amplify.configure(awsExports);
// Amplify.configure({
//     Auth: {
//         mandatorySignId: true,
//         region: config.cognito.REGION,
//         userPoolId: config.cognito.USER_POOL_ID,
//         userPoolWebClient: config.cognito.APP_CLIENT_ID
//     }
// });

ReactDOM.render(<App />, document.getElementById('root'));
