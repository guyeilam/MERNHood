import React from 'react';
import { withRouter } from 'react-router-dom';
import AccountInfoForm from './account_info';

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
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.saveValues = this.saveValues.bind(this);
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
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
      step: (this.state.step + 1)
    });
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
    let fieldValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    }
    let formComponent;
    switch (this.state.step) {
      case 1:
        formComponent = <AccountInfoForm fieldValues={fieldValues}
                                          saveValues={this.saveValues} />;
        break;
      case 2:
        formComponent = (
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="submit" value="Submit" /> 
          </form>
        );
        break;
      default:
        break;
    }
    return (
      <div className="signup-container">
        <div className="signup-form-header">
          <div className="signup-form-header-logo">
            <img src="https://d2ue93q3u507c2.cloudfront.net/assets/robinhood/images/logo.png" alt="Logo" />        
          </div>

          <div className="signup-form-progress">
            <div className="signup-progress-text-container">
              <div className={ this.state.step === 1 ? `signup-progress-text` : `signup-progress-text inactive-text` }>
                Account
              </div>
              <div className="signup-progress-text inactive-text">
                Basic Info
              </div>
              <div className="signup-progress-text inactive-text">
                Identity
              </div>
              <div className="signup-progress-text inactive-text">
                Funding
              </div>
              <div className={ this.state.step === 2 ? `signup-progress-text` : `signup-progress-text inactive-text` }>
                Submit
              </div>
            </div>

            <div className="signup-progress-bar">
              <div className="signup-progress-bar-segment active"></div>
              <div className={ this.state.step > 1 ? `signup-progress-bar-segment active` : `signup-progress-bar-segment` } ></div>
              <div className={ this.state.step > 1 ? `signup-progress-bar-segment active` : `signup-progress-bar-segment` } ></div>
              <div className={ this.state.step > 1 ? `signup-progress-bar-segment active` : `signup-progress-bar-segment` } ></div>
              <div className={ this.state.step > 1 ? `signup-progress-bar-segment active` : `signup-progress-bar-segment` } ></div>
              <div className="signup-progress-bar-segment"></div>
            </div>
          </div>
        </div>
        {this.renderErrors()}
        <div className="signup-form-container">
          
          {formComponent}

          <div className="signup-form-sidebar">

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
