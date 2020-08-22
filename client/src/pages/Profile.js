import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import CompanyProfile from '../components/CompanyProfile';

//component for types of profiles
export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profileType: '',
			editMode: 'n'
		};
	}
	//this function is run when the component is rendered
	componentDidMount() {
		this.setState({ profileType: this.props.userObject.role });
	}

	render() {
		let renderedProfile;
		if (this.state.profileType === 'company') {
			renderedProfile = <CompanyProfile />;
		} else {
			renderedProfile = <UserProfile name="MARIA" />;
		}
		return <div className="container">{renderedProfile}</div>;
	}
}

export default Profile;
