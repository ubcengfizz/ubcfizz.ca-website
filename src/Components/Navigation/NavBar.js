import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/cog.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';

class NavBar extends Component {
    state = { sideDrawerOpen: false }

    drawerToggleClickHandler = () => this.setState( ( props ) => ( { sideDrawerOpen: !props.sideDrawerOpen } ) );

    render() {
        return (
            <div>
                <SideDrawer show={ this.state.sideDrawerOpen }/>
                <nav className="nav-bar">

                    <div>
                        <DrawerToggleButton click={this.drawerToggleClickHandler} />
                    </div>

                    <NavLink to="/" className="menu-link inactive" exact activeClassName="active-logo">
                        <div id="menu-left">
                            <img alt="cog" id="cog" src={logo} />
                            <div id="title">
                                <h2>FIZZ</h2>
                                <h5>The UBC Engineering Physics Student Association</h5>
                            </div>
                        </div>
                    </NavLink>

                    <div className="spacer" />

                    <ul id="menu-list">
                        <li className="menu-list-item">
                            <div className="menu-link">Services</div>
                            <ul className="dropdown">
                                <li>
                                    <NavLink to="/faq" className="dropdown-item" activeClassName="dropdown-item">
                                        FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </li>



                        <li className="menu-list-item">
                            <div className="menu-link">Admin</div>
                            <ul className="dropdown">
                                <li>
                                    <NavLink to="/executives" className="dropdown-item" activeClassName="dropdown-item">
                                        Executives
                                    </NavLink>
                                    <NavLink to="/elections" className="dropdown-item" activeClassName="dropdown-item">
                                        Elections
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>                
        );
    }
}

export default NavBar;
