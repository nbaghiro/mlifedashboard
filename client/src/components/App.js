import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Dashboard from "./Dashboard";
const Garbage = () => <h2>Testing</h2>;

class App extends Component {
  componentDidMount() {
		this.props.fetchUser();
	}

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Dashboard />
          <Route exact path="/surveys" component={Garbage} />
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
