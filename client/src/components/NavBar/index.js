import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './style.css';
// import { RuleTester } from "eslint";

const orangeColor = {
	backgroundColor: '#DAAD86'
};

export class NavBar extends Component {
	render() {
		return (
			<Menu>
				<hr style={{ background: 'white' }} />
				<a className="menu-item text-center text-white" href="/">
					Home
				</a>
				<hr className="bg-light" style={{ background: 'white' }} />
				<a className="menu-item text-white about" href="/ocean">
					About
				</a>

				<a className="menu-item text-white about" href="/ocean">
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
						<a className="dropdown-item text-white" href="#">
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
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Company Pollution
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
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

				<hr style={{ background: 'white' }} />

				<li className="dropdown dropdown-login  order-1 menu-item mt-4">
					<button type="button" data-toggle="dropdown" className="btn btn-outline-light dropdown-toggle ">
						Login <span className="caret" />
					</button>
					<ul className="dropdown-menu mt-2">
						<li className="px-3 py-2">
							<form className="form">
								<div className="form-group">
									<input
										id="emailInput"
										placeholder="Email"
										className="form-control form-control-sm"
										type="email"
										required=""
									/>
								</div>
								<div className="form-group">
									<input
										id="passwordInput"
										placeholder="Password"
										className="form-control form-control-sm"
										type="password"
										required=""
									/>
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-warning btn-block login-button ">
										Login
									</button>
								</div>
								<div className="form-group text-center">
									<small>
										<a href="#" data-toggle="modal" data-target="#modalPassword" className="">
											Forgot password?
										</a>
									</small>
								</div>

								<div className="form-group text-center">
									<small>
										<a href="" className="">
											<b>register</b>
										</a>
									</small>
								</div>
							</form>
						</li>
					</ul>
				</li>
			</Menu>
		);
	}
}

export default NavBar;
