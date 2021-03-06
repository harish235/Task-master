import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Task-Master</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Task's</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create task</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search task</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}