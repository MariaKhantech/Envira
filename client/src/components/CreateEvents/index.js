import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Storage } from "aws-amplify";
import Axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
// import 'react-date-range/dist/theme/default.css';
// import 'react-date-range/dist/styles.css';
// import { DateRange } from 'react-date-range';
import "./style.scss";

export class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      date: "",
      description: "",
      contactName: "",
      contactEmail: "",
      contactNumber: "",
      website: "",
      address: "",
      city: "",
      state: "",
      selectedFile: "",
      selectedFileName: "Choose file",
      imagePreviewUrl: "",
      displayUploadButton: false,
      userData: [],
    };
  }
  //test for S3//
  saveFile = async () => {
    // const { file } = this.state;
    await Storage.put("test3.txt", "hello");
    console.log("successfully saved file...");
  };

  uploadFile = (event) => {
    console.log(event.target);

    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        selectedFile: file,
        selectedFileName: file.name,
        imagePreviewUrl: reader.result,
        displayUploadButton: true,
      });
    };
    reader.readAsDataURL(file);
  };

  uploadEventImagetoS3 = async (event) => {
    event.preventDefault();
    event.target.textContent = "Successfully uploaded";
    event.target.disabled = true;
    await Storage.put(this.state.selectedFileName, this.state.selectedFile);
    console.log("successfully saved file...");
  };

  // Request to get user info and set state of userData (for userId)
  async componentDidMount() {
    try {
      // get the current logged in user details
      const user = await Auth.currentAuthenticatedUser();
      // get username from user object
      const userDetail = user.username;
      // get the user details for logged in user from the User table
      Axios.get(`/api/auth/user/${userDetail}`)
        .then((response) => {
          this.setState({
            userData: response.data,
          });
          console.log(this.state.userData);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
  }

  postNewEvent = (event) => {
    event.preventDefault();
    Axios.post("/api/create/eventcreate", {
      eventName: this.state.eventName,
      date: this.state.date,
      description: this.state.description,
      contactPerson: this.state.contactName,
      contactEmail: this.state.contactEmail,
      contactNumber: this.state.contactNumber,
      website: this.state.website,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      id: this.state.userData.id,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    var styles = {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1562591970-254bc62245c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    };
    return (
      <div>
        <div className="container mt-0">
          <form className="form-style text-center" style={{ marginTop: "5em" }}>
            <div className="card person-card ">
              <Jumbotron style={styles}>
                <h1 className="text-white">Create an event</h1>
                <br />
                <p className="text-white">save the planet.</p>

                {/*link these!*/}
              </Jumbotron>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="form-group col-md-5">
                    <label htmlFor="eventname" className="col-form-label">
                      Event Name:
                    </label>
                    <input
                      type="text"
                      id="eventname"
                      name="eventName"
                      className="form-control"
                      placeholder="Example Beach Cleanup "
                      value={this.state.eventName}
                      onChange={this.handleChange}
                      required
                    />

                    <label htmlFor="date" className="col-form-label mt-3">
                      Date:
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="form-control"
                      placeholder="September, 15, 2020"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="date" className="col-form-label mt-3">
                      Website:
                    </label>
                    <input
                      type="text"
                      id="website"
                      className="form-control"
                      placeholder="example: www.companywebsite.com"
                      name="website"
                      value={this.state.website}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <label htmlFor="description" className="col-form-label">
                      Event Description:
                    </label>
                    <textarea
                      className="form-control"
                      type="text"
                      id="description"
                      rows="5"
                      style={{ resize: "none" }}
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div />
                </div>
                <hr />
                <div className="row justify-content-center">
                  <div className="col-6">
                    <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                      <input
                        id="upload"
                        type="file"
                        onChange={this.uploadFile}
                        className="form-control border-0"
                      />
                      <label
                        id="upload-label"
                        htmlFor="upload"
                        className="font-weight-light text-muted"
                      >
                        {this.state.selectedFileName}
                      </label>
                      <div className="input-group-append">
                        <label
                          htmlFor="upload"
                          className="btn btn-secondary m-0 rounded-pill px-4"
                        >
                          {" "}
                          <i className="fa fa-cloud-upload mr-2 text-white" />
                          <small className="text-uppercase font-weight-bold text-white">
                            Choose file
                          </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <p className="font-italic text-center">
                    The image uploaded image will appear below.
                  </p>
                  <div className="image-area mt-4">
                    <img
                      id="imageResult"
                      src={this.state.imagePreviewUrl}
                      alt=""
                      className="img-fluid rounded shadow-sm mx-auto d-block"
                    />
                  </div>
                </div>
                <div
                  className="row justify-content-center mt-2 "
                  style={{
                    display: this.state.displayUploadButton ? "block" : "none",
                  }}
                >
                  <button onClick={this.uploadEventImagetoS3}>Upload</button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6" style={{ padding: "0.5em" }}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">How to contact you?</h2>
                    <div className="form-group">
                      <label htmlFor="contactname" className="col-form-label">
                        Contact Person:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Joe Bloggs"
                        name="contactName"
                        value={this.state.contactName}
                        onChange={this.handleChange}
                        required
                      />

                      <label htmlFor="email" className="col-form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="contactEmail"
                        value={this.state.contactEmail}
                        onChange={this.handleChange}
                        id="email"
                        placeholder="example@gmail.com"
                        required
                      />
                      <div className="email-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tel" className="col-form-label">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="contactNumber"
                        value={this.state.contactNumber}
                        onChange={this.handleChange}
                        id="tel"
                        placeholder="999-999-9999"
                        required
                      />
                      <div className="phone-feedback" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 " style={{ padding: "0.5em" }}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Location:</h2>
                    <div className="form-group">
                      <label htmlFor="address:" className="col-form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                        placeholder="249 beckon ave."
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city" className="col-form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChange}
                        id="city"
                        placeholder="Portsmouth"
                        required
                      />

                      <label htmlFor="state" className="col-form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={this.state.state}
                        onChange={this.handleChange}
                        id="state"
                        placeholder="NH"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 text-center">
                <button
                  type="button"
                  onClick={this.postNewEvent}
                  className="btn btn-success mb-5 mt-3"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEvents;
