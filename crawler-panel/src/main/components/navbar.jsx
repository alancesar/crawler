import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar has-shadow">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        crawler-panel
      </Link>
    </div>
    <div className="navbar-menu is-active">
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <Link className="navbar-item" to="/crawler">
        Crawler
      </Link>
    </div>
  </nav>
);

