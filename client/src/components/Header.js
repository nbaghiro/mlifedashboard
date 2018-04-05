import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<Menu.Item name="login" content="Login With Google" as="a" href="/auth/google" />
				);
			default:
				return [
					<Menu.Item content={this.props.auth.displayName} />,
					<Menu.Item name="logout" content="Logout" as="a" href="/api/logout" />
				];
		}
	}

	render() {
		return (
			<Menu>
				<Menu.Item header as={Link} to="/surveys">
					M Life
				</Menu.Item>
				<Menu.Menu position="right">
					{this.renderContent()}
				</Menu.Menu>
			</Menu>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
