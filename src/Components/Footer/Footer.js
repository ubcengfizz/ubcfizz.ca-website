import React, { Component } from 'react';
import logo from '../../Images/fizz-logo.svg';
import './Footer.css';
import twitterlogo from '../../Images/twitter_logo.png';
import facebooklogo from '../../Images/facebook_logo.png';
import ig_logo from '../../Images/instagram-logo.png';



class Footer extends Component {
  render() {
    return (
      <div>

      <footer id="footer">

        <div id="filler"></div>

        <div id="club-location">
          <img alt="fizz logo" id="footer_fizz_logo" src={logo}/>
          <div id="location-details">UBC Engineering Physics Student Association<br/>
            Vancouver Campus<br/>
            2045 East Mall<br/>
            Hebb Building, Room 518
        </div>
      </div>

      <div id="contacts">
        <h4>president@ubcfizz.ca</h4>
        <h4>ubcfizz</h4>
        <img alt="instagram logo" src={ig_logo} width="50px"/>
      </div>

      </footer>
    </div>
    );
  }
}

export default Footer;
