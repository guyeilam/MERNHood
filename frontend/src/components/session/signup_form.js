import React from 'react';
import {withRouter} from 'react-router-dom';
import AccountInfoForm from './account_info';
import SignupFormHeader from './signup_form_header';
import ConfirmInfoForm from './confirm_info';

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
    this.renderBackButton = this.renderBackButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }
    this.setState({errors: nextProps.errors});
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

  handleBackButtonClick() {
    if (this.state.step > 1) {
      this.setState({step: this.state.step - 1});
    } else {
      return null;
    }
  }

  renderBackButton() {
    if (this.state.step > 1) {
      return (
        <div className="signup-form-back-button"><button className="back-button" onClick={() => this.handleBackButtonClick()}>Back</button></div>
      );
    } else {
      return null;
    }
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
    let formComponent;
    switch (this.state.step) {
      case 1:
        formComponent = (
          <AccountInfoForm
            fieldValues={this.state}
            saveValues={this.saveValues}
          />
        );
        break;
      case 2:
        formComponent = (
          <ConfirmInfoForm
            fieldValues={this.state}
            handleSubmit={this.handleSubmit}
          />
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
        {this.renderBackButton()}
      </div>
    );
  }
}

export default withRouter(SignupForm);
