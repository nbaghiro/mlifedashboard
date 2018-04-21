import React, { Component } from "react";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

import AuthorizedLanding from "./AuthorizedLanding";

class Landing extends Component {
  renderContent() {
		switch (this.props.auth) {
			case null:
				return (
          <Dimmer active>
            <Loader />
          </Dimmer>
        );
			case false:
				return "Log in with facebook to proceed!";
			default:
				return <AuthorizedLanding />;
		}
	}

  render() {
    return this.renderContent();
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
