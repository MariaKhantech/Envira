import React, { Component } from 'react';
import { menuData } from './menuData';
import './style.css';

export class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSidebarOpen: true
		};
	}
	handleMenuButtonClick = () => {
		this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
	};
	render() {
		const { isSidebarOpen } = this.state;
		return (
			<div className="container">
				<div className="menu-button" onClick={this.handleMenuButtonClick}>
					<i className="fa fa-bars" />
				</div>
				{/*	Sidebar */}
				{menuData.length && (
					<nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
						<div onClick={this.handleMenuButtonClick} className="close">
							<i className="fas fa-times" />
						</div>
						<ul className="menu-items">
							{menuData.map((item) => (
								<li className="menu-list" key={item.label}>
									<a className="menu-link" href={item.url}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		);
	}
}

export default NavBar;
