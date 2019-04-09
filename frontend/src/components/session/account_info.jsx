import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.fieldValues.firstName,
      lastName: this.props.fieldValues.lastName,
      email: this.props.fieldValues.email,
      password: this.props.fieldValues.password,
      password2: this.props.fieldValues.password2
    }
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const fieldValues = Object.assign({}, this.state);
    this.props.saveValues(fieldValues);
  }

  renderErrors() {
  }

  render() {
    return (
      <div className="signup-form-main">
        <div className="signup-form-header-text">
          Make Your Money Move
        </div>
        <div className="signup-form-subheader">
          Robinhood lets you invest in companies you love, commission-free.
        </div>
        <div className="signup-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="signup-form">
              <div className="signup-form-inputs">
                <div className="signup-form-inputs-row">
                  <input type="text" 
                         className="signup-form-input" 
                         value={this.state.firstName} 
                         onChange={this.update("firstName")} 
                         placeholder="First name" />
                  <input type="text" 
                         className="signup-form-input" 
                         value={this.state.lastName} 
                         onChange={this.update("lastName")} 
                         placeholder="Last name" />
                </div>
                <div className="signup-form-inputs-row">
                  <input type="text" 
                         className="signup-form-input"
                         value={this.state.email} 
                         onChange={this.update("email")} 
                         placeholder="Email" />
                </div>
                <div className="signup-form-inputs-row">
                  <input type="password" 
                         className="signup-form-input" 
                         value={this.state.password} 
                         onChange={this.update("password")} 
                         placeholder="Password" />
                </div>
                <div className="signup-form-inputs-row">
                  <input type="password" 
                         className="signup-form-input" 
                         value={this.state.password2} 
                         onChange={this.update("password2")} 
                         placeholder="Confirm Password" />
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
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    fieldValues: ownProps.fieldValues,
    saveValues: ownProps.saveValues
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfoForm);
