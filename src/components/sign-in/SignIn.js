import React from "react";
import "./SignIn.scss";

import FormInput from "../form-input/FormInput";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    // writing one function for different things, e.g.: email or password
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;
    console.log(`Email is: ${email} and password: ${password}`);
    e.preventDefault();
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form className="sign-in-form" onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
