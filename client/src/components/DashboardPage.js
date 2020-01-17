import React from 'react';

import './Components.css';


export default (props) => {
  const users = props.data.users;

  if (!users) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Loading</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" >
      <div className="row">
        <div className="col-md-12">
          <h1>My Details</h1>
          <table className="table mt-2" id="profilepage">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                {/* <th>Email</th> */}
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.lastName}</td>
                  {/* <td>{user.email}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p>Saved Movies</p>

      <div className="container" id="savedmovies">
        <div className="row">
          <div className="col-md-12">
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
    
  )
};
