import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//amplify config per docs imports
import Amplify from "aws-amplify";
import config from "./aws-exports";

// const config = {
//   aws_project_region: process.env.REACT_APP_project_region,
//   aws_cognito_identity_pool_id: process.env.REACT_APP_cognito_pool_id,
//   aws_cognito_region: process.env.REACT_APP_cognito_region,
//   aws_user_pools_id: process.env.REACT_APP_user_pools_id,
//   aws_user_pools_web_client_id: process.env.REACT_APP_web_client,
//   oauth: {},
//   aws_bots: process.env.REACT_APP_lex_bots,
//   aws_bots_config: [
//     {
//       name: process.env.REACT_APP_lex_bot_name,
//       alias: process.env.REACT_APP_lex_bot_alias,
//       region: process.env.REACT_APP_lex_bot_region,
//     },
//   ],
//   aws_user_files_s3_bucket: process.env.REACT_APP_s3_bucket,
//   aws_user_files_s3_bucket_region: process.env.REACT_APP_s3_bucket_region,
// };

Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById("root"));
