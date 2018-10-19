import React, { Component } from 'react';
import './FizzExecs.css';



class FizzExecs extends Component {

  componentDidMount() {
    document.title = "UBC Fizz | Executives";
  };

  render() {
    return (
      <div className="container">

        <div className="text">

        <div className="component-header">
          <div className="component-title">Fizz Executives</div>
          <hr id="line"/>
        </div>

        <div className="person">
          <div className="title">Presidents</div>
          <div className="name">Andrew Cote and Justin Kang</div>
          <div className="email">president (at) ubcfizz (dot) com</div>

          <div className="description">The Engineering Physics President represents the interests
            of 250 Engineering Physics students to the Physics & Astronomy department, Faculty of
            Applied Science, Engineering Undergraduate Society, and alumni. The President chairs
            Fizz executive meetings, oversees activities of the association and heads any extra projects
            put forward by Fizz council.
           </div>
        </div>

        <div className="person">
          <div className="title">Vice-Presidents Academic</div>
          <div className="name">Esther Lin and Daniel Schultz</div>
          <div className="email">vpacademic (at) ubcfizz (dot) com</div>

          <div className="description">Vice-Present Academic is responsible for organizing all
            events relating to the academic and professional development of Engineering Physics
            students. These include the Technology & Science Seminar Series, the Graduate School
            Information Night, and the Fizz Tutoring Program for 1st year STEM students.
           </div>
        </div>

        <div className="person">
          <div className="title">Vice-President Events</div>
          <div className="name">Tiffany Quon and Sydney Seraphim</div>
          <div className="email">vpevents (at) ubcfizz (dot) com</div>

          <div className="description">The Vice-President of Events ensures that students maintain a
             healthy social life, by organizing and advertising a number of events throughout the
             year. These include the Welcome Back BBQ, Fizz Talks, Penthouse Parties, Fire & Ice
             Party and Alumni Night, and any other events that they concoct.
           </div>
        </div>


        <div className="person">
          <div className="title">Treasurer</div>
          <div className="name">Jessica Ma</div>
          <div className="email">treasurer (at) ubcfizz (dot) com</div>

          <div className="description">The Treasurer handles all of the financial activities and transactions
             of the Engineering Physics Student Association. This includes giving reimbursements to Fizzers,
              liaising with the AMS Finance office, and acting as one of the two booking representatives for
             the club.
           </div>
        </div>

        <div className="person">
          <div className="title">Graduate Representative</div>
          <div className="name">Ryan Cotsakis</div>
          <div className="email">gradrep (at) ubcfizz (dot) com</div>

          <div className="description">The Graduate Representative acts as a liaison between the Fizz
            executive and the graduating class of students. They are responsible for informing students
            about the current activities of the club and sells tickets for pertinent events. They
            co-ordinate the Graduate photographs and ensure that a composite is produced,
            gather Iron Ring sizes from the graduates, and help organize the UBC APSC Graduation Ceremony.

           </div>
        </div>

        <div className="person">
          <div className="title">4th Year Representative</div>
          <div className="name">Esther Lin</div>
          <div className="email">fourthrep (at) ubcfizz (dot) com</div>

          <div className="description">The 4th Year Representative acts as a liaison between
            the Fizz executive and the 4th years in Eng. Phys. They are responsible for informing
            students about the current activities of the club and sells tickets for pertinent events,
            and helps organize and execute many of the academic and social events.

           </div>
        </div>

        <div className="person">
          <div className="title">3rd Year Representative</div>
          <div className="name">Jeremy Voldeng and Nicolas Navarre</div>
          <div className="email">thirdrep (at) ubcfizz (dot) com</div>

          <div className="description">The 3rd Year Representative acts as a liaison between the Fizz executive
            and the 3rd years in Eng. Phys. They are responsible for informing students about the current activities
            of the club and sell tickets for pertinent events, and helps organize and execute many of the academic and
            social events.
           </div>
        </div>

        <div className="person">
          <div className="title">2nd Year Representative</div>
          <div className="name">Richard Echegaray</div>
          <div className="email">secondrep (at) ubcfizz (dot) com</div>

          <div className="description">The 2nd Year Representative acts as a liaison between the Fizz executive and the
            2nd years in Eng. Phys. They are responsible for informing students about the current activities of the club
            and sell tickets for pertinent events, and helping organize and execute many of the academic and social events.
           </div>
        </div>

        <div className="person">
          <div className="title">IT Manager</div>
          <div className="name">Dominic Shillingford and Chris Wilson</div>
          <div className="email">compadmin (at) ubcfizz (dot) com</div>

          <div className="description">The IT Managers are responsible for maintaining the Penthouse computers,
            wireless access, and printers. They also updates and oversees the ubcfizz.com website and Fizz mailing lists. 
           </div>
        </div>

        <div className="person">
          <div className="title">Board of Studies Representative</div>
          <div className="name">James Park and Robert Drinnan</div>
          <div className="email">bos (at) ubcfizz (dot) com</div>

          <div className="description">The Board of Studies Representatives organise feedback from current EngPhys
            students and advocate for changes to the required Engineering Physics curriculum. Feedback is primarily solicited
            at twice-annual Beef and Pizza events, in addition to mid-term evaluations conducted during class. In
            the first half of the academic year, the Board of Studies reps bring collected feedback to a Board of
            Studies meeting with the Engineering Physics Director and various Engineering department heads to discuss curriculum changes.
           </div>
        </div>

        <div className="person">
          <div className="title">Sports Representative</div>
          <div className="name">Chris Wilson and Maria Sottile</div>
          <div className="email">sports (at) ubcfizz (dot) com</div>

          <div className="description">The Sports Representatives are responsible for communicating UBC REC leagues and event
             registration dates to fizzers through the club mailing list. They facilitate the organization of REC league
             teams from interested members and organize an outdoor excursion for club members, such as white-water rafting,
             paint balling, or ski trips. 
           </div>
        </div>

        <div className="person">
          <div className="title">Penthouse Manager</div>
          <div className="name">Ryan Schmidt and Michael Miller</div>
          <div className="email">penthouse (at) ubcfizz (dot) com</div>

          <div className="description">The Penthouse Manager oversees the maintenance and all upgrades of the Engineering Physics
            student room, known as the Penthouse. Vending machine items, T-shirt and hoodie sales, and keycard access to the student
            spaces fall within their responsibility.
           </div>
        </div>

      </div>

      </div>
    );
  }
}

export default FizzExecs;
