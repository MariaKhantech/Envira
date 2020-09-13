import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import "./style.css";
import Login from "../Login";
import { Auth } from "aws-amplify";
import Axios from "axios";
// import { RuleTester } from "eslint";

const orangeColor = {
  backgroundColor: "#DAAD86",
};

export class NavBar extends Component {
  state = {
    profile: [],
    data: ""
  };
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
            profile: response.data,
          });
          this.getUserProfile();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      if (error !== "No current user") {
        console.log(error);
      }
    }
  }

  handleLogOut = async (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  // call this function to get the existing user profile details
  getUserProfile = () => {
    const UserId = this.state.profile.id;
    Axios.get(`/api/auth/userProfile/${UserId}`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
        console.log(response)
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Menu>
        <hr style={{ background: "white" }} />
        <a className="menu-item text-center text-white" href="/">
          Home
        </a>
        {this.props.auth.isAuthenticated && this.props.auth.user && (
          <h5 style={{ textAlign: "center", color: "white" }}>
            Welcome {this.props.auth.user.username}
          </h5>
        )}
        <hr className="bg-light" style={{ background: "white" }} />



        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="collapse"
            data-target="#submenu2"
          >
            Climate Change
          </a>
          <div
            className="collapse"
            style={orangeColor}
            id="submenu2"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item text-white" href="/ocean">
              Ocean
            </a>
            <a className="dropdown-item text-white" href="/rainforest">
              Rainforest
            </a>
          </div>
        </li>
        <a className="menu-item text-white about" href="/eventsearch">
          Environmental Events
        </a>

        <a className="menu-item text-white about" href="/explore">
          Pollution Information
        </a>

        {/* check the logged in user roleId

	if roleId is 1 then redirect user to userProfile page
	 if roleId is 2 then redirect user to Profile page
	if roleId is 3 then redirect user to Profile page */}
        {this.props.auth.isAuthenticated && this.state.profile.roleId === 1 && !this.state.data && (
          <Link
            className="menu-item text-white about"
            to={{
              pathname: "/edituserprofile",
              search: `?userId=${this.state.profile.id}`,
            }}
          >
            My Account
          </Link>
        )}
        {this.props.auth.isAuthenticated && this.state.profile.roleId === 1 && this.state.data && (
          <Link
            className="menu-item text-white about"
            to={{
              pathname: "/userprofile",
              search: `?userId=${this.state.profile.id}`,
            }}
          >
            My Account
          </Link>
        )}
        {this.props.auth.isAuthenticated && this.state.profile.roleId === 2 && !this.state.data && (
          <Link
            className="menu-item text-white about"
            to={{
              pathname: "/editcompanyprofile",
              search: `?userId=${this.state.profile.id}`,
            }}
          >
            My Account
          </Link>
        )}
        {this.props.auth.isAuthenticated && this.state.profile.roleId === 2 && this.state.data && (
          <Link
            className="menu-item text-white about"
            to={{
              pathname: "/companyprofile",
              search: `?userId=${this.state.profile.id}`,
            }}
          >
            My Account
          </Link>
        )}
        {this.props.auth.isAuthenticated && this.state.profile.roleId === 3 && this.state.data && (
          <Link
            className="menu-item text-white about"
            to={{
              pathname: "/companyprofile",
              search: `?userId=${this.state.profile.id}`,
            }}
          >
            My Account
          </Link>
        )}
        {this.props.auth.isAuthenticated && this.state.profile.roleId === 3 && !this.state.data && (
          <Link
            className="menu-item text-white about"
            to={{
              pathname: "/editcompanyprofile",
              search: `?userId=${this.state.profile.id}`,
            }}
          >
            My Account
          </Link>
        )}
        <hr style={{ background: "white" }} />
        {!this.props.auth.isAuthenticated && (
          <li className="dropdown dropdown-login  order-1 menu-item mt-4">
            <button
              type="button"
              data-toggle="dropdown"
              className="btn btn-outline-light dropdown-toggle btn-login"
            >
              <b>Login </b> <span className="caret" />
            </button>
            <ul className="dropdown-menu mt-2 background-login">
              <li className="px-3 py-2">
                <b>
                  <Login />
                </b>
              </li>
            </ul>
          </li>
        )}
        {this.props.auth.isAuthenticated && (
          <a
            href="/"
            onClick={this.handleLogOut}
            className="button is-light text-center text-white"
          >
            Log out
          </a>
        )}
      </Menu>
    );
  }
}

export default NavBar;
