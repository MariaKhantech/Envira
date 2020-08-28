import React, { Component } from "react";
import Axios from "axios";
import Search from "./Search/index";
import Carousel from "./Carousel/index";
// import Data from "./Data.json";

// SEE ALL EVENTS
// on page load user will be presented a search bar <Search /> and when a user selects the dropdown appended to the bar and selects the see all events button the following will happen...

// A <Carousel /> component will be rendered below the search bar
// Inside the carousel will be <CardDecks/> which will contain three <Cards /> on each slide.
//  Each <Card /> will display Event data from our event Model (event Org, location, host, contact info, etc)
// Each <Card /> will also have a "Attend" Button that will register (Post) that the user intends on attending the event.
// Each <Card /> will also have a "i" button for more information the event (retrieved from the description column from the events Model ) and when selected a modal showing the description will appear

//

export default class EventsSearch extends Component {
  state = {
    filter: "Filter",
    disabled: true,
    searchInput: "",
    showCarousel: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    eventData: [],
  };

  componentDidMount() {
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        console.log(response);
        this.setState({
          eventData: response.data,
        });
      },
      (error) => {
        this.setState({
          error,
        });
      }
    );
  }

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleFilterOption = (event) => {
    this.setState({ filter: event.target.innerHTML, disabled: false });
  };

  handleFilterSubmit = (event) => {
    event.preventDefault();

    if (this.state.filter === "Location") {
      this.componentDidMount();
      const filteredLocation = this.state.eventData.filter(
        (detail) => detail.address === this.state.searchInput
      );
      this.setState({ eventData: filteredLocation });
      console.log(this.state.eventData);
      this.setState({ showCarousel: true });
      this.setState({ slidesToShow: filteredLocation.length });
      this.setState({ slidesToScroll: filteredLocation.length });
      this.setState({ searchInput: "" });
    }
    if (this.state.filter === "Event Name") {
      this.componentDidMount();
      const filteredEv = this.state.eventData.filter(
        (detail) => detail.event_name === this.state.searchInput
      );
      this.setState({ eventData: filteredEv });
      console.log(this.state.eventData);
      this.setState({ showCarousel: true });
      this.setState({ slidesToShow: filteredEv.length });
      this.setState({ slidesToScroll: filteredEv.length });
      this.setState({ searchInput: "" });
    }
  };

  handleShowAll = (event) => {
    event.preventDefault();
    this.componentDidMount();
    this.setState({ showCarousel: true });
    // this.setState({ information: Data });
    this.setState({ slidesToShow: 3 });
    this.setState({ slidesToScroll: 3 });
  };

  render() {
    let renderCarousel = null;
    if (this.state.showCarousel === true) {
      renderCarousel = <Carousel state={this.state} />;
    } else if (this.state.showCarousel === "") {
      renderCarousel = null;
    }

    return (
      <>
        <Search
          onChange={this.onChange}
          handleFilterOption={this.handleFilterOption}
          handleFilterSubmit={this.handleFilterSubmit}
          handleShowAll={this.handleShowAll}
          postNewEvent={this.postNewEvent}
          state={this.state}
        />
        {renderCarousel}
      </>
    );
  }
}
