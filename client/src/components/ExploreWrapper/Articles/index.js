import React, { Component } from "react";

import Axios from "axios";

import "./style.css";

export default class Articles extends Component {
  state = {
    nytData: [],
  };

  componentDidMount() {
    Axios.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q='climate change'&api-key=19vvAaE2PFZaDIcKKKJMoVc6K9QurvYU"
    ).then((response) => this.setState({ nytData: response.data }));
  }
  render() {
    console.log(this.state.nytData);
    return <div>Articles</div>;
  }
}
