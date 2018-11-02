import React, { Component } from 'react';
import './About.css';
import logo from '../../Images/fizz-logo.svg';
import Paper from '@material-ui/core/Paper';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

const announcements = require( './Announcements.json' );

class About extends Component {

    componentDidMount() {
        document.title = "UBC Fizz | Home";
    };

    render() {
        return (
            <div id="container">
                <div id="landing">
                    <div id="description-container">
                        <h2 id="description-head">Get To Know Us</h2>
                        <div id="description-body">
                            <p>This page is administered by the Engineering Physics Student Association or 'Fizz' for short. Fizz serves the interests of Engineering Physics students by organizing academic, social, and professional development events throughout the year in addition to offering tutoring services to first year engineering students at UBC. We are headquartered out room 2116 of the UBC Life Building and the Engineering Physics Project lab in the basement of Hennings. Come by either of our spaces or connect with us via email to learn more about our program and what we do.</p>
                        </div>
                    </div>

                    <img alt="fizz logo" id="fizz_logo" src={logo} />
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

                                { announcements.map( parseAnnouncement ) }

                            </StackGrid>
                        </div>
                    </div>
                </div>




            </div>
        );
    }

}

export default About;

// Some helper functions
function parseAnnouncement( data ) {
    return  <Paper className="announcement-card" key={ data.title }>
                <h3>{data.title}</h3>
                <p className="announcement-description" dangerouslySetInnerHTML={ { __html: data.description}}></p>
            </Paper>;
}
