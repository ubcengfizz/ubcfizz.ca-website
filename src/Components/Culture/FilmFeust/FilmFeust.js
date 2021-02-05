import React, { Component } from 'react';
//import ReactPlayer from "react-player"
import PageTemplate from '../../../Global/PageTemplate';
import "./FilmFeust.css"
import '../../../Global/style2.css';

// TODO: Make a YT Video Component by following this: https://stackoverflow.com/questions/52324664/how-to-use-iframe-in-react-js/52325099
// Or by following this: https://coderrocketfuel.com/article/embed-a-youtube-video-in-a-react-webpage
class FilmFeust extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Film" fullTitle="FilmFeust">
                <div className="cd">
                    <div className="title">FilmfEUSt: an annual student film E-week event</div>
                    <div className="content">
                        What is FilmfEUSt you may ask? Well every year, UBC engineering students take part in 
                        E-Week: a week where different engineering departments compete against each other in various events.
                        One of those events is filmfEUSt! Fizz has won E-week 3 years in a row! 
                        And we've placed 2nd and 1st in filmfEUSt in the past 2 years respectively
                    </div>
                    <a className='btn btn-light action-button' href="https://www.youtube.com/playlist?list=PLFGt58bRG-WROI5Sj6zZ2NiOI6Q5wWSMV" target="_blank" >Check out our past videos</a>
                </div>

            </PageTemplate>
        //     <PageTemplate shortTitle="Films" fullTitle="FilmFeust">
        //     <div className="cd">
        //         <div className="title">Something, something we won E-week hahaha</div>
        //         <iframe width="560" height="315" src="https://www.youtube.com/embed/Cug58ZMBCks" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //     </div>
        // </PageTemplate>
        );
    }
}

export default FilmFeust;
