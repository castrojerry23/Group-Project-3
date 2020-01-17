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
        <div class="conatiner" className="nav navbar-nav">
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/signin" className="nav-link">Sign in</Link>
            </li>
            <li>
              <Link to="/signup" className="nav-link">Sign up</Link>
            </li>
          </ul>
        </div>
    );

  return (
    <div id="container">
      <div id="menu">f&#9906;</div>
      <div id="lgMenu">
        <span id="exit">&times;</span>
          <ul>
            <li>
              <div>{links}</div>
            </li>
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