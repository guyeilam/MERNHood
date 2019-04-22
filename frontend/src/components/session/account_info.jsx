import React, { useState } from 'react';
import {connect} from 'react-redux';

function AccountInfoForm({fieldValues, saveValues}) {
  const [firstName, setFirstName] = useState(fieldValues.firstName);
  const [lastName, setLastName] = useState(fieldValues.lastName);
  const [email, setEmail] = useState(fieldValues.email);
  const [password, setPassword] = useState(fieldValues.password);
  const [password2, setPassword2] = useState(fieldValues.password2);

  function handleSubmit(e) {
    e.preventDefault();
    const fieldValues = Object.assign({}, {firstName, lastName, email, password, password2});
    saveValues(fieldValues);
  }

  function renderErrors() {}

  return (
    <div className="signup-form-main">
      <div className="signup-form-header-text">Make Your Money Move</div>
      <div className="signup-form-subheader">
        Robinhood lets you invest in companies you love, commission-free.
      </div>
      <div className="signup-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="signup-form">
            <div className="signup-form-inputs">
              <div className="signup-form-inputs-row">
                <input
                  type="text"
                  className="signup-form-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.currentTarget.value)}
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="signup-form-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.currentTarget.value)}
                  placeholder="Last name"
                />
              </div>
              <div className="signup-form-inputs-row">
                <input
                  type="text"
                  className="signup-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  placeholder="Email"
                />
              </div>
              <div className="signup-form-inputs-row">
                <input
                  type="password"
                  className="signup-form-input"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  placeholder="Password"
                />
              </div>
              <div className="signup-form-inputs-row">
                <input
                  type="password"
                  className="signup-form-input"
                  value={password2}
                  onChange={(e) => setPassword2(e.currentTarget.value)}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="signup-form-inputs-row">
                <input type="submit" className="signup-form-submit" value="Continue" />
              </div>
              {renderErrors()}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    fieldValues: ownProps.fieldValues,
    saveValues: ownProps.saveValues,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountInfoForm);
