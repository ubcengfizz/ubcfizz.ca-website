import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import './Tutoring.css';


class Tutoring extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Tutoring" fullTitle="Fizz Tutoring">
                <div class="tutor-blurb">
                    <p>
                        We will be holding review workshops for MATH 217, MATH 255, and ELEC 204. At our review sessions, we will have practice problems and trained tutors to help you out whenever you get stuck. We will post the worksheets before the sessions, and the solutions right after!
                    </p>
                </div>
            </PageTemplate>
        );
    }
}

export default Tutoring;