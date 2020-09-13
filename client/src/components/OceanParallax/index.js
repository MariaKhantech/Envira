import React, { Component } from 'react';
import { Parallaxx, ParallaxLayer } from 'react-spring/renderprops-addons';
import Jumbotron from 'react-bootstrap/Jumbotron';
import OceanPollutionText from '../OceanPollutionText';
import { Parallax, Background } from 'react-parallax';
import Particles from 'react-particles-js';
import './style.scss';
import oceanFloor from './oceanfloor.png';

export default class OceanParallax extends Component {

	state = {
		isPlaying: false,
		audioTracks:[]
	}
	
	componentDidMount() {
		let audioArray = [
			new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/oceans-plastic-problem.eb669192-286a-4cb6-84e2-2a4637ab68cd.mp3'),
			new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/oceansoffshore-drilling.94f77961-e2eb-4774-aa15-53785bf2b02b.mp3'),
			new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/marine-wildlife.c72d0dfc-3da7-4a3d-b91f-b973eded03ce.mp3'),
		];

		this.setState({audioTracks:audioArray})
	}

	//plays the audio
	playAudio(index) {
		this.state.audioTracks[index].play();
		this.setState({isPlaying: true});
    }

	//stops audio//
	pauseAudio(index){
		this.state.audioTracks[index].pause();
		this.setState({ isPlaying: false });
	}
	

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
			<div className="card border-0">
				<div className="card-header text-center" style={{ background: '#001a33' }}>
					<OceanPollutionText />
				</div>
				<div className="card-body body-color">
					<div className="card border-0">
					<div className="row no-gutters">
								<div className="col-md-4" style={{backgroundColor: " #fff7ed"}}>
								<img id="imgpol" src="../assets/imgs/treeplastic.jpg" className="card-img rounded ml-4 mb-5 img-fluid" alt="tree covered in garbages"/>
								</div>
							<div className="col-md-8 body-color ">
							<div className="card-body ">
							<h3 className="card-title text-center" style={{ color: '#001a33'}}>Ocean's Plastic Problem</h3>
								<hr style={{backgroundColor: "#004080"}}/>
								<h5 class="text-center">
									If I told you that there will be more plastic in the ocean than fish 2050 would you
									believe me?
								</h5>
								<hr   style={{backgroundColor: "#004080"}}/>
								<p className="ml-2 mr-2">
									Here are just a few ways that the ocean is affected by climate change:
									</p>

									<p className="ml-2 mr-2">8 million tons of plastic is thrown into the ocean annually. By 2050 there will be
									more plastic in the oceans than fish. Which means people that consume seafood will
									be consuming more plastic. There are currently 800 species worldwide affected by
									marine debris. Everything from seabirds, sea turtules to fins and marine mamals.
									They get entangled with plastic. Many of these animals ingesting plastic debris
									causing suffocation, starvation and drowning.
									</p>
									<p className="ml-2 mr-2">Most people have heard of the Great Barrier Reef. Did you know that it is dying due to increased tempatures? Mass coral bleaching results in starvation, shrinkage and death of corals that support thousands of species that live on corals. Coral reefs are sensative to increased tempatures and the oceans are experiancing longer and more severe "marine heat waves" that could push the oceans animals and ecosystems to their limit. Do you know the ocean produces 50-80% of the worlds oxygen?</p>

									<p className="ml-2 mr-2">Many fish migration are being interupted. The fish are migrating towards the poles in response to the ocean warming up. Disturbing many fisheries around the world.</p>
							

									<button
											type="button"
											onClick={() => this.state.isPlaying ? this.pauseAudio(0) : this.playAudio(0)}
											class={`btn btn-outline-danger float-right text-danger  ${this.state.isPlaying ? "btn-danger" : ""}`}
										>
											<i class="fas fa-robot" />
									</button>
							</div>
						</div>
						</div>
						</div>
					<div className="card-footer background-longCard" style={{paddingTop:"4rem"}}></div>
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
					<div className="card text-center ocean-para border-0 ">
						<img className="ocean-floor-img img-fluid" src="../assets/imgs/ocean/oceanfloor.png" />
						<img className="diver diver1 img-fluid" src="../assets/imgs//ocean/diver.png" />
						<img className="long-fish img-fluid" src="../assets/imgs/ocean/long-fish.png" />
						<img className="group-fish img-fluid" src="../assets/imgs/ocean/group-fish.png" />
						<img className="orange-fish img-fluid" src="../assets/imgs/ocean/orange-fish.png" />
						<img className="blue-fish img-fluid" src="../assets/imgs/ocean/blue-fish.png" />
						<img className="bottle-trash img-fluid" src="../assets/imgs/ocean/trash/bottle.png" />
						<img className="slurpee-trash img-fluid" src="../assets/imgs/ocean/trash/slurpee.png" />
						<img className="clearbag-trash img-fluid" src="../assets/imgs/ocean/trash/clearbag.png" />
						<img className="bluebag-trash img-fluid" src="../assets/imgs/ocean/trash/bluebag.png" />

						<div className="oceanParticles">{particles}</div>
					</div>
				</div>

				<div class="background2">
					<Parallax strength={500}>
						<div className="container border-0" style={{ height: '1800px'}}>

						<div className="card body-color2 border-0 mb-3" style={{width: "18rem;"}}>
							<div className="card-body">
							<hr className="bg-white"/>
								<h3 className="card-title text-white text-center mb-2">Envira</h3>
								<hr className="bg-white"/>
								<h6 className="card-subtitle mb-2 text-white text-center">Questions you can ask Envira</h6>
								<li className="card-text text-white">What is the tempature of the ocean?</li>
								<li className="text-white">What can I do to help the ocean?</li>
								<li className="text-white">How do you feel about the ocean pollution?</li>
								<li className="text-white">How will this affect the ocean for future generations?</li>
								<li className="text-white">What are some ways I can reduce plastic use?</li>
								<li className="text-white">What is your favorite ocean animal?</li>
								<h5 class="text-white font-weight-bold">For added fun click on the bubbles!</h5>

							
							</div>
							</div>

						<div className="card mb-3 body-color2 border-0" style={{ maxWidth: '540px;' }}>
								<div className="row no-gutters mt-3 mb-5">
								<div className="col-md-5 mt-5">
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
												<span class="sr-only text-white">Previous</span>
											</a>
											<a
												class="carousel-control-next"
												href="#carouselExampleIndicators"
												role="button"
												data-slide="next"
											>
												<span class="carousel-control-next-icon" aria-hidden="true" />
												<span class="sr-only text-white">Next</span>
											</a>
										</div>
									</div>
									<div className="col-md-7">
										<div className="card-body">
											<h1 class="card-title text-center text-white">Oceans Offshore Drilling</h1>
											<hr class="bg-white"/>
											<p className="card-text text-white">
											First, let us go over the big oil spills. These oil spills are a known killer of wildlife. In 2010 at the Gulf of Mexico, BP's Deepwater Horizon rig had an explosion resulting in a spill that covered 68,000 square miles of sea surface. It killed approximately 1 MILLION coastal and offshore seabirds, 5,000 marine mammals, and 1,000 sea turtles. Smaller spills don't typically make headlines. Oil spills, both big and small, have been increasing over the years. In 2018 there were 2,834 oil spills reported by oil and gas companies in Colorado alone. This can have long term environmental impacts and devastating effects on animals through direct contact, inhalation, and ingestion of toxic chemicals. . 
											</p>
											<p class="text-white">
											These oil spills have a negative impact on local communities as well. More than 12 million people live near oil and gas facilities. This leaves those communities exposed to water and air pollution on a daily basis. This can lead to an array of health problems. This mostly affects people of color who typically live in neighborhoods with more pollution.
											</p>
											<p className="text-white"> The dirtiest emissions originate from fossil fuels, the most abundant being carbon dioxide, primarily released into the air from burning oil, coal, and gas.  Methane a gas that is released into the air during the extraction of natural gas through the method of "fracking."</p>

											<p class="text-white">United States is one of the world's top emitters at 24% of all U.S greenhouse gas emissions, including methane, which can be traced back to fossil fuel extraction from federal lands.</p>
											<button
											type="button"
											onClick={() => this.state.isPlaying ? this.pauseAudio(1) : this.playAudio(1)}
											class={`btn btn-outline-danger float-right text-danger  ${this.state.isPlaying ? "btn-danger" : ""}`}>
											<i class="fas fa-robot" />
										</button>
										</div>
									</div>

								</div>
							</div>

							<div className="card mb-3 body-color2 border-0" style={{ maxWidth: '540px;' }}>
								<div className="row no-gutters mt-3 mb-5">
									<div className="col-md-7">
										<div className="card-body">
											<h1 class="card-title text-center text-white">Marine Wildlife</h1>
											<hr class="bg-white"/>
											<p className="card-text text-white">
											Illegal Fish poaching has affected many marine mammals to the brink of becoming endangered. Whales have been hunted, tangled in fishing gear or marine garbage, and also killed by ships. Something as small as a party balloon can kill a whale by cutting off its digestive tract. Another species affected are seals. The primary loss of certain seal species is due to commercial fishing and loss of food. 
											</p>
											<p class="text-white">
											Currently, too many fish are being taken out of the ocean. This creates an imbalance in the ocean's ecosystem, creating less food availability for species of animals. We are finding that catching to many fish at once interrupts the breeding population, and it becomes too depleted to recover.
											</p>
											<p className="card-text" />
											<button
											type="button"
											onClick={() => this.state.isPlaying ? this.pauseAudio(2) : this.playAudio(2)}
											class={`btn btn-outline-danger float-right text-danger  ${this.state.isPlaying ? "btn-danger" : ""}`}
											>
											<i class="fas fa-robot" />
										</button>
										</div>
									</div>

									<div className="col-md-5 mt-5">
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