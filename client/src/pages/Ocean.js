import React, { Component } from 'react';
import OceanParallax from '../components/OceanParallax';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Robot from '../components/EnviraBot';
import API from '../util/API';

export class Ocean extends Component {
	async componentDidMount() {
		await API.speakPolly(
			'Welcome to the ocean. Here I will teach you about the ocean pollution. Please watch this short demonstration video.'
		)
			.then((response) => {
				setTimeout(() => {
					this.autoplayVideo();
				}, 8000);
			})
			.catch((err) => console.log(err));
		// setTimeout(() => {
		// 				 this.autoplayVideo()
		// 	 		}, 6000);
	}

	autoplayVideo() {
		// let youtubeUrl = document.getElementsByTagName("iframe")[0].src
		// youtubeUrl = youtubeUrl.substring(0, youtubeUrl - 1);
		// youtubeUrl +='1';
		// console.log(youtubeUrl);
		// document.getElementsByTagName("iframe")[0].src=youtubeUrl
		let youtubeUrl = document.getElementsByTagName('iframe')[0].src;
		youtubeUrl = youtubeUrl.substring(0, youtubeUrl.length - 1) + '1';
		document.getElementsByTagName('iframe')[0].src = youtubeUrl;
	}

	render() {
		//jumbotron insline stype attributes
		const jumbotronStyle = {
			height: '50rem',
			padding: 'unset',
			position: 'relative',
			overflow: 'hidden'
		};

		return (
			<div>
				<Jumbotron fluid className="embed-responsive-16by9 mb-0" style={jumbotronStyle}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/6zrn4-FfbXw?autoplay=0"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</Jumbotron>
				<OceanParallax />
				<Robot />
			</div>
		);
	}
}

export default Ocean;
