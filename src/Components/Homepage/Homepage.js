import React, { Component } from 'react';
import './Homepage.css';
import '../../Global/style.css';
import logo from '../../Images/fizz-logo.svg';
import banner from '../../Images/background2.png';

class About extends Component {

    componentDidMount() {
        document.title = "UBC Fizz | Home";
    };

    render() {
        return (
            <div id="container">
                <div className="content-center">
                    <div id="landing">
                        <img src={banner} id="landing_banner"/>
                        <div id="description-container">
                            <h2 id="description-head">Get To Know Us</h2>
                            <div id="description-body">
                                <p>
                                This page is administered by the Engineering Physics Student Association or 'Fizz Council' for short. Fizz Council serves the interests of Engineering Physics students by organizing academic, social, and professional development events throughout the year. We are headquartered out of the Hebb building and the Engineering Physics Project Lab in the basement of the Hennings Building. Come by either of our spaces or connect with us via email to learn more about our program and what we do!
                                </p>
                            </div>
                        </div>

                        <img alt="fizz logo" id="fizz_logo" src={logo}/>
                    </div>

                    <div id="announcements">
                        <div id="announcement-container">
                            <h1 id="announcement-header">Recent Posts</h1>
                            <behold-widget feed-id="3HqQBwDTLumgMfpVoPO3"></behold-widget>
                            <script>
                                {
                                (() => {
                                    const d=document,s=d.createElement("script");s.type="module";
                                    s.src="https://w.behold.so/widget.js";d.head.append(s);
                                })()
                                }
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default About;
