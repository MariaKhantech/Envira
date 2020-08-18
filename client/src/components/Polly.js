import React, { Component } from 'react';
import API from '../util/API';

class Polly extends Component {
    //declare 2 states searchTerm(text types in input box) and results (array of employees)
    
    constructor(props) {
        super(props);
        this.state = {
            speech: 'This is text going to polly, Hello'
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      async handleClick(event) {
        await API.speakPolly(event.target.innerHTML)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => console.log(err));
      }
	

	//when the component first loads search for employees using the API
	async componentDidMount() {
		
    }
    


	//class function to render the container and the components(search input, bootstrap table) within the containter
	render() {
		return <p onClick={this.handleClick}> this a dummy compnent that send text to polly</p>;
	}
}

export default Polly;
