import React, { Component } from 'react';
import EnviraBot from '../EnviraBot';
import { Parallax } from "react-parallax";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './style.scss';

export class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false
		
		};
		this.enviraAudio=this.enviraAudio.bind(this);
		this.pauseEnviraAudio=this.pauseEnviraAudio.bind(this);
		this.cardAudio = new Audio(
			'https://envirabucket215241-dev.s3.amazonaws.com/polly/polarbearPOLLY.5239010d-8dc1-4a70-9cfa-0620dbb1a4ac.mp3'
		);
		this.audio2 = new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/envirapolarbearGrowUp.fff7a681-fa8d-44a3-ad77-ec60bbbe3dd2.mp3')

	  }
	componentDidMount() {
		//intro audio
		let welcomeAudio = new Audio(
			'https://envirabucket215241-dev.s3.amazonaws.com/polly/welcome-message.69983da5-1526-4a5c-892a-dc34bb8270a0.mp3'
		);
		welcomeAudio.play();


	}
	

	//Enivira audio for home page//
	enviraAudio() {

		if (this.cardAudio === null) {
			this.cardAudio = new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/polarbearPOLLY.5239010d-8dc1-4a70-9cfa-0620dbb1a4ac.mp3');
		  }

		if (this.audio2 === null) {
			this.audio2 = new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/envirapolarbearGrowUp.fff7a681-fa8d-44a3-ad77-ec60bbbe3dd2.mp3')
		 }

		this.cardAudio.play();
		this.setState({isPlaying: true})

		setTimeout(() => {
			if(this.audio2!= null) {
				this.audio2.play();
			}
		  }, 16000);
	}

	//stops audio//
	pauseEnviraAudio(){
		this.setState({ isPlaying: false });
		this.cardAudio.pause();
		this.audio2 = null
	  }


	render() {

		const insideStyles = {
		
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)"
		  };
		  
		return (
			<div className="container-fluid">

				<Parallax bgImage={'https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} strength={600}>
					<div style={{ height: '100vh' }}>
						<div style={insideStyles}><h1 className ="text-white"><b>ENVIRA</b></h1></div>
					</div>
					</Parallax>
=
				<div className="row justify-content-around ">
					<div id='svg1'className="col-4 ">
					<a href='/rainforest'>
						<div className="card bg-transparent border-0 mx-auto" style={{ width: '12rem' }}>
							<div className="card-body">
							
								<h5 className="card-title text-center text-white ml-2">Forest Fires & Deforestation</h5>
						
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
						</a>
					</div>

					<div id='svg2'className="col-4 ">
					<a href='/ocean'>
						<div className="card bg-transparent border-0 mx-auto" style={{ width: '12rem' }}>
							<div className="card-body ">
								<h5 className="card-title ml-5 text-white">Ocean Pollution</h5>
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
						</a>
					</div>
					
				</div>

						<div className="row justify-content-around">
							
							<div className="col-md-4">
						
								<div className="card border-0">
									<div className="card-body homepgCardBackground text-center">
									
										<h4 className="card-title text-center text-white"><b>Latest News on the Arctic</b></h4>
										<hr class="bg-white"/>
										<img
											src="../assets/imgs/polarbears.jpg"
											alt="image of greenland icecaps"
											class="img-thumbnail img-fluid ice-caps rounded"
										/>
										
										<p class="text-white">
										The Polar Bear, the largest bear in the world, and a powerful symbol of strength and endurance in the Arctic are endangered. The protection of the polar bear habitat is urgent due to the arctic melting.
										</p>

										
										{/*https://stackoverflow.com/questions/39779527/toggle-play-pause-in-react-with-audio*/}
										<button
											type="button"
											onClick={this.state.isPlaying ? this.pauseEnviraAudio : this.enviraAudio}
											class={`btn btn-outline-danger float-right text-danger ${this.state.isPlaying ? "btn-danger" : ""}`}
										>
											<i class="fas fa-robot" />
										</button>
										
									</div>
								
								</div>
					
							</div>

							<div className="col-md-2 text-center ">
								<EnviraBot  centerRobot={true}/>
							</div>
						
							<div className="col-md-4">
							
								<div className="card border-0">
									<div className="card-body homepgCardBackground">
									
										<h4 className="card-title text-center text-white"><b>How to utilize Envira</b></h4>
										<hr class="bg-white"/>
										<p className="card-text text-center text-white">
											Envira is our AI bot that you can interact in a few ways. You can utilize
											her to read text off pages for you or ask her questions about climate change
											and what she feels about it. Here are some of the questions you can ask.
										</p>
										<ul class="text-white">
											<li>What is your name?</li>
											<li>What is climate change?</li>
											<li>Are we in danger?</li>
											<li>How do you feel about climate change?</li>
											<li>What can you do?</li>
											<li>What is the current temperature of the planet?</li>
										</ul>
										<p class="card-text text-center text-white">
											Envira can read off text to you. When you see the robot &nbsp;
											<span>
												<i class="text-danger fas fa-robot" />
											</span>
											&nbsp; icon, you can click on this button to have Envira read the
											information to you. More interactions can be had with Envira. These are just
											some tips to start!
										</p>
								
									</div>
								
								</div>
								
							</div>
						
						</div>
				
				<Zoom>
				
				</Zoom>
				<div class="row">
					<div class="col-md-12 h1-Hstyle mt-5 text-center">
					<img class="img-fluid" src="../assets/homepageIcons/titlehelp.png"/>
					</div>
					
				</div>

				<div className="row">
				<div className="card-group">
					
					<div className="card orangeHcard text-center">
						<Fade bottom>
						<a href="http://www.greeneducationfoundation.org/nationalgreenweeksub/waste-reduction-tips.html"><img className="card-img-top icon-Hsize mx-auto mt-5" src="../assets/homepageIcons/recycle.png" alt="recycle bin with plastic bottles"/></a>
						
						<div className="card-body">
						<h5 className="card-title text-white">REDUCE PLASTIC WASTE</h5>
						<p className="card-text text-white">You can learn some tips on using less plastic and reducing your waste. </p>
							</div>
						</Fade>
					</div>
					
					<div className="card greenHcard text-center">
						<Fade bottom>
						<a href="https://www.watercalculator.org/how-to-save-water/"><img className="card-img-top  icon-Hsize mx-auto mt-5" src="../assets/homepageIcons/reservewater.png" alt="running faucet with hands under them"/></a>
						<div className="card-body">
						<h5 className="card-title text-white">CONSERVE WATER</h5>
						<p className="card-text text-white">Find more ways to conserve water. We are depleting our water reservoirs. It is essential to do our part.</p>

						</div>
						</Fade>
					</div>
					<div className="card orangeHcard text-center">
						<Fade bottom>
						<a href="/eventsearch"><img className="card-img-top  icon-Hsize mx-auto mt-5" src="../assets/homepageIcons/people.png" alt="group of people"/></a>
						<div className="card-body">
						<h5 className="card-title text-white">JOIN THE COMMUNITY</h5>
						<p className="card-text text-white">We have created a a way for you to join the community in the efforts to combat climate change! Click to head over to the events page. Find an Event to join or create one! If you would like to create an event please remember to sign up.</p>
						</div>
						</Fade>
					</div>
					<div className="card greenHcard text-center">
					<Fade bottom>
						<img className="card-img-top  icon-Hsize mx-auto mt-5" src="../assets/homepageIcons/growplants.png" alt="plant growing in soil"/>
						<div className="card-body">
						<h5 className="card-title text-white">PLANT & GROW</h5>
						<p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
						</div>
						</Fade>
					</div>

					</div>

				</div>

				<div className="row mb-5">
				<div className="card-group" >
			
					<div className="card greenHcard text-center">
					<Fade bottom>
						<a href="https://www.thedodo.com/5-things-fight-climate-change-2103743992.html"><img className="card-img-top icon-Hsize mx-auto mt-5" src="../assets/homepageIcons/seaturtle.png" alt="sea turtle"/></a>
					
						<div className="card-body text-center">
						<h5 className="card-title text-white">WAYS TO HELP ANIMALS WITH CLIMATE CHANGE</h5>
						<p className="card-text text-white">Some Easy ways you can help the animals from climate change.</p>
						</div>
					  </Fade>
					</div>

					<div className="card orangeHcard text-center">
					<Fade bottom>
					<a href="./explore"><img className="card-img-top icon-Hsize mx-auto mt-5" src="../assets/imgs/toxic.png" alt="skull"/></a>
						<div className="card-body">
						<h5 className="card-title text-white">Pollution Information</h5>
						<p className="card-text text-white">You can check out our Pollution information page. Here we provide great information to find out what pollution or contaminat in your area. You can search for everything from air quality, water contaminats, companies compliance with the EPA and more! Just click on the icon above. </p>
						</div>
						</Fade>
					</div>
					<div className="card greenHcard text-center">
					<Fade bottom>
					<a href="https://www.adventure-life.com/amazon/articles/what-can-i-do-to-help-the-amazon-rainforest"><img className="card-img-top icon-Hsize mx-auto mt-5" src="../assets/homepageIcons/amazon.png" alt="south america amazon on fire"/></a>
						<div className="card-body">
						<h5 className="card-title text-white">HELP THE AMAZON</h5>
						<p className="card-text text-white">Take action now to prevent lossing the Amazon Rainforest.</p>
						</div>
						</Fade>
					</div>
					<div className="card orangeHcard text-center"style={{paddingBottom: "4rem"}}>
					<Fade bottom>
					<a href="https://www.theglobaleducationproject.org/climate-change/"><img className="card-img-top icon-Hsize mx-auto mt-5" src="../assets/homepageIcons/extinct.png" alt="south america amazon on fire"/></a>
						<div className="card-body">
						<h5 className="card-title text-white">ANIMALS AT RISK FOR EXTINCTION</h5>
						<p className="card-text text-white">Scientists say there are a million animals facing extinction, here are just a few you may know about to go extinct.</p>
						</div>
						</Fade>
					</div>

					</div>

				</div>

			</div>
		);
	}
}

export default index;
