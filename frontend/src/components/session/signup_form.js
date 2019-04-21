import React from 'react';
import {withRouter} from 'react-router-dom';
import AccountInfoForm from './account_info';
import SignupFormHeader from './signup_form_header.jsx';

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
      step: 1,
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.saveValues = this.saveValues.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }
    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.signup(user, this.props.history);
  }

  saveValues(fields) {
    let newState = Object.assign({}, this.state, fields);
    this.setState({
      firstName: newState.firstName,
      lastName: newState.lastName,
      email: newState.email,
      password: newState.password,
      password2: newState.password2,
      step: this.state.step + 1,
    });
  }

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
    let fieldValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    };
    let formComponent;
    switch (this.state.step) {
      case 1:
        formComponent = (
          <AccountInfoForm
            fieldValues={fieldValues}
            saveValues={this.saveValues}
          />
        );
        break;
      case 2:
        formComponent = (
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="confirm-header">
              Welcome,
              <div className="confirm-header-green">
                &nbsp;{this.state.firstName}
              </div>
            </div>
            <div className="confirm-header">
              Please confirm your information
            </div>

            <div className="confirm-details">
              <div className="confirm-first-name">
                First name:{' '}
                <div className="confirm-header-green">
                  &nbsp;{this.state.firstName}
                </div>
              </div>
              <div className="confirm-last-name">
                Last name:{' '}
                <div className="confirm-header-green">
                  &nbsp;{this.state.lastName}
                </div>
              </div>
              <div className="confirm-email">
                Email:{' '}
                <div className="confirm-header-green">
                  &nbsp;{this.state.email}
                </div>
              </div>
            </div>

            <input
              type="submit"
              className="signup-form-submit"
              value="Submit"
            />
          </form>
        );
        break;
      default:
        break;
    }
    return (
      <div className="signup-container">
        <SignupFormHeader step={this.state.step} />
        {this.renderErrors()}
        <div className="signup-form-container">
          {formComponent}

          <div className="signup-form-sidebar" />
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
