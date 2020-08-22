import React, { Component } from "react";
import axios from "axios";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      emailAddress: "",
      password: "",
    };
  }

  onChangeEmailAddress(e) {
    this.setState({
      emailAddress: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      emailAddress: this.state.emailAddress,
      password: this.state.password,
    };

    console.log(user.emailAddress);

    axios
      .put("http://localhost:5000/user/findUser/", user)
      .then((res) => {
        console.log(res.data);
        window.location = `/welcome/${res.data.firstName}`;
      })
      .catch((err) => {
        console.log(err);
        window.location = "/";
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.onChangeEmailAddress}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.onChangePassword}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
export default LoginComponent;
