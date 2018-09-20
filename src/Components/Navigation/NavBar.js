import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';

import logo from '../../Images/cog.png';



class NavBar extends Component {

render() {

  return (
    <div>
  <Router>
        <div id="outer-container">
          <nav className="nav-bar">

            <NavLink to="/" className="menu-link" exact className="inactive" activeClassName="active-logo">
          <div id="menu-left">
          <img alt="cog" id="cog" src={logo}/>

          <div id="title">
            <h2>FIZZ</h2>
            <h5>The UBC Engineering Physics Student Association</h5>
          </div>
        </div>

        </NavLink>

        <div id="menu-right">

          <ul id="menu-list">

          <li className="menu-list-item" onClick={this.showServicesDropdown}>
            <div className="menu-link hasDropdown">Services</div>

              <ul className="dropdown">
                <li className="dropdown-item">Testing</li>
                <li className="dropdown-item">Testing</li>

              </ul>


          </li>



          <li className="menu-list-item" onClick={this.showCommunityDropdown}>
            <div className="menu-link hasDropdown">Community</div>

              <ul className="dropdown">
                <li className="dropdown-item">Testing</li>

              </ul>


          </li>

          <li className="menu-list-item">
           <div className="menu-link">
             <NavLink to="/" exact className="inactive" activeClassName="active">
            Admin
             </NavLink>
           </div>
          </li>




        </ul>

        </div>
        </nav>

        <div id="route-container">
        <Route path="/" exact strict render={
          () => {
            return ( <div>
              <About/>
              <Footer/>
            </div>

            );
          }
        }/>



        </div>


        </div>
      </Router>


    </div>
);
}

}

export default NavBar;
