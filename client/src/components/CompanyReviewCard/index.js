import React, { Component } from 'react';
import ResponseCard from '../ResponseCard';
import './style.scss';

export class CompanyReviewCard extends Component {
	render() {
		return (
			<div className="wrapper">
				{/* <div className="card text-center">
					<div className="card-header">IKEA</div>
					<div className="card-body">
						<h5 className="card-title">Special title treatment</h5>
						<p className="card-text">
							With supporting text below as a natural lead-in to additional content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
					<div className="card-footer text-muted">2 days ago</div>
				</div>

				{/*https://www.bootdey.com/snippets/view/bs4-Ratings-and-Reviews-page#html*/}
				{/* <div className="row">
					<div className="col-lg-6 mt-5 mx-auto">
						<div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
							<h5 className="mb-0 mb-4 text-center">User Environmental Rating</h5>
							<div className="graph-star-rating-header">
								<div className="star-rating">
									<a href="#">
										<i className="icofont-ui-rating active" />
									</a>
									<a href="#">
										<i className="icofont-ui-rating active" />
									</a>
									<a href="#">
										<i className="icofont-ui-rating active" />
									</a>
									<a href="#">
										<i className="icofont-ui-rating active" />
									</a>
									<a href="#">
										<i className="icofont-ui-rating" />
									</a>{' '}
								</div>
								<p className="text-black mb-4 mt-2 text-center">Rated 3.5 out of 5</p>
							</div>
							<div className="graph-star-rating-body">
								<div className="rating-list">
									<div className="rating-list-left text-black">5 Star</div>
									<div className="rating-list-center">
										<div className="progress">
											<div
												style={{ width: '56%' }}
												aria-valuemax="5"
												aria-valuemin="0"
												aria-valuenow="5"
												role="progressbar"
												className="progress-bar bg-primary"
											>
												<span className="sr-only">80% Complete (danger)</span>
											</div>
										</div>
									</div>
									<div className="rating-list-right text-black">56%</div>
								</div>
								<div className="rating-list">
									<div className="rating-list-left text-black">4 Star</div>
									<div className="rating-list-center">
										<div className="progress">
											<div
												style={{ width: '23%' }}
												aria-valuemax="5"
												aria-valuemin="0"
												aria-valuenow="5"
												role="progressbar"
												className="progress-bar bg-primary"
											>
												<span className="sr-only">80% Complete (danger)</span>
											</div>
										</div>
									</div>
									<div className="rating-list-right text-black">23%</div>
								</div>
								<div className="rating-list">
									<div className="rating-list-left text-black">3 Star</div>
									<div className="rating-list-center">
										<div className="progress">
											<div
												style={{ width: '11%' }}
												aria-valuemax="5"
												aria-valuemin="0"
												aria-valuenow="5"
												role="progressbar"
												className="progress-bar bg-primary"
											>
												<span className="sr-only">80% Complete (danger)</span>
											</div>
										</div>
									</div>
									<div className="rating-list-right text-black">11%</div>
								</div>
								<div className="rating-list">
									<div className="rating-list-left text-black">2 Star</div>
									<div className="rating-list-center">
										<div className="progress">
											<div
												style={{ width: '2%' }}
												aria-valuemax="5"
												aria-valuemin="0"
												aria-valuenow="5"
												role="progressbar"
												className="progress-bar bg-primary"
											>
												<span className="sr-only">80% Complete (danger)</span>
											</div>
										</div>
									</div>
									<div className="rating-list-right text-black">02%</div>
								</div>
							</div>
							<div className="graph-star-rating-footer text-center mt-3 mb-3">
								<button type="button" className="btn btn-outline-primary btn-sm">
									Rate and Review
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="media-body">
					<div className="reviews-members-header">
						<span className="star-rating float-right">
							<a href="#">
								<i className="icofont-ui-rating active" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating active" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating active" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating active" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating" />
							</a>
						</span>
						<h6 className="mb-1">
							<a className="text-black" href="#">
								Singh Osahan
							</a>
						</h6>
						<p className="text-gray">Tue, 20 Mar 2020</p>
					</div>
					<div className="reviews-members-body">
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
							of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard
							McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
							more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
							cites of the word in classNameical literature, discovered the undoubtable source. Lorem
							Ipsum comes from sections{' '}
						</p>
					</div>
				</div>

				<div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
					<h5 className="mb-4">Leave Comment</h5>
					<p className="mb-2">Rate the Place</p>
					<div className="mb-4">
						<span className="star-rating">
							<a href="#">
								<i className="icofont-ui-rating icofont-2x" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating icofont-2x" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating icofont-2x" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating icofont-2x" />
							</a>
							<a href="#">
								<i className="icofont-ui-rating icofont-2x" />
							</a>
						</span>
					</div>
					<form>
						<div className="form-group">
							<label>Your Comment</label>
							<textarea className="form-control" />
						</div>
						<div className="form-group">
							<button className="btn btn-primary btn-sm" type="button">
								{' '}
								Submit Comment{' '}
							</button>
						</div>
					</form>
				</div> */}
				<ResponseCard />
			</div>
		);
	}
}

export default CompanyReviewCard;
