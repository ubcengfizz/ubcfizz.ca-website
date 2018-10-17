import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './About.css';
import logo from '../../Images/fizz_logo.png';
import twitterlogo from '../../Images/twitter_logo.png';
import facebooklogo from '../../Images/facebook_logo.png';
import instagramlogo from '../../Images/instagram_logo.png';
import Paper from '@material-ui/core/Paper';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

var data = require('./Announcements.json');


class About extends Component {



render() {

  const announcementData = data;

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
          tutoring, clothing, sports, and a comprehensive course directory. Visit us
        at our Life Building student space in room 2116!</p></div>
      </div>

    <img alt="fizz logo" id="fizz_logo" src={logo}/>

    </div>

    <div id="announcements">
      <div id="announcement-container">
      <h1 id="announcement-header">Announcements</h1>

      <div id="announcement-body">
      <StackGrid
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            columnWidth={300}>

            {announcementData.map(announcement =>
               <Paper className="announcement-card">
                 <h3>{announcement.Title}</h3>
                 <p className="announcement-description">
                   {announcement.Description}
                 </p>
               </Paper>)}

      </StackGrid>
    </div>
  </div>
</div>




</div>
);
}

}

export default About;
