import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/cog.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';

//TODO: missing routes for some pages
class NavBar extends Component {
    state = { sideDrawerOpen: false }

    drawerToggleClickHandler = () => this.setState((props) => ({ sideDrawerOpen: !props.sideDrawerOpen }));

    render() {
        return (
            <div>
                <SideDrawer show={this.state.sideDrawerOpen} />
                <div className="nav-bar-outer">
                    <nav className="nav-bar">

                        <div>
                            <DrawerToggleButton click={this.drawerToggleClickHandler} />
                        </div>

                        <NavLink to="/" className="menu-link inactive" exact activeClassName="active-logo">
                            <div id="menu-left">
                                <img alt="cog" id="cog" src={logo} />
                                <div id="title">
                                    <h2>UBC FIZZ</h2>
                                    <h5>The UBC Engineering Physics Student Association</h5>
                                </div>
                            </div>
                        </NavLink>

                        <div className="spacer" />

                        <ul id="menu-list">
                            <li className="menu-list-item">
                                <NavLink to="" className="menu-link">
                                    About
                                </NavLink>
                                <ul className="dropdown">
                                    <li>
                                        <NavLink to="/Executives" className="dropdown-item" activeClassName="dropdown-item">
                                            Executives
                                        </NavLink>
                                        
                                    </li>
                                    <li>
                                        <NavLink to="/Constitution" className="dropdown-item" activeClassName="dropdown-item">
                                            Constitution
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/FAQs" className="dropdown-item" activeClassName="dropdown-item">
                                            FAQs
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-list-item">
                                <NavLink to="/calendar" className="menu-link">
                                    Calendar
                                </NavLink>
                            </li>

                            {/* <li className="menu-list-item">
                                <div className="menu-link">
                                    Resources
                                </div>
                                <ul className="dropdown">
                                    
                                    <li>
                                    <NavLink to="/Tutoring" className="dropdown-item" activeClassName="dropdown-item">
                                        Tutoring
                                    </NavLink>
                                    </li>

                                    <li>
                                    <NavLink to="/Course" className="dropdown-item" activeClassName="dropdown-item">
                                        Course Review Guide
                                    </NavLink>
                                    </li>

                                    <li>
                                    <NavLink to="/Survive" className="dropdown-item" activeClassName="dropdown-item">
                                        Fizz Survival Guide
                                    </NavLink>
                                    </li>
                                </ul>
                            </li> */}

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;
