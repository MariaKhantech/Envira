import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';

//component for types of profiles
export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profileType: ''
		};
	}
	//this function is run when the component is rendered
	componentDidMount() {}

	render() {
		return (
			<div className="container">
				<UserProfile />
			</div>
		);
	}
}

export default Profile;
