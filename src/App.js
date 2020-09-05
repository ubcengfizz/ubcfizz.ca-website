// React basics
import React, { Component } from 'react';

// React libraries and components 
import { Route, Switch } from 'react-router';

// Website components
import NavBar from "./Components/Navigation/NavBar"
import Footer from "./Components/Footer/Footer"
import Executives from "./Components/Admin/Executives/Executives"
import FAQ from "./Components/Services/FAQ/FAQ"
import CourseDir from "./Components/Academic/CourseDir/CourseDir"
import About from "./Components/About/About"
import ScrollToTop from './Components/Navigation/ScrollToTop'
import Survive from './Components/Academic/Survive/Survive';
import Podcast from './Components/Culture/Podcast/Podcast';
import Film from './Components/Culture/FilmFeust/FilmFeust';

// TODO: fix the routing for podcast, survive, film, and add routing for missing pages
class App extends Component {

    render() {
        return (
            <ScrollToTop>
                {/* Links to Navigation Bar */}
                <Route component={NavBar}/>
                <div style={ { paddingTop: "10vh" } }>
                    <Switch>
                        <Route path="/executives" component={Executives}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route path="/CourseDir" component={CourseDir}/>
                        <Route path="/Podcast" Component={Podcast}/>
                        <Route path="/FilmFeust" Component={Film}/>
                        {/* <Route path="/Survive" component={Survive}/> */}
                        <Route component={About}/>
                    </Switch>
                </div>

                {/* Links to Footer*/}
                <Route component={Footer}/>
            </ScrollToTop>
        ); 
    }
}

export default App;
