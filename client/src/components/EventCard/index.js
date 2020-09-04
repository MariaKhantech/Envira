import React, { Component } from 'react';
import './style.scss';

export class index extends Component {
	render() {
		return (
			<div class="wrapper2">
				<div class="container-fluid ">
					<div
						class="jumbotron background-img"
						style={{ marginBottom: ' 0', borderBottom: '4rem solid #85dcba' }}
					>
						<h1 class="display-4 text-white">Event Name</h1>
						<p class="lead text-white"> EVENT DATE</p>
						<hr class="my-4" />
					</div>
				</div>

				{/* <!--count down reference https://codepen.io/techmariakhan/pen/ExKXjGv--> */}
				<div class="continer centerIt">
					<div>
						<label class="project-name text-center">Event Countdown:</label>
					</div>
					<div class="counter counter-div">
						<div class="days">
							<div class="value">00</div>
							<span>Days</span>
						</div>
						<div class="hours">
							<div class="value">00</div>
							<span>Hours</span>
						</div>
						<div class="minutes">
							<div class="value">00</div>
							<span>Minutes</span>
						</div>
						<div class="seconds">
							<div class="value">00</div>
							<span>Seconds</span>
						</div>
					</div>
				</div>

				<div class=" home-info-section">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-4 col-lg-5">
								<figure>
									<img
										class="event-img"
										src="https://images.unsplash.com/photo-1554265352-d7fd5129be15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
									/>
								</figure>
							</div>
							<div class="col-12 col-md-8 col-lg-7">
								<header class="entry-header">
									<h2 class="entry-title text-white">About the event</h2>
								</header>
								<div>
									<p class="mt-3 text-white">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi
										exercitationem, quaerat maxime veritatis vel quae rerum dolore voluptatum
										tempore in commodi asperiores suscipit laborum corrupti expedita, omnis possimus
										laudantium!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container mt-5 ">
					<div class="card flex-row flex-wrap border-0 style-contact-person">
						<div class="card-header border-0">
							<img
								src="https://st3.depositphotos.com/1694341/14414/i/450/depositphotos_144140695-stock-photo-elon-musk.jpg"
								height="300px"
								alt=""
							/>
						</div>
						<div class="card-body ">
							<h4>
								<span>
									<b>Contact: </b>
								</span>Elon Musk
							</h4>
							<hr />
							<h5>
								<span>
									<b>Phone:</b>
								</span>603-999-9999
							</h5>
							<h5>
								<span>
									<b>Email: </b>
								</span>
								<i>elonmusk@gmail.com</i>
							</h5>
							<p class="card-text ">
								<span>
									<b>Website: </b>
								</span>https://www.spacex.com/
							</p>
						</div>
					</div>
				</div>
				<div className="container-fluid mt-5 ">
					<div className="row mt-5 home-info-section ">
						<div className="col-4 text-center">
							<div className="card border-0  " style={{ width: '10rem;' }}>
								<div className="card-body shadow-lg p-3 rounded location-cardStyle">
									<div className="section-title">
										<h2 className="text-white">Location</h2>
										<p class="text-white">Get directions to our event center</p>
									</div>
									<div class="ct-address">
										<span class="text-white">Address:</span>
										<p class="text-white">
											01 Pascale Springs Apt. 339, NY City <br />United State
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-6">
							<div className="map-responsive text-center">
								<iframe
									className="rounded map-style"
									src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=UNH+PORTSMOUTH"
									width="500"
									height="300"
									frameborder="0"
									allowfullscreen
								/>
							</div>
						</div>
					</div>
				</div>

				{/*
					<div class="row  justify-content-center mt-5 home-info-section ">
						<div class="col-6 mt-5">
							<div class="section-title">
								<h2>Location</h2>
								<p>Get directions to our event center</p>
							</div>
							<div class="ct-address">
								<span>Address:</span>
								<p>
									01 Pascale Springs Apt. 339, NY City <br />United State
								</p>
							</div>
						</div>
						<div class="col-6">
							<div class="map-responsive">
								<iframe
									src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=UNH+PORTSMOUTH"
									width="500"
									height="300"
									frameborder="0"
									style={{ borderStyle: 'solid' }}
									allowfullscreen
								/>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		);
	}
}

export default index;
