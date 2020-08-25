import React, { Component } from 'react'
import OceanParallax from "../components/OceanParallax"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Robot from '../components/Robot';
import API from '../util/API';


export class Ocean extends Component {

	
	async componentDidMount() {
		await API.speakPolly("Welcome to the ocean. Here, i will teach you about the ocean pollution. Please watch this short demonstration video.")
			.then((response) => {
				// setTimeout(() => {
				// 	this.autoplayVideo()
				// }, 6000);
			})
			.catch((err) => console.log(err));
	}

	// autoplayVideo () {
	// 	let youtubeUrl = document.getElementsByTagName("iframe")[0].src
	// 	youtubeUrl = youtubeUrl.substring(0, youtubeUrl - 1);
	// 	youtubeUrl +='1';
	// 	console.log(youtubeUrl);
	// 	document.getElementsByTagName("iframe")[0].src=youtubeUrl
	// }

	render() {

		let jumbotronStyle = {
			height:'50rem',
			padding: 'unset'

		}
		// setTimeout(() => {
		// 	this.autoplayVideo()
		// }, 6000)


			//	console.log(iFrameElement);
		return (
			<div>
				<Jumbotron fluid className=" mb-0" style={jumbotronStyle}  >
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6zrn4-FfbXw?autoplay=0"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</Jumbotron>
				<OceanParallax />
				<Robot/>
			</div>
		)
	}
}

export default Ocean;
