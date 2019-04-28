import React from "react";

function ConfirmInfo({ fieldValues, handleSubmit }) {
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="confirm-header">
        Welcome,
        <div className="confirm-header-green">
          &nbsp;{fieldValues.firstName}
        </div>
      </div>
      <div className="confirm-header">Please confirm your information</div>

      <div className="confirm-details">
        <div className="confirm-first-name">
          First name:{" "}
          <div className="confirm-header-green">
            &nbsp;{fieldValues.firstName}
          </div>
        </div>
        <div className="confirm-last-name">
          Last name:{" "}
          <div className="confirm-header-green">
            &nbsp;{fieldValues.lastName}
          </div>
        </div>
        <div className="confirm-email">
          Email:{" "}
          <div className="confirm-header-green">&nbsp;{fieldValues.email}</div>
        </div>
      </div>

      <input type="submit" className="signup-form-submit" value="Submit" />
    </form>
  );
}

export default ConfirmInfo;
