import React, { Component } from 'react';
import { Parallaxx, ParallaxLayer } from 'react-spring/renderprops-addons';
import Jumbotron from 'react-bootstrap/Jumbotron';
import OceanPollutionText from '../OceanPollutionText';
import { Parallax, Background } from 'react-parallax';
import Particles from 'react-particles-js';
import './style.scss';
import oceanFloor from './oceanfloor.png';

export class OceanParallax extends Component {
	componentDidMount() {}

	render() {
		const insideStyles = {
			background: 'white',
			padding: 20,
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)'
		};
		const image1 =
			'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';
		const image2 =
			'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80';

		let cardDiv = (
			<div className="card text-center border-0">
				<div className="card-header" style={{ background: '#001a33' }}>
					<OceanPollutionText />
				</div>
				<div className="card-body body-color">
					<h3 className="card-title">Plastic</h3>
					<div class="card border-0">
						<div class="card-body body-color ">
							<img src="../assets/imgs/treeplastic.jpg" class="rounded float-left" alt="..." />
							<div class="col-10">
								<h5>
									If I told you that there will be more plastic in the ocean than fish 2050 would you
									believe me?
								</h5>
								<p class="ml-2">
									8 million tons of plastic is thrown into the ocean annually. By 2050 there will be
									more plastic in the oceans than fish. Which means people that consume seafood will
									be consuming more plastic. There are currently 800 species worldwide affected by
									marine debris. Everything from seabirds, sea turtules to fins and marine mamals.
									They get entangled with plastic. Many of these animals ingesting plastic debris
									causing suffocation, starvation and drowning.
								</p>
							</div>
						</div>
					</div>

					<div className="card-footer background-longCard">2 days ago</div>
				</div>
			</div>
		);

		const particles = (
			<Particles
				params={{
					particles: {
						number: {
							value: 75,
							density: {
								enable: false
							}
						},
						size: {
							value: 5,
							random: true,
							anim: {
								speed: 8,
								size_min: 0.3
							}
						},
						line_linked: {
							enable: false
						},
						move: {
							random: true,
							speed: 1,
							direction: 'top',
							out_mode: 'out'
						}
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'bubble'
							},
							onclick: {
								enable: true,
								mode: 'repulse'
							}
						},
						modes: {
							bubble: {
								distance: 250,
								duration: 2,
								size: 0,
								opacity: 0
							},
							repulse: {
								distance: 400,
								duration: 4
							}
						}
					}
				}}
			/>
		);

		return (
			<div class="ocean-wrapper">
				{cardDiv}
				<div class="container-fluid ocean-para">
					<div className="card text-center ocean-para ">
						<img className="ocean-floor-img" src="../assets/imgs/ocean/oceanfloor.png" />
						<img className="diver diver1" src="../assets/imgs//ocean/diver.png" />
						<img className="long-fish" src="../assets/imgs/ocean/long-fish.png" />
						<img className="group-fish" src="../assets/imgs/ocean/group-fish.png" />
						<img className="orange-fish" src="../assets/imgs/ocean/orange-fish.png" />
						<img className="blue-fish" src="../assets/imgs/ocean/blue-fish.png" />
						<img className="bottle-trash" src="../assets/imgs/ocean/trash/bottle.png" />
						<img className="slurpee-trash" src="../assets/imgs/ocean/trash/slurpee.png" />
						<img className="clearbag-trash" src="../assets/imgs/ocean/trash/clearbag.png" />
						<img className="bluebag-trash" src="../assets/imgs/ocean/trash/bluebag.png" />

						<div className="oceanParticles">{particles}</div>
					</div>
				</div>

				<div class="background2">
					<Parallax strength={500}>
						<div class="container border-0">
							<div className="card mb-3 body-color mt-5" style={{ maxWidth: '540px;' }}>
								<div className="row no-gutters mb-3 mt-3">
									<div className="col-md-4">
										<div
											id="carouselExampleIndicators"
											style={{ width: '90%', paddingLeft: '35px' }}
											class="carousel slide"
											data-ride="carousel"
										>
											<ol class="carousel-indicators">
												<li
													data-target="#carouselExampleIndicators"
													data-slide-to="0"
													class="active"
												/>
												<li data-target="#carouselExampleIndicators" data-slide-to="1" />
												<li data-target="#carouselExampleIndicators" data-slide-to="2" />
											</ol>
											<div class="carousel-inner">
												<div class="carousel-item active">
													<img
														src="https://cdn.pixabay.com/photo/2018/04/04/11/39/dead-bird-3289550_960_720.jpg"
														class="d-block w-100 img-fluid"
														alt="..."
													/>
												</div>
												<div class="carousel-item">
													<img
														src="https://cdn.pixabay.com/photo/2015/01/31/17/37/oil-rig-explosion-618704_960_720.jpg"
														class="d-block w-100 img-fluid"
														alt="..."
													/>
												</div>
												<div class="carousel-item">
													<img
														src="https://cdn.pixabay.com/photo/2018/01/06/16/07/waters-3065288_960_720.jpg"
														class="d-block w-100 img-fluid"
														alt="..."
													/>
												</div>
											</div>
											<a
												class="carousel-control-prev"
												href="#carouselExampleIndicators"
												role="button"
												data-slide="prev"
											>
												<span class="carousel-control-prev-icon" aria-hidden="true" />
												<span class="sr-only">Previous</span>
											</a>
											<a
												class="carousel-control-next"
												href="#carouselExampleIndicators"
												role="button"
												data-slide="next"
											>
												<span class="carousel-control-next-icon" aria-hidden="true" />
												<span class="sr-only">Next</span>
											</a>
										</div>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h1 class="card-title">Oceans Plastic Pollution</h1>
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<p className="card-text" />
										</div>
									</div>
								</div>
							</div>

							<div className="card mb-3 body-color" style={{ maxWidth: '540px;' }}>
								<div className="row no-gutters mt-3 mb-5">
									<div className="col-md-8">
										<div className="card-body">
											<h1 class="card-title">Oceans Plastic Pollution</h1>
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<p className="card-text" />
										</div>
									</div>

									<div className="col-md-4 mt-5">
										<div
											id="carouselExampleIndicators mr-5"
											style={{ width: '90%' }}
											class="carousel slide"
											data-ride="carousel"
										>
											<ol class="carousel-indicators">
												<li
													data-target="#carouselExampleIndicators"
													data-slide-to="0"
													class="active"
												/>
												<li data-target="#carouselExampleIndicators" data-slide-to="1" />
												<li data-target="#carouselExampleIndicators" data-slide-to="2" />
											</ol>
											<div class="carousel-inner">
												<div class="carousel-item active">
													<img
														src="https://cdn.pixabay.com/photo/2018/04/04/11/39/dead-bird-3289550_960_720.jpg"
														class="d-block w-100 img-fluid"
														alt="..."
													/>
												</div>
												<div class="carousel-item">
													<img
														src="https://cdn.pixabay.com/photo/2015/01/31/17/37/oil-rig-explosion-618704_960_720.jpg"
														class="d-block w-100 img-fluid"
														alt="..."
													/>
												</div>
												<div class="carousel-item">
													<img
														src="https://cdn.pixabay.com/photo/2018/01/06/16/07/waters-3065288_960_720.jpg"
														class="d-block w-100 img-fluid"
														alt="..."
													/>
												</div>
											</div>
											<a
												class="carousel-control-prev"
												href="#carouselExampleIndicators"
												role="button"
												data-slide="prev"
											>
												<span class="carousel-control-prev-icon" aria-hidden="true" />
												<span class="sr-only">Previous</span>
											</a>
											<a
												class="carousel-control-next"
												href="#carouselExampleIndicators"
												role="button"
												data-slide="next"
											>
												<span class="carousel-control-next-icon" aria-hidden="true" />
												<span class="sr-only">Next</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Parallax>
				</div>
			</div>
		);
	}
}

export default OceanParallax;
