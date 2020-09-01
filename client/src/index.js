import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//amplify config per docs imports
import Amplify from "aws-amplify";
// import config from './aws-exports';
const config = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id: process.env.REACT_APP_cognito_pool_id,
  //   "us-east-1:270e49bd-86d1-42ef-a63f-57867286c0f9",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: process.env.REACT_APP_user_pools_id,
  //   "us-east-1_cNgfIO2mp",
  aws_user_pools_web_client_id: process.env.REACT_APP_web_client,
  //   "eorbkborc2itnp7c6l16fht9o",
  oauth: {},
  aws_bots: "enable",
  aws_bots_config: [
    {
      name: process.env.REACT_APP_lex_bot_name,
      //   "BookTrip_dev",
      alias: process.env.REACT_APP_lex_bot_alias,
      //   "$LATEST",
      region: "us-east-1",
    },
  ],
  aws_user_files_s3_bucket: process.env.REACT_APP_s3_bucket,
  //   "envirabucket215241-dev",
  aws_user_files_s3_bucket_region: "us-east-1",
};
Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById("root"));
