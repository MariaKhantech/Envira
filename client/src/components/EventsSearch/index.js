import React, { Component } from "react";
import Axios from "axios";
import Search from "./Search/index";
import Carousel from "./Carousel/index";
import Data from "./Data.json";

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
    information: Data,
    apiData: [],
    eventTitle: "save planet",
    date: "09/05/20",
    location: "portland",
    contactPerson: "jane doe",
    contactNumber: "18005678",
    description: "come help us clean planet",

    showModal: false,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleFilterOption = (event) => {
    this.setState({ filter: event.target.innerHTML, disabled: false });
  };

  handleFilterSubmit = (event) => {
    event.preventDefault();

    if (this.state.filter === "Location") {
      const filteredLocation = Data.filter(
        (detail) => detail.location === this.state.searchInput
      );
      this.setState({ information: filteredLocation });
      this.setState({ showCarousel: true });
      this.setState({ slidesToShow: filteredLocation.length });
      this.setState({ slidesToScroll: filteredLocation.length });
      this.setState({ searchInput: "" });
    }
    if (this.state.filter === "Organizer") {
      const filteredOrg = Data.filter(
        (detail) => detail.organizer === this.state.searchInput
      );
      this.setState({ information: filteredOrg });
      this.setState({ showCarousel: true });
      this.setState({ slidesToShow: filteredOrg.length });
      this.setState({ slidesToScroll: filteredOrg.length });
      this.setState({ searchInput: "" });
    }
  };

  handleShowAll = (event) => {
    event.preventDefault();
    this.setState({ showCarousel: true });
    this.setState({ information: Data });
    this.setState({ slidesToShow: 3 });
    this.setState({ slidesToScroll: 3 });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  postNewEvent = () => {
    Axios.post("/api/create/events", {
      eventTitle: this.state.eventTitle,
      date: this.state.date,
      location: this.state.location,
      contactPerson: this.state.contactPerson,
      contactNumber: this.state.contactNumber,
      description: this.state.description,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
          handleShowModal={this.handleShowModal}
          handleHideModal={this.handleHideModal}
          postNewEvent={this.postNewEvent}
          state={this.state}
        />
        {renderCarousel}
      </>
    );
  }
}
