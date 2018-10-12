import React, { Component } from 'react';
import logo from '../../Images/fizz_logo.png';
import './Footer.css';



class Footer extends Component {
  render() {
    return (
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
        <p>Andrew Cote/Justin Kang: president@ubcfizz.com</p>
        </div>

        <div id="one-person">
        <h4>VP Academic</h4>
        <p>Esther Lin/Daniel Schults: vpacademic@ubcfizz.com</p>
        </div>

        <div id="one-person">
        <h4>VP Events</h4>
        <p>Tiffancy Quon/Sydney Seraphim: vpevents@ubcfizz.com</p>
        </div>

      </div>

      <div id="copyright-filler"></div>

      <p id="copyrights">&copy; 2018 UBC Engineering Physics Student Association</p>
      </footer>
    );
  }
}

export default Footer;
