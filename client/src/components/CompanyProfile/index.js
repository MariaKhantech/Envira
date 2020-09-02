import React, { Component } from 'react';
import { overviewTab, startRating } from '../profileTabs'
import './style.scss';
import Axios from 'axios';
import { Auth } from 'aws-amplify';

export class CompanyProfile extends Component {

  state = {
    profile: [],
    companyName: "",
    contactPersonName: "",
    companyDescription: "",
    environmentalFocus: "",
    companyWebsite: "",
    companyPhoneNumber: "",
    companyEmail: "",
    data: ""
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
            data: response.data
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


  render() {

    return (<div class=" main-content">
      {/* <!--reference https://www.creative-tim.com/bits/bootstrap/user-profile-page-argon-dashboard--> */}
      {/* <!-- Header --> */}
      <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" id="background-cover">
        {/* <!-- Mask --> */}
        <span class="mask bg-gradient-default opacity-8"></span>
        {/* <!-- Header container --> */}
        <div class="container-fluid d-flex align-items-center">
          <div class="row">
            <div class="col-lg-7 col-md-10">
              <h1 class="display-2 text-black">Greta Thunburg</h1>
              <p class="text-black mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page content --> */}
      <div class=" mt--7">
        <div class="row">
          <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0 col-12 ">
            <div class="card card-profile shadow ">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <a href="#">
                      <img src="https://i.guim.co.uk/img/media/d2d6b9cc8326a99daee0f47ad3b94cca738e4ecd/0_229_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5078627d8ad593949b1bb03d7653d615" class="rounded-circle" />
                    </a>
                  </div>
                </div>
              </div>



              <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-sm btn-info mr-4">Events</a>
                  <a href="#" class="btn btn-sm btn-default float-right">Message</a>
                </div>
              </div>

              <div class="card-body shadow p-3 pt-0 pt-md-4 mt-5">

                <ul class="nav nav-tabs " role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Overview</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Rating</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Event Photos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Comments</a>
                  </li>
                </ul>

                <div class="tab-content">
                  <div class="tab-pane active" id="tabs-1" role="tabpanel">
                    {overviewTab}
                  </div>
                  <div class="tab-pane " id="tabs-2" role="tabpanel">
                    {startRating}
                  </div>
                  <div class="tab-pane " id="tabs-3" role="tabpanel">
                    <div class="row">
                      <div class="col">
                        <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                          <p>images</p>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>



                {/* <div class="row">
                  <div class="col">
                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span class="heading">10/10</span>
                        <span class="description">AVERAGE EVENT RATINGS</span>
                      </div>
                      <div>
                        <span class="heading">10</span>
                        <span class="description">Event Photos</span>
                      </div>
                      <div>
                        <span class="heading">89</span>
                        <span class="description">Event Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <h3>
                    Greta Thunburg<span class="font-weight-light">, 17</span>
                  </h3>
                  <div class="h5 font-weight-300">
                    <i class="ni location_pin mr-2"></i>Stockholm, Sweden
                </div>
                  <div class="h5 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>Environmentalist- Activist
                </div>
                  <div>
                    <i class="ni education_hat mr-2"></i>University of Environmentalist
                </div>
                  <hr />
                  <div>
                    <h5 class="ni business_briefcase-24 mr-2">How to connect:</h5>
                    <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                    <i class="fa fa-meetup fa-2x" aria-hidden="true"></i>
                  </div>
                </div> */}
              </div>


            </div>
          </div>
          <div class="col-xl-8 order-xl-1">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">{this.props.profileType} Profile</h3>
                  </div>

                  <div class="col-4 text-right">
                    <a href="editprofile" class="btn btn-sm btn-primary">Edit Profile</a>
                  </div>
                </div>
              </div>
              {/* <!--reference https://bootsnipp.com/snippets/K0ZmK--> */}
              <div class="card-body shadow-lg p-3">
                <div class="col-md-8">
                  <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-md-6">
                          <label>Username:</label>
                        </div>
                        <div class="col-md-6">
                          <p>GretchenHealsTheEarth</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Name:</label>
                        </div>
                        <div class="col-md-6">
                          <p>Gretchen Thunburg</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Email:</label>
                        </div>
                        <div class="col-md-6">
                          <p>kidActivist@gogreen.com</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Phone:</label>
                        </div>
                        <div class="col-md-6">
                          <p>603-555-2999</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Location:</label>
                        </div>
                        <div class="col-md-6">
                          <p>Stockholm, Sweden, 03102</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Current Event:</label>
                        </div>
                        <div class="col-md-6">
                          <p>N/A</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Joined Events:</label>
                        </div>
                        <div class="col-md-6">
                          <p>50</p>
                        </div>
                      </div>
                    </div>

                    <hr class="my-4" />
                    {/* <!-- Description --> */}
                    <form>
                      <h6 class="heading-small text-muted mb-4">About me</h6>
                      <div class="pl-lg-4">
                        <div class="form-group focused">
                          <label>About Me</label>
                          <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ..."> "We cannot solve a crisis without treating it as a crisis. And if solutions within the system are so impossible to find, then maybe we should change the system itself."
                          -Greta Thunberg
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

      <footer class="footer">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6 m-auto text-center">

          </div>
        </div>

      </footer>
    </div>
    );
  }
}

export default CompanyProfile;
