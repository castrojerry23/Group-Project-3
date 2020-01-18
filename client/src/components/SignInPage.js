import React from 'react';
import './Components.css';


import SignInFormContainer from '../containers/SignInFormContainer';

export default () => (
  <div className="card container">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h1>Sign in</h1>
        <hr />
        <SignInFormContainer />
      </div>
    </div>
  </div>
);
