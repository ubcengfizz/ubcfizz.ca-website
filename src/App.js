import React, { Component } from 'react';
import NavBar from './Components/Navigation/NavBar';
import logo from './Images/cog.png';



class App extends Component {
  
  render() {
    return (
      <div className="app-container" style={{height: '100%'}}>
        <NavBar logo={logo}/>
      </div>
    );
  }
}

export default App;
