import React, { Component } from 'react';
import { overviewTab, startRating } from '../profileTabs'
import './style.scss';
import Axios from 'axios';
import { Auth } from 'aws-amplify';
import { Storage } from "aws-amplify";


export default class CompanyProfile extends Component {

  state = {
    profile: [],
    companyName: "",
    contactPersonName: "",
    companyDescription: "",
    environmentalFocus: "",
    companyWebsite: "",
    companyPhoneNumber: "",
    companyEmail: "",
    imagePreviewUrl: '',
    imageName: [],
  }

  async componentDidMount() {
    try {
      // get the current logged in user details
      const user = await Auth.currentAuthenticatedUser();
      // get username from user object
      const userDetail = user.username;
      console.log(userDetail)
      // get the user details for logged in user from the User table 
      Axios.get(`/api/auth/user/${userDetail}`)
        .then(
          (response) => {
            this.setState({
              profile: response.data,
            });
            this.getCompanyProfile()
            // call this function to get logged in company event details
            this.getUserTotalEvent()
            this.getImage()
          })
        .catch(err => console.log(err))
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
  }

  getCompanyProfile = () => {
    const UserId = this.state.profile.id
    console.log(this.state.companyName)
    Axios.get(`/api/auth/companyProfile/${UserId}`)
      .then(
        (response) => {
          console.log(response.data)
          this.setState({
            companyName: response.data.company_name,
            contactPersonName: response.data.contact_person,
            companyDescription: response.data.company_description,
            environmentalFocus: response.data.environmental_focus,
            companyWebsite: response.data.website,
            companyPhoneNumber: response.data.phone_number,
            companyEmail: response.data.email,
          });
        })
      .catch(err => console.log(err))
  }

  // get logged in company info from EventAttendee model
  getUserTotalEvent = () => {
    const UserId = this.state.profile.id
    Axios.get(`/api/auth/userTotalEvent/${UserId}`)
      .then(
        (response) => {
          console.log(response)
          this.setState({
            totalEvent: response.data
          });
        })
      .catch(err => console.log(err))
  }

  getImage = () => {
    const UserId = this.state.profile.id
    console.log(UserId)
    Axios.get(`/api/auth/image/${UserId}`)
      .then(
        (response) => {
          this.setState({
            imageName: response.data

          });
          console.log(this.state.imageName)
          this.getImageFromS3()
        })
      .catch(err => console.log(err))

  }

  getImageFromS3 = () => {
    let fileName = this.state.imageName.image_name
    console.log(fileName)
    Storage.get(fileName)
      .then(
        (data) => {
          console.log(data)
          this.setState({
            imagePreviewUrl: data
          });
        })
      .catch(err => console.log(err))
  }


  render() {
    const myStyle = {
      width: "304px",
      height: "200px",
    }
    return (<div className=" main-content">
      {/* <!--reference https://www.creative-tim.com/bits/bootstrap/user-profile-page-argon-dashboard--> */}
      {/* <!-- Header --> */}
      <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" id="background-cover">
        {/* <!-- Mask --> */}
        <span className="mask bg-gradient-default opacity-8"></span>
        {/* <!-- Header container --> */}
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-black">{this.state.companyName}</h1>
              <p className="text-black mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page content --> */}
      <div className=" mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 col-12 ">
            <div className="card card-profile shadow ">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <img style={myStyle} src={this.state.imagePreviewUrl} alt={this.state.imageName.image_name} className="rounded-circle" />
                    </a>

                  </div>
                </div>
              </div>



              <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-sm btn-info mr-4">Events</a>
                  <a href="#" className="btn btn-sm btn-default float-right">Message</a>
                </div>
              </div>

              <div className="card-body shadow p-3 pt-0 pt-md-4 mt-5">

                <ul className="nav nav-tabs " role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Overview</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Rating</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Event Photos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Comments</a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    {overviewTab}
                  </div>
                  <div className="tab-pane " id="tabs-2" role="tabpanel">
                    {startRating}
                  </div>
                  <div className="tab-pane " id="tabs-3" role="tabpanel">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <p>images</p>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>



                {/* <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">10/10</span>
                        <span className="description">AVERAGE EVENT RATINGS</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Event Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Event Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    Greta Thunburg<span className="font-weight-light">, 17</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2"></i>Stockholm, Sweden
                </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2"></i>Environmentalist- Activist
                </div>
                  <div>
                    <i className="ni education_hat mr-2"></i>University of Environmentalist
                </div>
                  <hr />
                  <div>
                    <h5 className="ni business_briefcase-24 mr-2">How to connect:</h5>
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                    <i className="fa fa-meetup fa-2x" aria-hidden="true"></i>
                  </div>
                </div> */}
              </div>


            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">{this.props.profileType} Profile</h3>
                  </div>

                  <div className="col-4 text-right">
                    <a href="editcompanyprofile" className="btn btn-sm btn-primary">Edit Profile</a>
                  </div>
                </div>
              </div>
              {/* <!--reference https://bootsnipp.com/snippets/K0ZmK--> */}
              <div className="card-body shadow-lg p-3">
                <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row">
                        <div className="col-md-6">
                          <label>Company Name:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.state.companyName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.state.companyEmail}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Phone:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.state.companyPhoneNumber}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Website:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.state.companyWebsite}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Contact Person:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.state.contactPersonName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Current Event:</label>
                        </div>
                        <div className="col-md-6">
                          <p>N/A</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Joined Events:</label>
                        </div>
                        <div className="col-md-6">
                          <p>50</p>
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />
                    {/* <!-- Description --> */}
                    <form>
                      {/* <h6 className="heading-small text-muted mb-4"></h6> */}
                      <div className="pl-lg-4">
                        <div className="form-group focused">
                          <label>Environmental Focus</label>
                          <textarea rows="4" className="form-control form-control-alternative" value={this.state.environmentalFocus} readOnly>
                          </textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6 m-auto text-center">

          </div>
        </div>

      </footer>
    </div>
    );
  }
}

