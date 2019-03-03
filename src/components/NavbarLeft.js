import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCopy, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link"><div className="icon-wrapper"><FontAwesomeIcon icon={faHome} /></div>Dashboard</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link"><div className="icon-wrapper"><FontAwesomeIcon icon={faCopy} /></div>Add Contract</a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><div className="icon-wrapper"><FontAwesomeIcon icon={faCheckSquare} /></div>Open Tasks</a>
            </li>
        </ul>
    </div>
  </nav>
);

