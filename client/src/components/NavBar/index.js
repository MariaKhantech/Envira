import React, { Component } from 'react';
import './style.css';

export class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCollapsed: true
		};
	}

	//hides and shows the side nav when the button is clicked
	toggleclassName = () => {
		//grab the html elements
		const sideBarElement = document.getElementById('sidebar');
		const sidebarCollapseElement = document.getElementById('sidebarCollapse');

		if (this.state.isCollapsed) {
			sideBarElement.classList.remove('active');
			sidebarCollapseElement.classList.remove('active');
			this.setState({ isCollapsed: false });
		} else {
			sideBarElement.classList.add('active');
			sidebarCollapseElement.classList.add('active');
			this.setState({ isCollapsed: true });
		}

		//add active class make them disappear
	};

	render() {
		return (
			<div className="wrapper">
				{/* <!-- Sidebar Holder --> */}
				<nav id="sidebar" className="active">
					<div className="sidebar-header ">
						<h3>Enviro</h3>
					</div>

					<ul className="list-unstyled components">
						<p>Menu</p>
						<li className="active">
							<a
								href="#homeSubmenu"
								data-toggle="collapse"
								aria-expanded="false"
								className="dropdown-toggle"
							>
								Environmental Information
							</a>
							<ul className="collapse list-unstyled" id="homeSubmenu">
								<li>
									<a href="#">Ocean</a>
								</li>
								<li>
									<a href="#">Rainforest</a>
								</li>
								<li>
									<a href="#">Climate Change Information</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">About</a>
							<a
								href="#pageSubmenu"
								data-toggle="collapse"
								aria-expanded="false"
								className="dropdown-toggle"
							>
								Pollutant information
							</a>
							<ul className="collapse list-unstyled" id="pageSubmenu">
								<li>
									<a href="#">Page 1</a>
								</li>
								<li>
									<a href="#">Page 2</a>
								</li>
								<li>
									<a href="#">Page 3</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Events</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>

					<li className="dropdown dropdown-login  order-1 text-center">
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
										<button type="submit" className="btn btn- btn-block login-button ">
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
				</nav>

				{/* <!-- Page Content Holder --> */}
				<div id="content">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">
							<button
								type="button"
								id="sidebarCollapse"
								className="navbar-btn active"
								onClick={this.toggleclassName}
							>
								<span />
								<span />
								<span />
							</button>
							<button
								className="btn btn-dark d-inline-block d-lg-none ml-auto"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i className="fas fa-align-justify fa-lg" />
							</button>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}

export default NavBar;
