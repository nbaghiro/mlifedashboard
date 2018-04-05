import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  renderContent() {
		switch (this.props.auth) {
			case null:
				return "Loading...";
			case false:
				return "Log in with facebook to proceed!";
			default:
				return "Welcome";
		}
	}

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
