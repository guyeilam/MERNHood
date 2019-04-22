import React from "react";

const SignupFormHeader = ({ step }) => (
  <div className="signup-form-header">
    <div className="signup-form-header-logo">
      <img
        src="https://d2ue93q3u507c2.cloudfront.net/assets/robinhood/images/logo.png"
        alt="Logo"
      />
    </div>

    <div className="signup-form-progress">
      <div className="signup-progress-text-container">
        <div
          className={
            step === 1
              ? `signup-progress-text`
              : `signup-progress-text inactive-text`
          }
        >
          Account
        </div>
        <div className="signup-progress-text inactive-text">Basic Info</div>
        <div className="signup-progress-text inactive-text">Identity</div>
        <div className="signup-progress-text inactive-text">Funding</div>
        <div
          className={
            step === 2
              ? `signup-progress-text`
              : `signup-progress-text inactive-text`
          }
        >
          Submit
        </div>
      </div>

      <div className="signup-progress-bar">
        <div className="signup-progress-bar-segment active" />
        <div
          className={
            step > 1
              ? `signup-progress-bar-segment active`
              : `signup-progress-bar-segment`
          }
        />
        <div
          className={
            step > 1
              ? `signup-progress-bar-segment active`
              : `signup-progress-bar-segment`
          }
        />
        <div
          className={
            step > 1
              ? `signup-progress-bar-segment active`
              : `signup-progress-bar-segment`
          }
        />
        <div
          className={
            step > 1
              ? `signup-progress-bar-segment active`
              : `signup-progress-bar-segment`
          }
        />
        <div className="signup-progress-bar-segment" />
      </div>
    </div>
  </div>
);

export default SignupFormHeader;
