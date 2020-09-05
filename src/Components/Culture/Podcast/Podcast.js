import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import "./Podcast.css"

// TODO: Fix spotify embed and add actual intro
class Podcast extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Podcast" fullTitle="Stutter Hour!">
            <div className="cd">
                <div className="title">Stutter Hour! is the official Fizz podcast run by Nathan Maguire and Thomas Deckers.
                Something something introductions here lol
                </div>
                {/* <iframe src="https://open.spotify.com/embed-podcast/show/2IQqd8ek1Zbs4MYIAVSYW3" 
                width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            </div>
        </PageTemplate>
        );
    }
}

export default Podcast;
