import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './SideDrawer.css';


const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        <NavLink to="/faq" className="dropdown-item" activeClassName="dropdown-item">
        FAQ
        </NavLink>
      </li>

      <li>
        <NavLink to="/FizzExecs" className="dropdown-item" activeClassName="dropdown-item">
        Fizz Execs
        </NavLink>
      </li>

    </ul>
  </nav>
);

export default sideDrawer;
