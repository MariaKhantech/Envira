import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavbarTest';
import NavBar from "./components/NavBar";

import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Infographics from "./pages/Infographics";
import Ocean from "./pages/ocean";
import Rainforest from "./pages/rainforest";
import Profile from "./pages/Profile";
import Events from "./pages/events";
import { Auth } from 'aws-amplify';

export default class AppTest extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }
  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }

    this.setState({ isAuthenticating: false });
  }





  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return (
      !this.state.isAuthenticating &&
      <>
        <div className="App">
          <Router>
            <div>
              <Navbar auth={authProps} />
              <Switch>
                <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
                <Route exact path="/login" render={(props) => <Login {...props} auth={authProps} />} />
                <Route exact path="/signup" render={(props) => <Signup {...props} auth={authProps} />} />
                <Route exact path="/profile" render={(props) => <Profile {...props} auth={authProps} />} />
                <Route exact path="/infographics" render={(props) => < Infographics {...props} auth={authProps} />} />
                <Route exact path="/ocean" render={(props) => < Ocean {...props} auth={authProps} />} />
                <Route exact path="/rainforest" render={(props) => <Rainforest {...props} auth={authProps} />} />
                <Route exact path="/events" render={(props) => <Events {...props} auth={authProps} />} />
                <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
                <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
                <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
                <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
              </Switch>

            </div>
          </Router>
        </div>
      </>
    )
  }
}
