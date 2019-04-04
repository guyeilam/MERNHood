import React from 'react';
import { withRouter } from 'react-router-dom';

import './signup_form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-form-header">
          <div className="signup-form-header-logo">
            <img src="https://d2ue93q3u507c2.cloudfront.net/assets/robinhood/images/logo.png" alt="Logo" />        
          </div>

          <div className="signup-form-progress">
            <div className="signup-progress-text-container">
              <div className="signup-progress-text">
                Account
              </div>
              <div className="signup-progress-text">
                Basic Info
              </div>
              <div className="signup-progress-text">
                Identity
              </div>
              <div className="signup-progress-text">
                Funding
              </div>
              <div className="signup-progress-text">
                Submit
              </div>
            </div>

            <div className="signup-progress-bar">
              <div className="signup-progress-bar-segment"></div>
            </div>
          </div>
        </div>

        <div className="signup-form-container">
          <div className="signup-form-main">
            <div className="signup-form-header-text">
              Make Your Money Move
            </div>
            <div className="signup-form-subheader">
              Robinhood lets you invest in companies you love, commission-free.
            </div>
            <div className="signup-form">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                  <div className="signup-form-inputs">
                    <div className="signup-form-inputs-row">
                      <input type="text" value={this.state.firstName} onChange={this.update("firstName")} placeholder="First name" />
                      <input type="text" value={this.state.lastName} onChange={this.update("lastName")} placeholder="Last name" />
                    </div>
                    <div className="signup-form-inputs-row">
                      <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
                    </div>
                    <div className="signup-form-inputs-row">
                      <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
                    </div>
                    <div className="signup-form-inputs-row">
                      <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password" />
                    </div>
                    <div className="signup-form-inputs-row">
                      <input type="submit" value="Submit" />
                    </div>
                    {this.renderErrors()}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="signup-form-sidebar">

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
