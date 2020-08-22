import React, { Component } from 'react';
import './style.css';

export class UserProfile extends Component {
	componentDidMount() {
		document.body.style.background = '-webkit-linear-gradient(left, #3931af, #00c6ff)';
	}
	render() {
		return (
			<div className="emp-profile">
				<form method="post">
					<div className="row">
						<div className="col-md-4">
							<div className="profile-img">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
									alt=""
								/>
								<div className="file btn btn-lg btn-primary">
									Change Photo
									<input type="file" name="file" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="profile-head">
								<h5>{this.props.name}</h5>
								<h6>Web Developer and Designer</h6>
								<p className="proile-rating">
									EVENT RANKINGS : <span>8/10</span>
								</p>
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="home-tab"
											data-toggle="tab"
											href="#home"
											role="tab"
											aria-controls="home"
											aria-selected="true"
										>
											About Me:
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="profile-tab"
											data-toggle="tab"
											href="#profile"
											role="tab"
											aria-controls="profile"
											aria-selected="false"
										>
											Contact Info
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="profile-work">
								<p>WORK LINK</p>
								<a href="">Website Link</a>
								<br />
								<a href="">Bootsnipp Profile</a>
								<br />
								<a href="">Bootply Profile</a>
								<p>SKILLS</p>
								<a href="">Web Designer</a>
								<br />
								<a href="">Web Developer</a>
								<br />
								<a href="">WordPress</a>
								<br />
								<a href="">WooCommerce</a>
								<br />
								<a href="">PHP, .Net</a>
								<br />
							</div>
						</div>
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
											<label>User Id</label>
										</div>
										<div className="col-md-6">
											<p>Kshiti123</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Name</label>
										</div>
										<div className="col-md-6">
											<p>Kshiti Ghelani</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Email</label>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Phone</label>
										</div>
										<div className="col-md-6">
											<p>123 456 7890</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Profession</label>
										</div>
										<div className="col-md-6">
											<p>Web Developer and Designer</p>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="profile"
									role="tabpanel"
									aria-labelledby="profile-tab"
								>
									<div className="row">
										<div className="col-md-6">
											<label>Name:</label>
										</div>
										<div className="col-md-6">
											<p />
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Location:</label>
										</div>
										<div className="col-md-6">
											<p>10$/hr</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Contact Email:</label>
										</div>
										<div className="col-md-6">
											<p>230</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Contact Number:</label>
										</div>
										<div className="col-md-6">
											<p>Expert</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Availability</label>
										</div>
										<div className="col-md-6">
											<p>6 months</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<label>Your Bio</label>
											<br />
											<p>Your detail description</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default UserProfile;
