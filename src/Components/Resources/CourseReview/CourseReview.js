import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import CourseReviewGuide from './Course Review Guide.pdf';


//TODO: Clean up this code cuz I just inspect elemented it from our old website
class CourseReview extends Component {
    render() {
        return (
            <PageTemplate shortTitle="CourseReview" fullTitle="Course Review Guide">
                <h3 style={{margin: "20px 0", fontFamily: "sans-serif"}}>
                    NOTE: This page is out of date and updating the document is currently a work in progress.
                </h3>
                <div>
                    <iframe src={CourseReviewGuide}
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

export default CourseReview;