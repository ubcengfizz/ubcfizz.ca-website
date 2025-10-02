import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import SurvivalGuide from './Fizz Survival Guide.pdf';


//TODO: Clean up this code cuz I just inspect elemented it from our old website
class Survive extends Component {
    render() {
        return (
            <PageTemplate shortTitle="SurviveGuide" fullTitle="Fizz Survival Guide">
                <h3 style={{margin: "20px 0", fontFamily: "sans-serif"}}>
                    NOTE: This page is out of date and updating the document is currently a work in progress.
                </h3>
                <div>
                    <iframe src={SurvivalGuide}
                        width="100%"
                        height="750px"
                        margin="auto"
                        >
                    </iframe>
                </div>
            </PageTemplate>
        );
    }
}

export default Survive;
