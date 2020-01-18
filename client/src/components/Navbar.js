import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';
import $ from 'jquery'


import './Components.css';


export default (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.logout();
  };

  const links = (
    (props.authenticated) ?
      <div>

        <div className="nav navbar-nav">
          <Link to="/landingpage" onClick="navbar-collapse" className="nav-link">Home</Link>
        </div>

        <div className="nav navbar-nav">
          <Link to="#" onClick={logout} className="nav-link">Logout</Link>
        </div>

        <div className="nav navbar-nav">
          <Link to="/dashboard" onClick="navbar-collapse" className="nav-link">Profile</Link>
        </div>

      </div>

    :
        <div class="container" className="nav navbar-nav">
          <ul>
            <li className="navbarHover">
              <Link to="/" onClick="navbar-collapse" className="nav-link">Home</Link>
            </li>
            <li className="navbarHover">
              <Link to="/signin" onClick="navbar-collapse" className="nav-link">Sign in</Link>
            </li>
            <li className="navbarHover">
              <Link to="/signup" onClick="navbar-collapse" className="nav-link">Sign up</Link>
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

$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('li') ) {
      $(this).collapse('hide');
  }
});