import React, { Component } from 'react';
import './Executives.css'

class Person extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="div-table">
                
                <div className="div-table-col">
                    <img src={this.props.img2} className='photo'></img>
                    <img src={this.props.img1} className='photo'></img>
                </div>
                
                <div className="div-table-col">
                    <div className="person">
                        <div className="title">{this.props.title}</div>
                        <div className="name">{this.props.name}</div>
                        <a href={"mailto:"+this.props.email +"@ubcfizz.ca"} 
                            className="email">
                            {this.props.email + "@ubcfizz.ca"}</a>

                        <div className="description">
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Person;