import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import FizzExecs from '../Admin/FizzExecs/FizzExecs.js';
import FAQ from '../Services/FAQ/FAQ.js';
import ScrollToTop from './ScrollToTop.js';
import logo from '../../Images/cog.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class NavBar extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(
      (prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      }
    );
  };

  backdropClickHandler = () => {
    return this.setState(
      {sideDrawerOpen: false,}
    );
  };

render() {

  let sideDrawer;
  let backdrop;

  if (this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop click={this.backdropClickHandler}/>;
  }

  return (
    <div  style={{height: '100%'}}>
  <Router style={{height: '100%'}}>

    <ScrollToTop>

      {sideDrawer}
      {backdrop}

        <div id="outer-container">

          <nav className="nav-bar">

            <div>
              <DrawerToggleButton click={this.drawerToggleClickHandler}/>
            </div>

          <NavLink to="/" className="menu-link" exact className="inactive" activeClassName="active-logo">
          <div id="menu-left">
          <img alt="cog" id="cog" src={logo}/>
          <div id="title">
            <h2>FIZZ</h2>
            <h5>The UBC Engineering Physics Student Association</h5>
          </div>
          </div>
           </NavLink>

           <div class="spacer"/>

          <ul id="menu-list">
          <li className="menu-list-item">
            <div className="menu-link">Services</div>
              <ul className="dropdown">
                <li>
                  <NavLink to="/faq" className="dropdown-item" activeClassName="dropdown-item">
                  FAQ
                  </NavLink>
                </li>
                <li className="dropdown-item">Testing</li>
              </ul>
          </li>

          <li className="menu-list-item">
            <div className="menu-link">Community</div>
              <ul className="dropdown">
                <li className="dropdown-item">Testing</li>
              </ul>
          </li>

          <li className="menu-list-item">
            <div className="menu-link">Admin</div>
              <ul className="dropdown">
                <li>
                    <NavLink to="/FizzExecs" className="dropdown-item" activeClassName="dropdown-item">
                    Fizz Execs
                    </NavLink>
                </li>
                <li className="dropdown-item">Testing</li>
              </ul>
          </li>
        </ul>
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

        <Route path="/FizzExecs" exact strict render={
          () => {
            return ( <div>
              <FizzExecs/>
              <Footer/>
            </div>

            );
          }
        }/>

        <Route path="/faq" exact strict render={
          () => {
            return ( <div>
              <FAQ/>
              <Footer />
            </div>

            );
          }
        }/>

        </div>
        </div>
      </ScrollToTop>
      </Router>


    </div>
);
}

}

export default NavBar;
