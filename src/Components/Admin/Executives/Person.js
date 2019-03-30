import React, { Component } from 'react';
import './Executives.css'

class Person extends Component {    
    constructor( props ) {
        super( props );
    }

    
    render() {
        return ( 
        <div className="person">
            <div className="title">{this.props.title}</div>
            <div className="name">{this.props.name}</div>
            <div className="email">{this.props.email + " (at) ubcfizz (dot) com"}</div>

            <div className="description">
                {this.props.description}
            </div>
        </div> )
    }
}

export default Person;