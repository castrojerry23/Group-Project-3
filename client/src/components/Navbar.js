import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';
import $ from 'jquery'


export default (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.logout();
  };

  const links = (
    (props.authenticated) ?
      <div>
        <div className="nav navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="nav navbar-nav">
          <Link to="#" onClick={logout} className="nav-link">Logout</Link>
        </div>
      </div>
    :
      <div>
        <div className="nav navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="nav navbar-nav">
          <Link to="/signin" className="nav-link">Sign in</Link>
          <Link to="/signup" className="nav-link">Sign up</Link>
        </div>
      </div>
    );

  return (
    <div id="container">
      <div id="menu">f&#9906;</div>
      <div id="lgMenu">
        <span id="exit">&times;</span>
          <ul>
          <nav className="navbar navbar-light bg-faded mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{links}</div>
        </div>
      </div>
    </nav>
    </ul>
    </div>
    </div>
  );
};

$(document).ready(function(){
    $("#menu").on("click", function(){
    $("#menu").css("opacity", "0");
    $("#lgMenu").addClass("enter");
    });
    $("#exit").on("click", function(){
    $("#lgMenu").removeClass("enter");
    $("#menu").css("opacity", "1");
    });
});