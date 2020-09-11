import React, { Component } from "react";
import UserProfile from "../components/UserProfile";
 import CompanyProfile from '../components/CompanyProfile';
 import { Auth } from 'aws-amplify';
import Axios from 'axios';

//component for types of profiles
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      editMode: "n",
    };
  }
  //this function is run when the component is rendered
  async componentDidMount() {
		try {
			// get the current logged in user details
			const user = await Auth.currentAuthenticatedUser();
			// get username from user object
			const userDetail = user.username;
			console.log(userDetail);
			// get the user details for logged in user from the User table
			Axios.get(`/api/auth/user/${userDetail}`)
				.then((response) => {
					this.setState({
						profile: response.data
					});
				})
				.catch((err) => console.log(err));
		} catch (error) {
			if (error !== 'No current user') {
				console.log(error);
			}
		}
  }

   render() {
  	let renderedProfile;
  	if (this.state.profile.roleId === 2) {
  		renderedProfile = <CompanyProfile profileType="Company"/>;
  	} else {
  		renderedProfile = <UserProfile profileType="User" />;
  	}

  	return <div className = "container-fluid p-0">{renderedProfile} </div>
  }
}

export default Profile;
