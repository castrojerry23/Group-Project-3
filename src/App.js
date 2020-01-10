import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignupPage from "./components/pages/SignupPage";
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (

    <div className="ui container">
        <Route location={location} path="/" exact component={HomePage} />
        <GuestRoute location={location} path="/login" exact component={LoginPage} />
        <GuestRoute 
        location={location} 
        path="/signup" 
        exact 
        component={SignupPage} 
        />
        <UserRoute 
        location={location} 
        path="/profilePage" 
        exact 
        component={ProfilePage} />
    </div>

);

  App.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.user.email
    };
  }

export default connect(mapStateToProps)(App);
