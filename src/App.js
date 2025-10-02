// React basics
import React, { Component } from 'react';

// React libraries and components 
import { Route, Switch } from 'react-router';

// Website components
import ScrollToTop from './Components/Navigation/ScrollToTop'
import NavBar from "./Components/Navigation/NavBar"
import Footer from "./Components/Footer/Footer"
import Homepage from "./Components/Homepage/Homepage"
import Executives from "./Components/About/Executives/Executives"
import Constitution from './Components/About/Constitution/Constitution'
import FAQs from "./Components/About/FAQs/FAQs"
import Calendar from "./Components/Calendar/Calendar"
import Tutoring from './Components/Resources/Tutoring/Tutoring'
import CourseReview from './Components/Resources/CourseReview/CourseReview'
import Survive from './Components/Resources/Survive/Survive'

// TODO: fix the routing for podcast, survive, film, and add routing for missing pages
class App extends Component {

    render() {
        return (
            <ScrollToTop>
                {/* Links to Navigation Bar */}
                <Route component={NavBar}/>
                <div style={ { paddingTop: "10vh" } }>
                    <Switch>
                        <Route path="/Executives" component={Executives}/>
                        <Route path="/Constitution" component={Constitution}/>
                        <Route path="/FAQs" component={FAQs}/>
                        <Route path="/Calendar" component={Calendar}/>
                        <Route path="/Tutoring" component={Tutoring}/>
                        <Route path="/Course" component={CourseReview}/>
                        <Route path="/Survive" component={Survive}/> 
                        <Route component={Homepage}/>
                    </Switch>
                </div>

                {/* Links to Footer*/}
                <Route component={Footer}/>
            </ScrollToTop>
        ); 
    }
}

export default App;
