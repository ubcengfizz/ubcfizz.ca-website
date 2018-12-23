// React basics
import React, { Component } from 'react';

// React libraries and components 
import { Route, Switch } from 'react-router';

// Website components
import NavBar from "./Components/Navigation/NavBar"
import Footer from "./Components/Footer/Footer"
import FizzExecs from "./Components/Admin/FizzExecs/FizzExecs"
import FAQ from "./Components/Services/FAQ/FAQ"
import About from "./Components/About/About"
import ScrollToTop from './Components/Navigation/ScrollToTop'

class App extends Component {

    render() {
        return (
            <ScrollToTop>
                <Route component={NavBar}/>

                <div style={ { paddingTop: "10vh" } }>
                    <Switch>
                        <Route path="/executives" component={FizzExecs}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route component={About}/>
                    </Switch>
                </div>

                <Route component={Footer}/>
            </ScrollToTop>
        );
    }
}

export default App;
