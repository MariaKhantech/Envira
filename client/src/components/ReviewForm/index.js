import React, { Component } from 'react';
import './style.css';

export class ReviewForm extends Component {
	render() {
		const pullLeft = {
			width: '35px;',
			lineHeight: '1'
		};

		const progress = {
			height: '9px;',
			margin: '8px 0;'
		};
		const div1 = {
			height: '9px;',
			margin: '5px 0;'
		};

		return (
			<div class="form-wrapper">
				{/* review form */}

				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="rating-block">
								<h4>Average user rating</h4>
								<h2 className="bold padding-bottom-7">
									4.3 <small>/ 5</small>
								</h2>
								<button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
									<span className="glyphicon glyphicon-star" aria-hidden="true" />
								</button>
								<button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
									<span className="glyphicon glyphicon-star" aria-hidden="true" />
								</button>
								<button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
									<span className="glyphicon glyphicon-star" aria-hidden="true" />
								</button>
								<button
									type="button"
									className="btn btn-default btn-grey btn-sm"
									aria-label="Left Align"
								>
									<span className="glyphicon glyphicon-star" aria-hidden="true" />
								</button>
								<button
									type="button"
									className="btn btn-default btn-grey btn-sm"
									aria-label="Left Align"
								>
									<span className="glyphicon glyphicon-star" aria-hidden="true" />
								</button>
							</div>
						</div>
						<div className="col-sm-12">
							<h4>Rating breakdown</h4>
							<div className="pull-left">
								<div className="pull-left" style={{ pullLeft }}>
									<div style={{ div1 }}>
										5 <span className="glyphicon glyphicon-star" />
									</div>
								</div>
								<div className="pull-left" style={{ width: '180px;' }}>
									<div className="progress" style={{ progress }}>
										<div
											className="progress-bar progress-bar-success"
											role="progressbar"
											aria-valuenow="5"
											aria-valuemin="0"
											aria-valuemax="5"
											style={{ width: '1000%' }}
										>
											<span className="sr-only">80% Complete (danger)</span>
										</div>
									</div>
								</div>
								<div className="pull-right" style={{ marginLeft: '10px;' }}>
									1
								</div>
							</div>
							<div className="pull-left">
								<div className="pull-left" style={{ pullLeft }}>
									<div style={{ progress }}>
										4 <span className="glyphicon glyphicon-star" />
									</div>
								</div>
								<div className="pull-left" style={{ width: '180px;' }}>
									<div className="progress" style={{ progress }}>
										<div
											className="progress-bar progress-bar-primary"
											role="progressbar"
											aria-valuenow="4"
											aria-valuemin="0"
											aria-valuemax="5"
											style={{ width: '80%' }}
										>
											<span className="sr-only">80% Complete (danger)</span>
										</div>
									</div>
								</div>
								<div className="pull-right" style={{ marginLeft: '10px;' }}>
									1
								</div>
							</div>
							<div className="pull-left">
								<div className="pull-left" style={{ pullLeft }}>
									<div style={{ div1 }}>
										3 <span className="glyphicon glyphicon-star" />
									</div>
								</div>
								<div className="pull-left" style={{ width: '180px;' }}>
									<div className="progress" style={{ progress }}>
										<div
											className="progress-bar progress-bar-info"
											role="progressbar"
											aria-valuenow="3"
											aria-valuemin="0"
											aria-valuemax="5"
											style={{ width: '60%' }}
										>
											<span className="sr-only">80% Complete (danger)</span>
										</div>
									</div>
								</div>
								<div className="pull-right" style={{ marginLeft: '10px;' }}>
									0
								</div>
							</div>
							<div className="pull-left">
								<div className="pull-left" style={{ width: '35px;', lineHeight: '1;' }}>
									<div
										style={{
											height: '9px;',
											margin: '5px 0;'
										}}
									>
										2 <span className="glyphicon glyphicon-star" />
									</div>
								</div>
								<div className="pull-left" style={{ width: '180px;' }}>
									<div className="progress" style={{ progress }}>
										<div
											className="progress-bar progress-bar-warning"
											role="progressbar"
											aria-valuenow="2"
											aria-valuemin="0"
											aria-valuemax="5"
											style={{ width: '40%' }}
										>
											<span className="sr-only">80% Complete (danger)</span>
										</div>
									</div>
								</div>
								<div className="pull-right" style={{ marginLeft: '10px;' }}>
									0
								</div>
							</div>
							<div className="pull-left">
								<div className="pull-left" style={{ pullLeft }}>
									<div style={{ div1 }}>
										1{' '}
										<span className="">
											<i class="fa fa-star" />
										</span>
									</div>
								</div>
								<div className="pull-left" style={{ width: '180px;' }}>
									<div className="progress" style={{ progress }}>
										<div
											className="progress-bar progress-bar-danger"
											role="progressbar"
											aria-valuenow="1"
											aria-valuemin="0"
											aria-valuemax="5"
											style={{ width: '20%' }}
										>
											<span className="sr-only">80% Complete (danger)</span>
										</div>
									</div>
								</div>
								<div className="pull-right" style={{ marginleft: '10px;' }}>
									0
								</div>
							</div>
						</div>
					</div>

					<div className="row ">
						<div className="col-sm-12 ">
							<hr />
							<div className="review-block">
								<hr />

								<hr />
								<div className="row mx-auto">
									<div className="col-sm-12 mx-auto">
										<img
											src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
											className="img-rounded review-img"
										/>
										<div className="review-block-name">
											<a href="#">nktailor</a>
										</div>
										<div className="review-block-date">
											January 29, 2016<br />1 day ago
										</div>
									</div>
									<div className="col-sm-12 mx-auto">
										<div className="review-block-rate">
											<button
												type="button"
												className="btn btn-warning btn-xs"
												aria-label="Left Align"
											>
												<span className="glyphicon glyphicon-star" aria-hidden="true" />
											</button>
											<button
												type="button"
												className="btn btn-warning btn-xs"
												aria-label="Left Align"
											>
												<span className="glyphicon glyphicon-star" aria-hidden="true" />
											</button>
											<button
												type="button"
												className="btn btn-warning btn-xs"
												aria-label="Left Align"
											>
												<span className="glyphicon glyphicon-star" aria-hidden="true" />
											</button>
											<button
												type="button"
												className="btn btn-default btn-grey btn-xs"
												aria-label="Left Align"
											>
												<span className="glyphicon glyphicon-star" aria-hidden="true" />
											</button>
											<button
												type="button"
												className="btn btn-default btn-grey btn-xs"
												aria-label="Left Align"
											>
												<span className="glyphicon glyphicon-star" aria-hidden="true" />
											</button>
										</div>
										<div className="review-block-title">this was nice in buy</div>
										<div className="review-block-description">
											this was nice in buy. this was nice in buy. this was nice in buy. this was
											nice in buy this was nice in buy this was nice in buy this was nice in buy
											this was nice in buy
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* end review form */}

				{/* reply comment https://bootsnipp.com/snippets/PjPa*/}
				<div className="container">
					<div className="row" style={{ marginTop: '40px;' }}>
						<div className="col-md-12">
							<div className="well well-sm">
								<div>
									<a
										className="btn leave-reviewbtn text-center mb-2"
										href="#reviews-anchor"
										id="open-review-box"
									>
										Leave a Review
									</a>
								</div>

								<div className="row" id="post-review-box" style={{ display: 'none;' }}>
									<div className="col-md-12">
										<form accept-charset="UTF-8" action="" method="post">
											<input id="ratings-hidden" name="rating" type="hidden" />
											<textarea
												class="form-control animated"
												cols="50"
												id="new-review"
												name="comment"
												placeholder="Enter your review here..."
												rows="5"
											/>

											<div className="text-right">
												<div className="stars starrr" data-rating="0" />
												<a
													className="btn btn-sm cancel-btn"
													href="#"
													id="close-review-box"
													style={{ display: 'none;', marginRight: '10px;' }}
												>
													<span className="glyphicon glyphicon-remove " />Cancel
												</a>
												<button className="btn btn-sm save-btn" type="submit">
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
			</div>
		);
	}
}

export default ReviewForm;
