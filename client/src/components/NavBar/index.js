import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './style.css';
import Login from '../Login';
import { Auth } from 'aws-amplify';

// import { RuleTester } from "eslint";

const orangeColor = {
	backgroundColor: '#DAAD86'
};

export class NavBar extends Component {
	handleLogOut = async (event) => {
		event.preventDefault();
		try {
			Auth.signOut();
			this.props.auth.setAuthStatus(false);
			this.props.auth.setUser(null);
			window.location="/"
		} 
		catch (error) {
			console.log(error.message);
		}
	};

	render() {
		return (
			<Menu>
				<hr style={{ background: 'white' }} />
				<a className="menu-item text-center text-white" href="/">
					Home
				</a>
				{this.props.auth.isAuthenticated &&
				this.props.auth.user && (
					<h5 style={{ textAlign: 'center', color: 'white' }}>Welcome {this.props.auth.user.username}</h5>
				)}
				<hr className="bg-light" style={{ background: 'white' }} />
				<a className="menu-item text-white about" href="/ocean">
					About
				</a>

				<a className="menu-item text-white about" href="#">
					Events
				</a>

				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle text-white"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Climate Change
					</a>
					<div className="dropdown-menu" style={orangeColor} aria-labelledby="navbarDropdown">
						<a className="dropdown-item text-white" href="/ocean">
							Ocean
						</a>
						<a className="dropdown-item text-white" href="#">
							Rainforest
						</a>
						<a className="dropdown-item text-white" href="#">
							Climate Change Info
						</a>
					</div>
				</li>

				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle text-white"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="collapse"
						data-target="#submenu1"
					>
						Company Pollution
					</a>
					<div className="collapse" id="submenu1">
						<a className="dropdown-item " href="#">
							Action
						</a>
						<a className="dropdown-item " href="#">
							Another action
						</a>
						<div className="dropdown-divider" />
						<a className="dropdown-item " href="#">
							Something else here
						</a>
					</div>
				</li>
				{this.props.auth.isAuthenticated && (
				<a className="menu-item text-white about" href="/userprofile">
					My Account
				</a>
				)}
				<hr style={{ background: 'white' }} />
				{!this.props.auth.isAuthenticated && (
					<li className="dropdown dropdown-login  order-1 menu-item mt-4">
						<button type="button" data-toggle="dropdown" className="btn btn-outline-light dropdown-toggle ">
							Login <span className="caret" />
						</button>
						<ul className="dropdown-menu mt-2">
							<li className="px-3 py-2">
								<Login></Login>
							</li>
						</ul>
					</li>
				)}
				{this.props.auth.isAuthenticated && (
					<a href="/" onClick={this.handleLogOut} className="button is-light text-center text-white">
						Log out
					</a>
				)}
			</Menu>
		);
	}
}

export default NavBar;
