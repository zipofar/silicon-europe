import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCopy, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const NavbarLeft = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faHome} />
            </div>
            Dashboard
          </a>
        </li>
        <li className="nav-item active">
          <a href="/" className="nav-link">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            Add Contract
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCheckSquare} />
            </div>
            Open Tasks
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavbarLeft;
