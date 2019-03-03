import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const MenuTop = () => (
  <div className="menu-top bg-primary">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="/">
          <FontAwesomeIcon icon={faUserAlt} />
          Welcome, Anil Tumati
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <FontAwesomeIcon icon={faLock} />
          Logout
        </a>
      </li>
    </ul>
  </div>
);

export default MenuTop;
