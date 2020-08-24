import React, { Component } from 'react'
import { bubble as Menu } from "react-burger-menu";
import './style.css'
// import { RuleTester } from "eslint";



export class NavBar extends Component {
    render() {
        return (
            <Menu>
        <hr style={{background: "white"}}/>
      <a className="menu-item text-center text-white" href="/">
        Home
      </a>
        <hr class="bg-light" style={{background: "white"}}/>
      <a className="menu-item text-center text-white" href="/ocean">
       About
      </a>

      <li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle text-center text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Events
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown">
          <a class="dropdown-item text-center " href="#">Action</a>
          <a class="dropdown-item text-center " href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-center " href="#">Something else here</a>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-center text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Climate Change
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item " href="#">Action</a>
          <a class="dropdown-item " href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item " href="#">Something else here</a>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-center text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Company Pollution
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item " href="#">Action</a>
          <a class="dropdown-item " href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item " href="#">Something else here</a>
        </div>
      </li>

     

      <li className="dropdown dropdown-login  order-1 text-center menu-item mt-4">
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
    </Menu>
        )
    }
}

export default NavBar;


