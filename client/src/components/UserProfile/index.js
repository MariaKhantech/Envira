import React, { Component } from 'react';
import './style.scss';
import Axios from 'axios';
import { Auth } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import ReviewForm from '../ReviewForm';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

export default class UserProfile extends Component {
	state = {
		profile: [],
		firstName: '',
		lastName: '',
		city: '',
		state: '',
		phoneNumber: '',
		occupation: '',
		about: '',
		zipCode: '',
		totalEvent: '',
		imagePreviewUrl: '',
		imageName: [],
		userRating: []
	};

	async componentDidMount() {
		try {
			// get the current logged in user details
			const user = await Auth.currentAuthenticatedUser();
			// get username from user object
			const userDetail = user.username;
			// get the user details for logged in user from the User table
			Axios.get(`/api/auth/user/${userDetail}`)
				.then((response) => {
					this.setState({
						profile: response.data
					});
					// call this function to get logged in user profile details
					this.getUserProfile();
					// call this function to get logged in user event details
					this.getUserTotalEvent();
					this.getImage();
					this.getUserRating();
				})
				.catch((err) => console.log(err));
		} catch (error) {
			if (error !== 'No current user') {
				console.log(error);
			}
		}
	}

	// get logged in user info from UserProfile model
	getUserProfile = () => {
		const UserId = this.state.profile.id;
		Axios.get(`/api/auth/userProfile/${UserId}`)
			.then((response) => {
				this.setState({
					firstName: response.data.first_name,
					lastName: response.data.last_name,
					phoneNumber: response.data.phone_number,
					city: response.data.city,
					state: response.data.state,
					about: response.data.about,
					zipCode: response.data.zip_code,
					occupation: response.data.occupation
				});
			})
			.catch((err) => console.log(err));
	};

	// get logged in user info from EventAttendee model
	getUserTotalEvent = () => {
		const UserId = this.state.profile.id;
		Axios.get(`/api/auth/userTotalEvent/${UserId}`)
			.then((response) => {
				this.setState({
					totalEvent: response.data
				});
			})
			.catch((err) => console.log(err));
	};

	getImage = () => {
		const UserId = this.state.profile.id;
		console.log(UserId);
		Axios.get(`/api/auth/image/${UserId}`)
			.then((response) => {
				this.setState({
					imageName: response.data
				});
				console.log(this.state.imageName);
				this.getImageFromS3();
			})
			.catch((err) => console.log(err));
	};

	getImageFromS3 = () => {
		let fileName = this.state.imageName.image_name;
		console.log(fileName);
		Storage.get(fileName)
			.then((data) => {
				console.log(data);
				this.setState({
					imagePreviewUrl: data
				});
			})
			.catch((err) => console.log(err));
	};

	getUserRating = () => {
		Axios.get(`/api/rate/userprofile/${this.state.profile.id}`)
			.then((res) => {
				this.setState({ userRating: res.data });
				console.log(this.state.userRating);
			})
			.catch((err) => console.log(err));
	};

	render() {
		const myStyle = {
			width: '304px',
			height: '200px'
		};
		const imgPreview = {
			textAlign: 'center',
			margin: 'auto',
			height: '150px',
			width: '150px',
			borderLeft: '1px solid gray',
			borderRight: '1px solid gray',
			borderTop: '5px solid gray',
			borderBottom: '5px solid gray',
			borderRadius: 50
		};
		// add avgRating to starRating component value
		// Get average rating using map and reduce
		const ratings = this.state.userRating.map((data) => data.rating);
		const avgRating = ratings.reduce((a, b) => a + parseInt(b), 0) / ratings.length;
		const starRating = <StarRatingComponent name="rating" starCount={5} value={avgRating} />;

		// const that storest the content of the overview
		const overviewTab = (
			<div>
				<div className="row">
					<div className="col">
						<div className="card-profile-stats d-flex justify-content-center mt-md-5">
							<div>
								<span className="heading" />
								<span className="heading">10/10</span>
								<span className="description">AVERAGE EVENT RATINGS</span>
							</div>
							<div>
								<span className="heading">10</span>
								<span className="description">Event Photos</span>
							</div>
							<div>
								<span className="heading">89</span>
								<span className="description">Event Comments</span>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<h3>
						{this.state.firstName} {this.state.lastName}
					</h3>
					<div className="h5 font-weight-300">
						<i className="ni location_pin mr-2" />
						{this.state.state}, {this.state.city}
					</div>
					<div className="h5 mt-4">
						<i className="ni business_briefcase-24 mr-2" />
						{this.state.occupation}
					</div>
					<div>
						<i className="ni education_hat mr-2" />
					</div>
					<hr />
					<div>
						<h5 className="ni business_briefcase-24 mr-2">How to connect:</h5>
						<i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
						<i className="fa fa-facebook-official fa-2x" aria-hidden="true" />
						<i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
						<i className="fa fa-meetup fa-2x" aria-hidden="true" />
					</div>
				</div>
			</div>
		);
		//end of the overview tab //

		//end of star rating tab//
		return (
			<div className=" main-content mb-4">
				{/* <!--reference https://www.creative-tim.com/bits/bootstrap/user-profile-page-argon-dashboard--> */}
				{/* <!-- Header --> */}
				<div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" id="background-cover">
					{/* <!-- Mask --> */}
					<span className="mask bg-gradient-default opacity-8" />
					{/* <!-- Header container --> */}
					<div className="container-fluid d-flex align-items-center">
						<div className="row">
							<div className="col-lg-7 col-md-10 mx-auto">
								<h1 className="display-2 text-dark text-center">{this.state.profile.user_name}</h1>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Page content --> */}
				<div className=" mt-7">
					<div className="row">
						<div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 col-12 ">
							<div className="card card-profile shadow ">
								<div className="row justify-content-center">
									<div className="col-lg-3 order-lg-2">
										<div className="card-profile-image">
											{!this.state.imageName && (
												<img
													style={imgPreview}
													src="../assets/imgs/avatarimg.png"
													className="rounded-circle"
													alt="edit profile to change image"
												/>
											)}

											{this.state.imageName && (
												<img
													style={(myStyle, imgPreview)}
													src={this.state.imagePreviewUrl}
													className="rounded-circle"
												/>
											)}
										</div>
									</div>
								</div>
								<div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
									<div className="d-flex justify-content-between">
										<a href="#" className="btn btn-sm btn-info mr-4">
											Events
										</a>
										<a href="#" className="btn btn-sm btn-default float-right">
											Message
										</a>
									</div>
								</div>

								{/* profile tabs */}
								<div className="card-body shadow p-3 pt-0 pt-md-4 mt-5">
									<ul className="nav nav-tabs ul-design" role="tablist">
										<li className="nav-item">
											<a
												class="a-design"
												className="nav-link active"
												data-toggle="tab"
												href="#tabs-1"
												role="tab"
											>
												Overview
											</a>
										</li>
										<li className="nav-item">
											<a
												class="a-design"
												className="nav-link"
												data-toggle="tab"
												href="#tabs-2"
												role="tab"
											>
												Rating
											</a>
										</li>
										<li className="nav-item">
											<a
												class="a-design"
												className="nav-link"
												data-toggle="tab"
												href="#tabs-3"
												role="tab"
											>
												Event Photos
											</a>
										</li>
										<li className="nav-item">
											<a
												class="a-design"
												className="nav-link"
												data-toggle="tab"
												href="#tabs-3"
												role="tab"
											>
												Comments
											</a>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="tabs-1" role="tabpanel">
											{overviewTab}
										</div>
										<div className="tab-pane " id="tabs-2" role="tabpanel">
											<p>probably delete this</p>
										</div>
										<div className="tab-pane " id="tabs-3" role="tabpanel">
											<div className="row">
												<div className="col">
													<div className="card-profile-stats d-flex justify-content-center mt-md-5">
														<ReviewForm />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-8 order-xl-1">
							<div className="card bg-secondary shadow">
								<div className="card-header bg-white border-0">
									<div className="row align-items-center">
										<div className="col-8">
											<h3 className="mb-0">Profile</h3>
										</div>

										<div className="col-4 text-right">
											<a
												class="a-design"
												href="edituserprofile"
												className="btn-design btn btn-sm btm-sm-design btn-primary-design btn-primary"
											>
												Edit Profile
											</a>
										</div>
									</div>
								</div>
								{/* <!--reference https://bootsnipp.com/snippets/K0ZmK--> */}
								<div className="card-body shadow-lg p-3">
									<div className="col-md-8">
										<div className="tab-content profile-tab" id="myTabContent">
											<div
												className="tab-pane fade show active"
												id="home"
												role="tabpanel"
												aria-labelledby="home-tab"
											>
												<div className="row">
													<div className="col-md-6">
														<label class="label-design">User Name:</label>
													</div>
													<div className="col-md-6">
														<p class="p-design">{this.state.profile.user_name}</p>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label class="label-design">Name:</label>
													</div>
													<div className="col-md-6">
														<p class="p-design">
															{this.state.firstName} {this.state.lastName}
														</p>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label class="label-design">Email:</label>
													</div>
													<div className="col-md-6">
														<p class="p-design">{this.state.profile.email}</p>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label class="label-design">Phone:</label>
													</div>
													<div className="col-md-6">
														<p class="p-design">{this.state.phoneNumber}</p>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label class="label-design">Location:</label>
													</div>
													<div className="col-md-6">
														<p class="p-design">
															{this.state.state} {this.state.city} {this.state.zipCode}
														</p>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label class="label-design">Current Event:</label>
													</div>
													<div className="col-md-6">
														<p class="p-design">N/A</p>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label class="label-design">Joined Events:</label>
													</div>
													<div className="col-md-6">
														<p class="p-design">{this.state.totalEvent.length}</p>
													</div>
												</div>
											</div>

											<hr className="my-4" />
											{/* <!-- Description --> */}
											<form>
												{/* <h6 className="heading-small text-muted mb-4">About me</h6> */}
												<div className="pl-lg-4">
													<div className="form-group focused">
														<label>About Me</label>
														<textarea
															rows="4"
															className="form-control form-control-alternative"
															value={this.state.about}
															readOnly
														/>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6 m-auto text-center">

          </div>
        </div>

      </footer> */}
			</div>
		);
	}
}
