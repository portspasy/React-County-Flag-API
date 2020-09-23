import React from "react";
import "./Signup.scss";

import FormInput from "../form-input/FormInput";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    // writing one function for different things, e.g.: email or password
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { displayName, email, password, confirmPassword } = this.state;
    console.log(
      `Username: ${displayName}, Email: ${email} and Password: ${password}, Confirm password: ${confirmPassword}`
    );
    e.preventDefault();
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password.</span>

        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Username"
            required
          />

          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <div className="buttons">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
