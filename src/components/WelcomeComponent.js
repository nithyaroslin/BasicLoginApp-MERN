import React, { Component } from "react";

export class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);

    this.state = {};
  }

  handleLogout(e) {
    e.preventDefault();
    console.log("Logged out!");
    window.location = "/";
  }

  render() {
    console.log(this.props.match.params);
    return (
      <div>
        <h1>Welcome {this.props.match.params.user}!</h1>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default WelcomeComponent;
