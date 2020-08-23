import React, { Component } from "react";
import Search from "./Search/index";
import Carousel from "./Carousel/index";

// SEE ALL EVENTS
// on page load user will be presented a search bar <Search /> and when a user selects the dropdown appended to the bar and selects the see all events button the following will happen...

// A <Carousel /> component will be rendered below the search bar
// Inside the carousel will be <CardDecks/> which will contain three <Cards /> on each slide.
//  Each <Card /> will display Event data from our event Model (event title, location, host, contact info, etc)
// Each <Card /> will also have a "Attend" Button that will register (Post) that the user intends on attending the event.
// Each <Card /> will also have a "i" button for more information the event (retrieved from the description column from the events Model ) and when selected a modal showing the description will appear

//

export default class EventSearch extends Component {
  state = {
    filter: "Filter",
    disabled: true,
    searchInput: "",
    showCarousel: false,
    company: "",
    eventTitle: "",
    email: "",
    website: "",
    date: "",
    location: "",
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleFilterOption = (event) => {
    this.setState({ filter: event.target.innerHTML, disabled: false });
  };

  handleShowAll = (event) => {
    event.preventDefault();
    this.setState({ showCarousel: !this.state.showCarousel });
  };

  render() {
    let renderCarousel = null;
    if (this.state.showCarousel) {
      renderCarousel = <Carousel state={this.state} />;
    }

    return (
      <>
        <Search
          onChange={this.onChange}
          handleFilterOption={this.handleFilterOption}
          handleShowAll={this.handleShowAll}
          state={this.state}
        />
        {renderCarousel}
      </>
    );
  }
}
