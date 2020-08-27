import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
// import 'react-date-range/dist/theme/default.css';
// import 'react-date-range/dist/styles.css';
// import { DateRange } from 'react-date-range';
import './style.scss';

export class CreateEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventName: '',
			date: new Date(),
			description: '',
			contactName: '',
			contactEmail: '',
			conactNumber: '',
			address: '',
			city: '',
			state: ''
		};
	}

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};
	render() {
		var styles = {
			backgroundImage:
				"url('https://images.unsplash.com/photo-1562591970-254bc62245c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
		};
		return (
			<div>
				<div className="container mt-0">
					<form class="form-style text-center" style={{ marginTop: '5em' }}>
						<div className="card person-card ">
							<Jumbotron style={styles}>
								<h1 class="text-white">Create an event</h1>
								<br />
								<p class="text-white">save the planet.</p>

								{/*link these!*/}
							</Jumbotron>
							<div className="card-body">
								<div className="row justify-content-center">
									<div className="form-group col-md-5">
										<label for="eventname" className="col-form-label">
											Event Name:
										</label>
										<input
											type="eventname"
											id="eventname"
											className="form-control"
											placeholder="Example Beach Cleanup "
											value={this.state.eventName}
											onChange={this.handleChange}
											required
										/>

										<label for="date" className="col-form-label mt-3">
											Date:
										</label>
										<input
											type="date"
											id="date"
											className="form-control"
											placeholder="September, 15, 2020"
											value={this.state.date}
											onChange={this.handleChange}
											required
										/>
									</div>
									<div className="form-group col-md-5">
										<label for="description" className="col-form-label">
											Event Description:
										</label>
										<textarea
											class="form-control"
											id="description"
											rows="5"
											style={{ resize: 'none' }}
											value={this.state.description}
											onChange={this.handleChange}
											required
										/>
									</div>

									<div />
								</div>
								<hr />
								<div class="row justify-content-center">
									<div class="col-6">
										<div class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
											<input
												id="upload"
												type="file"
												onchange="readURL(this);"
												class="form-control border-0"
											/>
											<label id="upload-label" for="upload" class="font-weight-light text-muted">
												Choose file
											</label>
											<div class="input-group-append">
												<label for="upload" class="btn btn-secondary m-0 rounded-pill px-4">
													{' '}
													<i class="fa fa-cloud-upload mr-2 text-white" />
													<small class="text-uppercase font-weight-bold text-white">
														Choose file
													</small>
												</label>
											</div>
										</div>
									</div>
								</div>

								<div class="row justify-content-center">
									<p class="font-italic text-center">The image uploaded image will appear below.</p>
									<div class="image-area mt-4">
										<img
											id="imageResult"
											src="https://images.unsplash.com/photo-1562591970-254bc62245c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
											alt=""
											class="img-fluid rounded shadow-sm mx-auto d-block"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6" style={{ padding: '0.5em' }}>
								<div className="card">
									<div className="card-body">
										<h2 className="card-title">How to contact you?</h2>
										<div className="form-group">
											<label for="email" className="col-form-label">
												Contact Person:
											</label>
											<input
												type="text"
												className="form-control"
												id="contactName"
												placeholder="Joe Bloggs"
												value={this.state.contactName}
												onChange={this.handleChange}
												required
											/>

											<label for="email" className="col-form-label">
												Email
											</label>
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="example@gmail.com"
												required
											/>
											<div className="email-feedback" />
										</div>
										<div className="form-group">
											<label for="tel" className="col-form-label">
												Phone number
											</label>
											<input
												type="text"
												className="form-control"
												id="tel"
												placeholder="999-999-9999"
												required
											/>
											<div className="phone-feedback" />
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6 " style={{ padding: '0.5em' }}>
								<div className="card">
									<div className="card-body">
										<h2 className="card-title">Location:</h2>
										<div className="form-group">
											<label for="address:" className="col-form-label">
												Address
											</label>
											<input
												type="city"
												className="form-control"
												id="password"
												placeholder="249 beckon ave."
												required
											/>
										</div>
										<div className="form-group">
											<label for="city" className="col-form-label">
												City
											</label>
											<input
												type="password"
												className="form-control"
												id="city"
												placeholder="Portsmouth"
												required
											/>

											<label for="state" className="col-form-label">
												State
											</label>
											<input
												type="password"
												className="form-control"
												id="state"
												placeholder="NH"
												required
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row ">
							<div class="col-12 text-center">
								<button type="button" class="btn btn-success mb-5 mt-3">
									Create
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateEvents;
