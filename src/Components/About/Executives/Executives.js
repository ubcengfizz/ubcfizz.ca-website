import React, { Component } from 'react';
import Person from './Person';
import PageTemplate from '../../../Global/PageTemplate';
import "./Executives.css";

import no_image from '../../../Images/current-execs/no-image.png';
import jawad from '../../../Images/current-execs/jawad.jpg';
import madi from '../../../Images/current-execs/madi.jpg';
import josh_himmens from '../../../Images/current-execs/josh_himmens.png';
import josh_lim from '../../../Images/current-execs/josh_lim.png';
import josh_heu from '../../../Images/current-execs/josh_heu.png';
import catherine from '../../../Images/current-execs/catherine.png';
import safiia from '../../../Images/current-execs/safiia.png';
import tumi from '../../../Images/current-execs/tumi.png';
import bram from '../../../Images/current-execs/bram.png';
import alessandra from '../../../Images/current-execs/alessandra.png';
import ari from '../../../Images/current-execs/ari.png';
import conner from '../../../Images/current-execs/conner.png';
import ryan from '../../../Images/current-execs/ryan.png';
import harriet from '../../../Images/current-execs/harriet.png';
import rachel from '../../../Images/current-execs/rachel.png';
import paige from '../../../Images/current-execs/paige.png';
import zavary from '../../../Images/current-execs/zavary.png';
import emiko from '../../../Images/current-execs/emiko.jpg';
import yuvraj from '../../../Images/current-execs/yuvraj.jpg';
import daniel from '../../../Images/current-execs/daniel.jpg';


class Executives extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Executives" fullTitle="Fizz Executives">
                <Person 
                    title="President" 
                    name="Madison McQuiston, Jawad Makki"
                    email="president"
                    description="The Presidents represent the interests of Engineering Physics students to the Physics & Astronomy department, faculty of Applied Science, Engineering Undergraduate Society and alumni. The co-presidents chair executive meetings, oversee activities of the association and head any extra projects put forward by the council."
                    img1={madi}
                    img2={jawad}
                />

                <Person 
                    title="Treasurer" 
                    name="Catherine Blouin, Josh Lim"
                    email="treasurer"
                    description="The Treasurer handles all of the financial activities and transactions. This includes creating and balancing the budget, filing reimbursements, and liaising with the AMS Finance office."
                    img1={catherine}
                    img2={josh_lim}
                />

                <Person 
                    title="VP Academic" 
                    name="Conner Fransoo"
                    email="academic"
                    description="The VP Academic is responsible for organizing events relating to the academics of Engineering Physics students. These can include but not limited to Beef and Pizzas, Graduate School Information Sessions, and Fizz Tutoring Sessions."
                    img1={no_image}
                    img2={conner}
                />

                <Person 
                    title="Social Coordinator"
                    name="Joshua Himmens"
                    email="soco"
                    description="The Social Coordinator ensures that students maintain a healthy social life by organizing and advertising a number of parties throughout the year. This includes but is not limited to: ESC parties, penthouse parties, afterparties for social events."
                    img1={no_image}
                    img2={josh_himmens}
                />

                <Person 
                    title="Student Life Coordinator"
                    name="Bram Banik, Alessandra Ionescu-Zanetti"
                    email="stud.life"
                    description="Organize or ensure the organization of all club non-party events related to the social involvement of Engineering Physics students. This may include but is not limited to: Fizz Beans, Fizz Talks, Foosball tournaments, etc."
                    img1={bram}
                    img2={alessandra}
                />

                <Person 
                    title="Penthouse Manager" 
                    name="Ari Cholakian"
                    email="penthouse"
                    description="The penthouse manager oversees the maintenance and all upgrades of the Engineering Physics
                    student space, known as the Penthouse. Responsibilities of the penthouse manager include keeping the 
                    vending machines and freezer stocked, keeping the foosball table well maintained, ensuring the space 
                    is respected by all its patrons and liaising with building staff."
                    img1={no_image}
                    img2={ari}
                />

                <Person 
                    title="E-Week Representative" 
                    name="Harriet Milligan, Ryan Mahinpey"
                    email="eweek"
                    description="The E-Week representative is responsible for organizing all things pertaining to E-Week. This involves going to EUS meetings in preparation for the week as well as promoting the events and allocating resources to promote a victory for the department."
                    img1={harriet}
                    img2={ryan}
                />

                <Person 
                    title="Sports Representative" 
                    name="Joshua Heuchert"
                    email="sports"
                    description="The Sports manager is responsible for all Fizz sports and intramurals. If you would like to have an intramural team that we don't already have, talk to the sports manager about signing up next term!"
                    img1={no_image}
                    img2={josh_heu}
                />

                <Person 
                    title="EDI Representative" 
                    name="Safiia Ismagilova, Tumi Fabiyi"
                    email="edi"
                    description="Advocates for an inclusive and diverse student environment by promoting equity initiatives, supporting underrepresented groups, and working to create a welcoming and accessible program for all students. This role also includes planning any mentorship events and initiatives for first year Engineering students."
                    img1={safiia}
                    img2={tumi}
                />

                <Person 
                    title="VP Professional Development" 
                    name="Emiko Wijeysundera"
                    email="prof.dev"
                    description="Focuses on career-related initiatives, including organizing resume workshops, networking events, and company tours to support students in their professional growth. This role liaises with industry representatives and alumni to provide valuable career-building opportunities."
                    img1={no_image}
                    img2={emiko}
                /> 

                <Person 
                    title="Social Media Manager" 
                    name="Yuvraj Chenna"
                    email="social.media"
                    description="Handles the Student Council's online presence, including social media accounts and promotional materials. This role involves creating engaging content, managing event announcements, and ensuring students stay informed about council activities."
                    img1={no_image}
                    img2={yuvraj}
                />  

                <Person
                    title="Graduate Representative" 
                    name="Paige Hall, Zavary Koehn"
                    email="grad"
                    description="The grad rep acts as the year rep for the 5th year class, liasing between Fizz Council and the graduating class of Engineering Physics. The grad rep also coordinates additional activities for graduation: grad trip, iron ring ceremony, grad photos, and Slipsticks."
                    img1={paige}
                    img2={zavary}
                />

                <Person 
                    title="Fourth Year Representative" 
                    name="Rachel Miner"
                    email="fourth.year"
                    description="The Fourth Year Rep act as liaisons between the executive team and the students of the Fourth Year Class. They are responsible for informing students about the current activities of the club, selling tickets for pertinent events and helping to organize and execute many of the academic and social events."
                    img1={no_image}
                    img2={rachel}
                />

                <Person 
                    title="Third Year Representative" 
                    name="Ryan Mahinpey"
                    email="third.year"
                    description="The Third Year Rep act as liaisons between the executive team and the students of the Third Year Class. They are responsible for informing students about the current activities of the club, selling tickets for pertinent events and helping to organize and execute many of the academic and social events."
                    img1={no_image}
                    img2={ryan}
                />

                <Person 
                    title="Second Year Representative" 
                    name="Daniel Ma"
                    email="second.year"
                    description="The Second Year Rep act as liaisons between the executive team and the students of the Second Year Class. They are responsible for informing students about the current activities of the club, selling tickets for pertinent events and helping to organize and execute many of the academic and social events."
                    img1={no_image}
                    img2={daniel}
                />
            </PageTemplate>
        );
    }
}

export default Executives;
