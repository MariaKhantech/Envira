import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import Axios from 'axios';
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
	//test for S3//
	saveFile = async () => {
		// const { file } = this.state;
		await Storage.put('test.txt', 'hello');
		console.log('successfully saved file...');
	};

	postNewEvent = async (event) => {
		event.preventDefault();
		Axios.post('/api/create/eventcreate', {
			eventName: this.state.eventName,
			date: this.state.date,
			description: this.state.description,
			contactName: this.state.contactName,
			contactEmail: this.state.contactEmail,
			contactNumber: this.state.contactNumber,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			id: this.state.profile.id
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

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
					<form className="form-style text-center" style={{ marginTop: '5em' }}>
						<div className="card person-card ">
							<Jumbotron style={styles}>
								<h1 className="text-white">Create an event</h1>
								<br />
								<p className="text-white">save the planet.</p>

								{/*link these!*/}
							</Jumbotron>
							<div className="card-body">
								<div className="row justify-content-center">
									<div className="form-group col-md-5">
										<label htmlFor="eventname" className="col-form-label">
											Event Name:
										</label>
										<input
											type="text"
											id="eventname"
											name="eventName"
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
											type="text"
											id="date"
											className="form-control"
											placeholder="September, 15, 2020"
											name="date"
											value={this.state.date}
											onChange={this.handleChange}
											required
										/>
									</div>
									<div className="form-group col-md-5">
										<label htmlFor="description" className="col-form-label">
											Event Description:
										</label>
										<textarea
											className="form-control"
											type="text"
											id="description"
											rows="5"
											style={{ resize: 'none' }}
											name="description"
											value={this.state.description}
											onChange={this.handleChange}
											required
										/>
									</div>

									<div />
								</div>
								<hr />
								<div className="row justify-content-center">
									<div className="col-6">
										<div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
											<input
												id="upload"
												type="file"
												onchange="readURL(this);"
												className="form-control border-0"
											/>
											<label
												id="upload-label"
												for="upload"
												className="font-weight-light text-muted"
											>
												Choose file
											</label>
											<div className="input-group-append">
												<label for="upload" className="btn btn-secondary m-0 rounded-pill px-4">
													{' '}
													<i className="fa fa-cloud-upload mr-2 text-white" />
													<small className="text-uppercase font-weight-bold text-white">
														Choose file
													</small>
												</label>
											</div>
										</div>
									</div>
								</div>

								<div className="row justify-content-center">
									<p className="font-italic text-center">
										The image uploaded image will appear below.
									</p>
									<div className="image-area mt-4">
										<img
											id="imageResult"
											src="https://images.unsplash.com/photo-1562591970-254bc62245c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
											alt=""
											className="img-fluid rounded shadow-sm mx-auto d-block"
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
											<label htmlFor="contactname" className="col-form-label">
												Contact Person:
											</label>
											<input
												type="text"
												className="form-control"
												id="contactName"
												placeholder="Joe Bloggs"
												name="contactName"
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
												name="contactEmail"
												value={this.state.contactEmail}
												onChange={this.handleChange}
												id="email"
												placeholder="example@gmail.com"
												required
											/>
											<div className="email-feedback" />
										</div>
										<div className="form-group">
											<label htmlFor="tel" className="col-form-label">
												Phone number
											</label>
											<input
												type="text"
												className="form-control"
												name="contactNumber"
												value={this.state.contactNumber}
												onChange={this.handleChange}
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
											<label htmlFor="address:" className="col-form-label">
												Address
											</label>
											<input
												type="text"
												className="form-control"
												id="address"
												name="address"
												value={this.state.address}
												onChange={this.handleChange}
												placeholder="249 beckon ave."
												required
											/>
										</div>
										<div className="form-group">
											<label htmlFor="city" className="col-form-label">
												City
											</label>
											<input
												type="text"
												className="form-control"
												name="city"
												value={this.state.city}
												onChange={this.handleChange}
												id="city"
												placeholder="Portsmouth"
												required
											/>

											<label htmlFor="state" className="col-form-label">
												State
											</label>
											<input
												type="text"
												className="form-control"
												name="state"
												value={this.state.state}
												onChange={this.handleChange}
												id="state"
												placeholder="NH"
												required
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row ">
							<div className="col-12 text-center">
								<button type="button" onClick={this.postNewEvent} className="btn btn-success mb-5 mt-3">
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
