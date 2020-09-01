import React, { Component } from "react";
import UserProfile from "../components/UserProfile";
 import CompanyProfile from '../components/CompanyProfile';

//component for types of profiles
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileType: "",
      editMode: "n",
    };
  }
  //this function is run when the component is rendered
  componentDidMount() {
    this.setState({ profileType: this.props.auth });
  }

   render() {
  	let renderedProfile;
  	if (this.state.profileType === 'company') {
  		renderedProfile = <CompanyProfile profileType="Company"/>;
  	} else {
  		renderedProfile = <UserProfile profileType="User" />;
  	}

  	return <div className = "container-fluid p-0">{renderedProfile} </div>
  }
}

export default Profile;
