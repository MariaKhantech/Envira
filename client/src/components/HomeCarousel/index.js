import React, { Component } from 'react';
import './style.scss';

export class index extends Component {
	componentDidMount() {
		//intro audio
		// let welcomeAudio = new Audio(
		// 	'https://envirabucket215241-dev.s3.amazonaws.com/polly/welcome-message.69983da5-1526-4a5c-892a-dc34bb8270a0.mp3'
		// );
		// welcomeAudio.play();
	}

	//Enivira audio for home page//
	enviraAudio() {
		let welcomeAudio = new Audio(
			'https://envirabucket215241-dev.s3.amazonaws.com/polly/homepageInfo.73f4aa21-db43-4456-8d20-e004f600575f.mp3'
		);
		welcomeAudio.play();
	}

	render() {
		return (
			<div className="container">
				<div id="carouselExampleCaptions" className="carousel homepage mt-2" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
						<li data-target="#carouselExampleCaptions" data-slide-to="1" />
						<li data-target="#carouselExampleCaptions" data-slide-to="2" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="../assets/imgs/forestdeforestation1.jpg"
								className="d-block w-100"
								alt="orangutans displaced from deforestation"
							/>
							<div className="carousel-caption d-md-block">
								<h2 className="text-white">Forest Fires & Deforestation</h2>
								<p>Go to the Rainforest page to find out more!</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="../assets/imgs/beachplasticanimal.jpg"
								className="d-block w-100"
								alt="Trash that has been left at the beach"
							/>
							<div className="carousel-caption d-md-block">
								<h2>Ocean Pollution</h2>
								<p>Our ocean is full of pollution, check out the Ocean page for more details!</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="../assets/imgs/poorair.jpg"
								className="d-block w-100"
								alt="City with poor air quality"
							/>
							<div className="carousel-caption d-md-block">
								<h2>Pollutants</h2>
								<p>
									In the pollutants section you will have the ability to check your air and water
									quality.
								</p>
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
				<div className="row justify-content-center">
					<div className="col-m-4">
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

					<div className="col-m-4">
						<div className="card bg-transparent border-0" style={{ width: '12rem' }}>
							<div className="card-body ">
								<h5 className="card-title text-center">Ocean Pollution</h5>
								<div className="image ocean-border">
									<object
										className="svg-file oceans"
										type="image/svg+xml"
										data="../assets/imgs/svg/plasticocean.svg"
									>
										<img src="../assets/imgs/svg/plasticocean.svg" />
									</object>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<div className="row">
							<div className="col-sm-6">
								<div className="card">
									<div className="card-body homepgCardBackground text-center">
										<h4 className="card-title text-center">Latest News on Climate Change</h4>
										<hr />
										<img
											src="https://cdn.mos.cms.futurecdn.net/xAe6t2584gbMfJU6Who764-650-80.jpg.webp"
											alt="image of greenland icecaps"
											class="img-thumbnail img-fluid ice-caps rounded"
										/>
										<p class="text-muted">
											Icebergs discharged from Allison Glacier float near Kullorsuaq, western
											Greenland. (Image: © Margie Turrin/Lamont-Doherty Earth Observatory)
										</p>
										<p>
											Greenland set a new record for ice lost 2019, the mass lost is the highest
											than ever recorded since 1948. In 2019 that loss was 532 billion tons, this
											will likely rise global sea levels by 1.5 millimeters. For a hypothetical
											visual, all the water combined would cover the state of California by more
											than 4 feet of water.
										</p>
										<button
											type="button"
											onClick={this.enviraAudio}
											class="btn btn-outline-danger float-right text-danger"
										>
											<i class="fas fa-robot" />
										</button>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="card">
									<div className="card-body homepgCardBackground">
										<h4 className="card-title text-center">How to utilize Envira</h4>
										<hr />
										<p className="card-text text-center">
											Envira is our AI bot that you can interact in a few ways. You can utilize
											her to read text off pages for you or ask her questions about climate change
											and what she feels about it. Here are some of the questions you can ask.
										</p>
										<ul>
											<li>What is your name?</li>
											<li>What is climate change?</li>
											<li>Are we in danger?</li>
											<li>How do you feel about climate change?</li>
											<li>What can you do?</li>
											<li>What is the current temperature of the planet?</li>
										</ul>
										<p class="card-text text-center">
											Envira can read off text to you. When you see the robot{' '}
											<i class="fas fa-robot" /> icon, you can click on this button to have Envira
											read the information to you. More interactions can be had with Envira. These
											are just some tips to start!
										</p>
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

export default index;
