import React, { Component } from 'react';
import OceanParallax from '../components/OceanParallax';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Robot from '../components/EnviraBot';
import API from '../util/API';

export class Ocean extends Component {
	async componentDidMount() {
		
		// Welcome to the ocean. Here I will teach you about the ocean pollution. Please watch this short demonstration video.
		//play audio for welcome to the ocean
		//let welcomeAudio = new Audio(
		// 	'https://envirabucket215241-dev.s3.amazonaws.com/polly/welcome-message.69983da5-1526-4a5c-892a-dc34bb8270a0.mp3'
		// );
		// welcomeAudio.play();
		setTimeout(() => {
			this.autoplayVideo();
		}, 8000);
	}

	autoplayVideo() {

		let youtubeUrl = document.getElementsByTagName('iframe')[0].src;
		let newYoutubeUrl = youtubeUrl.replace('autoplay=0','autoplay=1' ); 
		document.getElementsByTagName('iframe')[0].src = newYoutubeUrl;
	}

	render() {
		//jumbotron insline stype attributes
		const jumbotronStyle = {
			height: '50rem',
			padding: 'unset',
			position: 'relative',
			overflow: 'hidden'
		};

		const videoStyle = {
			position: 'relative',
			inset: '0px',
			width: '100%',
			height: '1080px',
			maxWidth: 'none',
			maxHeight: 'none',
			margin: '-131.5px 0px 0px'
		};

		return (
			<div>
				<Jumbotron fluid className=" mb-0" style={jumbotronStyle}>
					<iframe
						width="100%"
						height="auto"
						src="https://www.youtube.com/embed/6zrn4-FfbXw?autohide=1&amp;rel=0&amp;autoplay=0&amp;playsinline=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;disablekb=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen="1"
						style={videoStyle}
					/>
				</Jumbotron>
				<OceanParallax />
				<Robot />
			</div>
		);
	}
}

export default Ocean;
