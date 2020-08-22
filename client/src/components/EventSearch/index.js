import React, { Component } from "react";
import Search from "./Search/index";
import Carousel from "./Carousel/index";

export default class index extends Component {
  render() {
    return (
      <>
        <Search />

        <Carousel />
      </>
    );
  }
}
