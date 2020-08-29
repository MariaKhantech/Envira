import React, { Component } from 'react';
import './style.scss';
import Axios from 'axios';
import { Auth } from 'aws-amplify';

export class UserProfile extends Component {

  state = {
    profile: [],
    first_name: "",
    lastName: "",
    city: "",
    state: "",
    phoneNumber: "",
    address: "",
    about: "",
    zipCode: "",
  }


  async componentDidMount() {
    try {
      // get the current logged in user details
      const user = await Auth.currentAuthenticatedUser();
      // get username from user object
      const userDetail = user.username;
      // get the user details for logged in user from the User table 
      Axios.get(`/api/auth/user/${userDetail}`)
        .then(
          (response) => {
            this.setState({
              profile: response.data,
            });
            this.getUserProfile()
          })

        .catch(err => console.log(err))
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }

  }

  getUserProfile = () => {
    const UserId = this.state.profile.id
    Axios.get(`/api/auth/userProfile/${UserId}`)
      .then(
        (response) => {
          console.log(response)
          this.setState({
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            phoneNumber: response.data.phone_number,
            city: response.data.city,
            state: response.data.state,
            about: response.data.about,
            zipCode: response.data.zip_code,
            address: response.data.address,
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
              <h1 class="display-2 text-black">{this.state.profile.user_name}</h1>
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
              <div class="card-body shadow p-3 pt-0 pt-md-4">
                <div class="row">
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
                  <hr class="my-4" />
                  <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                  <a href="#">Show more</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 order-xl-1">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">Profile</h3>
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
                          <p>{this.state.profile.user_name}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Name:</label>
                        </div>
                        <div class="col-md-6">
                          <p>{this.state.firstName} {this.state.lastName}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Email:</label>
                        </div>
                        <div class="col-md-6">
                          <p>{this.state.profile.email}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Phone:</label>
                        </div>
                        <div class="col-md-6">
                          <p>{this.state.phoneNumber}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label>Location:</label>
                        </div>
                        <div class="col-md-6">
                          <p>{this.state.address} {this.state.state} {this.state.city} {this.state.zipCode}</p>
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
                      {/* <h6 class="heading-small text-muted mb-4">About me</h6> */}
                      <div class="pl-lg-4">
                        <div class="form-group focused">
                          <label>About Me</label>
                          <textarea rows="4" class="form-control form-control-alternative" value={this.state.about}>
                          </textarea >
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

export default UserProfile;
