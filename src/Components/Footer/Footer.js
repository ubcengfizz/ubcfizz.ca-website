import React, { Component } from 'react';
import logo from '../../Images/fizz_logo.png';
import './Footer.css';
import twitterlogo from '../../Images/twitter_logo.png';
import facebooklogo from '../../Images/facebook_logo.png';
import instagramlogo from '../../Images/instagram_logo.png';



class Footer extends Component {
  render() {
    return (
      <div>

        <div id="socials">

          <h3>Connect with Us</h3>

          <ul>
          <li>
            <a href="https://twitter.com/ubcengphys?lang=en">
          <img alt="twitter logo" id="twitter_logo" src={twitterlogo}/>
        </a>
        </li>
        <li>
          <a href="https://www.facebook.com/EngPhysProjectLab/">
          <img alt="facebook logo" id="facebook_logo" src={facebooklogo}/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ubcengineeringphysics/">
        <img alt="instagram logo" id="instagram_logo" src={instagramlogo}/>
       </a>
     </li>

   </ul>

      </div>

      <footer id="footer">

        <div id="filler"></div>

        <div id="club-location">
          <img alt="fizz logo" id="footer_fizz_logo" src={logo}/>
          <div id="location-details">UBC Engineering Physics<br/>
      Vancouver Campus<br/>
      6224 Agricultural Road<br/>
      Hennings Building, Room 333A<br/>
      Student Space: LIFE 2116<br/>

        </div>
      </div>

      <div id="contacts">
        <div id="one-person">
        <h4>President</h4>
        <p>Andrew Cote / Justin Kang: president@ubcfizz.com</p>
        </div>

        <div id="one-person">
        <h4>VP Academic</h4>
        <p>Esther Lin / Daniel Schultz: vpacademic@ubcfizz.com</p>
        </div>

        <div id="one-person">
        <h4>VP Events</h4>
        <p>Tiffany Quon / Sydney Seraphim: vpevents@ubcfizz.com</p>
        </div>

      </div>



      <div id="copyright-filler"></div>

      <p id="copyrights">&copy; 2018 UBC Engineering Physics Student Association</p>
      </footer>
    </div>
    );
  }
}

export default Footer;
