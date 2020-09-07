import React, { Component } from 'react';
import ReviewComment from '../ReviewForm';
import ImageGallery from 'react-image-gallery';
import './style.scss';

export class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviewArray: []
		};

		this.initializeCountdown = this.initializeCountdown.bind(this);
	}

	//load any data here like comments
	componentDidMount() {
		let reviewArray = [
			{ name: <ReviewComment /> },
			{ name: <ReviewComment /> },
			{ name: <ReviewComment /> },
			{ name: <ReviewComment /> },
			{ name: <ReviewComment /> }
		];
		this.setState({ reviewArray });
		//setting date for testing
		let date = new Date();
		date.setDate(30);
		this.initializeCountdown(date);
	}

	//initialize the countdouwn
	initializeCountdown(endtime) {
		var timeinterval = setInterval(function() {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			var t = {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			};

			document.querySelector('.days > .value').innerText = t.days;
			document.querySelector('.hours > .value').innerText = t.hours;
			document.querySelector('.minutes > .value').innerText = t.minutes;
			document.querySelector('.seconds > .value').innerText = t.seconds;
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}, 1000);
	}

	render() {
		const scrollingContainer = {
			height: '800px',
			overflowY: 'scroll'
		};

		return (
			<div class="wrapper2">
				<div class="container-fluid ">
					<div
						class="jumbotron background-img"
						style={{ marginBottom: ' 0', borderBottom: '4rem solid #85dcba' }}
					>
						<div class="card flex-row  float-right border-0 style-contact-person">
							<div class="border-0">
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
						<h1 class="display-4 text-white">Event Name</h1>
						<p class="lead text-white"> EVENT DATE</p>
						<p class="lead">
							<a class="btn btn-primary btn-lg" style={{ marginTop: '8rem' }} href="#" role="button">
								Join Event
							</a>
						</p>
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
					{/* <div class="container"> */}
					<div class="row justify-content-center">
						<div class="col-3 ">
							<figure>
								<img
									class="event-img"
									src="https://images.unsplash.com/photo-1554265352-d7fd5129be15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
								/>
							</figure>
						</div>
						<div class="col-4">
							<header class="entry-header">
								<h2 class="entry-title text-white">About the event</h2>
							</header>
							<div>
								<p class="mt-3 text-white">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi exercitationem,
									quaerat maxime veritatis vel quae rerum dolore voluptatum tempore in commodi
									asperiores suscipit laborum corrupti expedita, omnis possimus laudantium!
								</p>
							</div>
						</div>
					</div>

					<div class="container mt-5 text-center text-white">
						<h1 class="text-white">Event Attendees</h1>
						{/* <section>
						<ImageGallery items={images} />
						</section> */}
					</div>
				</div>

				<div className="row justify-content-center mb-5" style={{ marginTop: '5rem' }}>
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

				<div class=" home-info-section">
					<div class="row justify-content-center">
						<div className="row" style={{ marginTop: '40px;' }}>
							<div className="col-md-12">
								<div className="well well-sm">
									<div class="text-center">
										<h1 className=" leave-reviewbtn text-center mb-2">Event Review</h1>
									</div>

									<div className="row" id="post-review-box" style={{ display: 'none;' }}>
										<div className="col-md-12">
											<form accept-charset="UTF-8" action="" method="post">
												<input id="ratings-hidden" name="rating" type="hidden" />
												<textarea
													class="form-control animated"
													cols="100"
													id="new-review"
													name="comment"
													placeholder="Enter your review here..."
													rows="5"
												/>

												<div className="text-center">
													<button className="btn btn-lg save-btn mt-2" type="submit">
														Save
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div class="container bg-dark border border-primary rounded">
						<div class="row mt2 justify-content-around" style={scrollingContainer}>
							{this.state.reviewArray.map((item) => {
								return item.name;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
