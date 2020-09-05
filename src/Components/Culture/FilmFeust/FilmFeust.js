import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import "./FilmFeust.css"

// TODO: Make a YT Video Component by following this: https://stackoverflow.com/questions/52324664/how-to-use-iframe-in-react-js/52325099
class FilmFeust extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Film" fullTitle="FilmFeust">
                <div className="cd">
                    <div className="title">Welcome to the FIZZ Course Directory!</div>
                    <div className="content">
                        The objective of this directory is to provide an "unofficial" source of information for almost every course that Fizzers will take during their undergraduate degree.
                        The formatting be kinda wack rn will update l8tr kiddos.
                    </div>
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
