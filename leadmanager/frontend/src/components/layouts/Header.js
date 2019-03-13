import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm py-3 navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Lead Managers</a>
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
              <li className="nav-item mr-0">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
