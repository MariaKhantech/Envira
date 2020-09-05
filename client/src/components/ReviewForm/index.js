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
			<div className=" col-5 review-block mb-5">
				<hr />

				<hr />

				<div className="col-12 text-center">
					<img
						src="../assets/imgs/rainforest/orangutans/babyorangutan.jpg"
						className="img-rounded review-img"
					/>
					<div className="review-block-name">
						<a href="#">nktailor</a>
					</div>
					<div className="review-block-date">
						January 29, 2016<br />1 day ago
					</div>
				</div>
				<div className="col-12 text-center">
					<div className="review-block-rate">
						<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
							<span className="glyphicon glyphicon-star" aria-hidden="true" />
						</button>
						<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
							<span className="glyphicon glyphicon-star" aria-hidden="true" />
						</button>
						<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
							<span className="glyphicon glyphicon-star" aria-hidden="true" />
						</button>
						<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
							<span className="glyphicon glyphicon-star" aria-hidden="true" />
						</button>
						<button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
							<span className="glyphicon glyphicon-star" aria-hidden="true" />
						</button>
					</div>
					<div className="review-block-title">this was nice in buy</div>
					<div className="review-block-description">
						this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was
						nice in buy this was nice in buy this was nice in buy this was nice in buy
					</div>
				</div>
			</div>
		);
	}
}

export default ReviewForm;
