import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';

import logo from '../../Images/cog.png';



class NavBar extends Component {

  constructor() {
    super();

    this.state = {
      servicesDropdown: false,
      communityDropdown: false,
    };

    this.showServicesDropdown = this.showServicesDropdown.bind(this);
    this.showCommunityDropdown = this.showCommunityDropdown.bind(this);

    this.hideServicesDropdown = this.hideServicesDropdown.bind(this);
    this.hideCommunityDropdown = this.hideCommunityDropdown.bind(this);

  };


  showServicesDropdown(event) {
    event.preventDefault();
    this.setState({ servicesDropdown: true }, () => {
    document.addEventListener('click', this.hideServicesDropdown);
    });
  }

  showCommunityDropdown(event) {
    event.preventDefault();
    this.setState({ communityDropdown: true }, () => {
    document.addEventListener('click', this.hideCommunityDropdown);
    });
  }

  hideServicesDropdown() {
    this.setState({ servicesDropdown: false }, () => {
      document.removeEventListener('click', this.hideServicesDropdown);
    });
  }

  hideCommunityDropdown() {
    this.setState({ communityDropdown: false }, () => {
      document.removeEventListener('click', this.hideCommunityDropdown);
    });
  }


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
            <div className="menu-link hasDropdown" id={`${this.state.servicesDropdown ? 'dropdownActive' : ''}`} onClick={this.showServicesDropdown} >Services</div>
            {this.state.servicesDropdown ? (
              <ul className="dropdown">
                <li className="dropdown-item">Testing</li>
              </ul>
            ) : ( null )}

          </li>



          <li className="menu-list-item" onClick={this.showCommunityDropdown}>
            <div className="menu-link" id={`${this.state.communityDropdown ? 'dropdownActive' : ''}`} onClick={this.showCommunityDropdown} >Community</div>
            {this.state.communityDropdown ? (
              <ul className="dropdown">
                <li className="dropdown-item">Testing</li>

              </ul>
            ) : ( null )}

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
