import React from 'react';
import { withRouter } from 'react-router-dom';

import './signup_form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
              <div className="signup-progress-bar-segment">
                
              </div>
            </div>
          </div>
        </div>







          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="signup-form">
                <br/>
                <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email" />
                <br/>
                <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
                <br/>
                <input type="password" value={this.state.password2} onChange={this.update("password2")} placeholder="Confirm Password" />
                <br/>
                <input type="submit" value="Submit" />
                {this.renderErrors()}
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
