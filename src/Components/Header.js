import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {/* Navbar Brand Section */}
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>ToDoList</strong>
          </Link>

          {/* Burger Menu for Mobile */}
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
              
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* Navbar Menu */}
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <a className="navbar-item">Documentation</a>

            {/* Dropdown */}
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Menu</a>
              <div className="navbar-dropdown">
                <a className="navbar-item is-selected">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;