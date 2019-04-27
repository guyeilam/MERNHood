import React from "react";
import { withRouter } from "react-router-dom";

import "./login_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-sidebar" />
        <div className="login-form-content">
          <form className="login-form-inputs" onSubmit={this.handleSubmit}>
            <div className="login-form-inputs-content">
              <div className="login-form-subheader">Welcome to MERNHood</div>

              <div className="login-form-inputs-row">
                <div className="login-form-inputs-label">Email or Username</div>
                <input
                  className="login-form-input"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  required
                />
              </div>
              <div className="login-form-inputs-row">
                <div className="login-form-inputs-label">Password</div>
                <input
                  className="login-form-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  onClick={() => console.log("clicked")}
                  required
                />
              </div>
              <input
                className="login-form-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                required
              />
            </div>
            <div className="login-form-inputs-row">
              <input
                className="signin-form-submit"
                type="submit"
                value="Sign In"
              />
            </div>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
