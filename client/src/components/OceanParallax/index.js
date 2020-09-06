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
			<div className="card text-center ">
				<div className="card-header" style={{ background: '#001a33' }}>
					<OceanPollutionText />
				</div>
				<div className="card-body ">
					<h5 className="card-title">Special title treatment</h5>
					<div class="card">
						<div class="card-body">This is some text within a card body.</div>
					</div>
					<div className="card" id="card-image">
						<div className="card-body">
							<img
								className="card-img border rounded float-left"
								src="/assets/imgs/svg/scientist.svg"
								alt="Card image cap"
							/>
						</div>
					</div>

					<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
					<div className="card text-center ocean-para oceanParticles">
						<img className="ocean-floor-img" src="../assets/imgs/oceanfloor.png" />
						<img className="diver" src="../assets/imgs/diver.png" />

						<div className="oceanParticles">{particles}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OceanParallax;
