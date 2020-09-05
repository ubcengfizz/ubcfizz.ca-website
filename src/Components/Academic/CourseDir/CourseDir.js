import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import "./CourseDir.css"

// TODO: add better description and actually fix it
class CourseDir extends Component {
    render() {
        return (
            <PageTemplate shortTitle="CourseDir" fullTitle="Course Directory">
                <div className="cd">
                    <div className="title">Welcome to the FIZZ Course Directory!</div>
                    <div className="content">
                        The objective of this directory is to provide an "unofficial" source of information for almost every course that Fizzers will take during their undergraduate degree.
                        The formatting be kinda wack rn will update l8tr kiddos.
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

export default CourseDir;
