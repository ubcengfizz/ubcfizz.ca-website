import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import "./Podcast.css"
import '../../../Global/style2.css';

// TODO: Fix spotify embed and add actual intro
class Podcast extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Podcast" fullTitle="Stutter Hour!">
            <div className="cd">
                <div className="title">
                    Stutter Hour! is the official Fizz podcast 
                </div>
                <div className="content">
                    It is currently hosted by Nathan Maguire and Thomas Deckers, and edited by David Wang. 

                    You can contact them at: podcast (at) ubcfizz (dot) com              
                </div>
                <h2>Available on:</h2>
                {/* <iframe src="https://open.spotify.com/embed-podcast/show/2IQqd8ek1Zbs4MYIAVSYW3" 
                width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                <a className='btn btn-light action-button' href="https://podcasts.apple.com/us/podcast/stutter-hour/id1455684225" target="_blank" >Apple Podcast</a>
                <a className='btn btn-light action-button' href="https://open.spotify.com/show/2IQqd8ek1Zbs4MYIAVSYW3" target="_blank" >Spotify</a>            
                <a className='btn btn-light action-button' href="https://www.listennotes.com/podcasts/stutter-hour-eng-phys-9-SIRTpEovJ" target="_blank" >Listen Notes</a>            

            </div>
        </PageTemplate>
        );
    }
}

export default Podcast;
