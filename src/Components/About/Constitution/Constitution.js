import React, { Component } from 'react';
//import './FAQ.css';
import PageTemplate from '../../../Global/PageTemplate';
import constitution from './The UBC Engineering Physics Student Association Constitution.pdf';


class Constitution extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Constitution" fullTitle="Constitution">
                <div>
                    <iframe src={constitution}
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

export default Constitution;
