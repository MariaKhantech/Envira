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
    information: [
      {
        id: 1,
        company: "Walmart",
        eventTitle: "Clean Up",
        image: "http://placehold.it/250x200",
        email: "email1@gmail.com",
        website: "www.walmart.com",
        date: "September 1st, 2020",
        location: "Portsmouth",
      },
      {
        id: 2,
        company: "Lowes",
        eventTitle: "Clean Park",
        image: "http://placehold.it/250x200",
        email: "email2@gmail.com",
        website: "www.lowes.com",
        date: "September 2st, 2020",
        location: "Portland",
      },
      {
        id: 3,
        company: "Home Depot",
        eventTitle: "Clean Road",
        image: "http://placehold.it/250x200",
        email: "email3@gmail.com",
        website: "www.homedepot.com",
        date: "September 3rd, 2020",
        location: "Bangor",
      },
      {
        id: 4,
        company: "Apple",
        eventTitle: "Help out",
        image: "http://placehold.it/250x200",
        email: "email1@apple.com",
        website: "www.apple.com",
        date: "September 5th, 2020",
        location: "Boston",
      },
      {
        id: 5,
        company: "Tesla",
        eventTitle: "Go to Mars",
        image: "http://placehold.it/250x200",
        email: "email2@tesla.com",
        website: "www.tesla.com",
        date: "September 2nd, 2020",
        location: "Dallas",
      },
      {
        id: 6,
        company: "Google",
        eventTitle: "Clean Road",
        image: "http://placehold.it/250x200",
        email: "email3@gmail.com",
        website: "www.homedepot.com",
        date: "September 3st, 2020",
        location: "Bangor",
      },
      {
        id: 7,
        company: "Bill Gates",
        eventTitle: "Save World",
        image: "http://placehold.it/250x200",
        email: "email1@microsoft.com",
        website: "www.microsoft.com",
        date: "September 3st, 2020",
        location: "Seattle",
      },
      {
        id: 8,
        company: "Lowes",
        eventTitle: "Clean Park",
        image: "http://placehold.it/250x200",
        email: "email2@gmail.com",
        website: "www.lowes.com",
        date: "September 2st, 2020",
        location: "Portland",
      },
      {
        id: 9,
        company: "Home Depot",
        eventTitle: "Clean Road",
        image: "http://placehold.it/250x200",
        email: "email3@gmail.com",
        website: "www.homedepot.com",
        date: "September 3st, 2020",
        location: "Bangor",
      },
    ],
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
    } else if (!this.state.showCarousel) {
      renderCarousel = null;
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
