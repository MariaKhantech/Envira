import React, { Component } from 'react';
import './style.scss';

export class index extends Component {
	render() {
		return (
			<div className="container">
				<div id="carouselExampleCaptions" className="carousel slide homepage mt-2" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
						<li data-target="#carouselExampleCaptions" data-slide-to="1" />
						<li data-target="#carouselExampleCaptions" data-slide-to="2" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="../assets/imgs/forestdeforestation.jpg"
								className="d-block w-100"
								alt="orangutans displaced from deforestation"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h2 className="text-white">Forest Fires & Deforestation</h2>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="../assets/imgs/beachplastic.jpg"
								className="d-block w-100"
								alt="Trash that has been left at the beach"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Second slide label</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="../assets/imgs/poorair.jpg"
								className="d-block w-100"
								alt="City with poor air quality"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Third slide label</h5>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</div>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>

				<div className="card bg-transparent border-0" style={{ width: '12rem' }}>
					<div className="card-body">
						<h5 className="card-title text-center">Forest Fires & Deforestation</h5>
						<div className="image">
							<object
								className="svg-file fires"
								type="image/svg+xml"
								data="../assets/imgs/svg/editedWildfire.svg"
							>
								<img src="../assets/imgs/svg/editedWildfire.svg" />
							</object>{' '}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
