import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './About.css';
import logo from '../../Images/fizz_logo.png';
import twitterlogo from '../../Images/twitter_logo.png';
import facebooklogo from '../../Images/facebook_logo.png';


var data = require('./Announcements.json');

const MenuItem = ({ title, description, selected }) => {
  return (
    <div className="announcement-item">
      <h3 className="announcement-title">{title}</h3>
      <div className="announcement-description">{description}</div>
    </div>
  );
};

export const Menu = (data) => data.map(announcement => {
  const { Title } = announcement;
  const { Description } = announcement;

  return (
    <MenuItem
      title={Title}
      description={Description}
      key={Title}
    />
  );
});

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>>', className: 'arrow-next' });


class About extends Component {

  state = {
  selected: 0
};

onSelect = key => {
  this.setState({ selected: key });
}


render() {
  const { selected } = this.state;
  // Create menu from items
  const menu = Menu(data, selected);


  return (
<div id="container">
    <div id="landing">

      <div id="description-container">

        <h2 id="description-head">Get To Know Us</h2>
        <div id="description-body"><p>We are a group of students who represent the interests of
          those in the department of Engineering Physics. We serve to build
          a strong academic and social community through various events, including
          lecture series, chess tournaments, beer Gardens, LAN parties, poker nights,
          and much more. We also offer services such as a mentoring program, first-year
          tutoring, clothing, sports, and a comprehensive course directory. </p></div>


      </div>

    <img alt="fizz logo" id="fizz_logo" src={logo}/>

    <div id="social_media">
      <img alt="twitter logo" id="twitter_logo" src={twitterlogo}/>
      <img alt="facebook logo" id="facebook_logo" src={facebooklogo}/>
    </div>

    </div>

    <div id="announcements">

      <div id="announcement-container">

        <h1 id="announcement-header">Announcements</h1>

      <div className="announcement-menu">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    </div>
  </div>




</div>
);
}

}

export default About;
