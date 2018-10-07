import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './SideDrawer.css';


const sideDrawer = props => {

let drawerClasses = 'side-drawer';

if (props.show) {
  drawerClasses = 'side-drawer open';
}

  return (
    <nav className={drawerClasses}>
    <ul>

      <li className="menu-header">Services</li>
      <li>
        <NavLink to="/faq" className="dropdown-item" activeClassName="dropdown-item">
        FAQ
        </NavLink>
      </li>

      <li className="dropdown-item">Testing</li>


      <li className="menu-header">Admin</li>
      <li>
        <NavLink to="/FizzExecs" className="dropdown-item" activeClassName="dropdown-item">
        Fizz Execs
        </NavLink>
      </li>

      <li className="dropdown-item">Testing</li>


      <li className="menu-header">Community</li>

      <li className="dropdown-item">Testing</li>



    </ul>
  </nav>
);
};

export default sideDrawer;
