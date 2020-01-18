import React from 'react';
import './Components.css';


import SignUpFormContainer from '../containers/SignUpFormContainer';

export default () => (
  <div className="card container">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h1 className="signupform">Sign up</h1>
        <hr />
        <SignUpFormContainer />
      </div>
    </div>
  </div>
);
