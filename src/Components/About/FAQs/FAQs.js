import React, { Component } from 'react';
import './FAQs.css';
import PageTemplate from '../../../Global/PageTemplate';

class FAQ extends Component {
    render() {
        return (
            <PageTemplate shortTitle="FAQ" fullTitle="Frequently Asked Questions">
                <div className="qa">
                    <div className="title">What is Engineering Physics?</div>
                    <div className="content">
                        Engineering Physics, also known as Fizz, is a five year (or more) interdisciplinary program at UBC within the Faculty of Applied Science. In Engineering Physics, students take many higher level math and physics courses as well as courses from many branches of engineering, especially Mechanical, Electrical, and Computer Engineering. Continuing with the interdisciplinary theme, Engineering Physics students are required to take technical electives throughout their degree. These technical electives may be chosen from a broad range of subjects including abstract mathematics, business and entrepreneurship, applied physics, environmental science and much more.
                    </div>
                </div>

                <div className="qa">
                    <div className="title">What is the Engineering Physics Student Association?</div>
                    <div className="content">
                        The Engineering Physics Student Association, or Fizz Council, is an organization which represents the interests of all Engineering Physics students to the faculty, the industry, and to the Engineering Undergraduate Society (EUS). Led by a group of dedicated students, we serve to build a strong academic and social community through various events such as Fizz Talks and Networking Events, among many others. Additionally, we offer multiple services such as tutoring, merchandise, sports, and a comprehensive course directory. Browse this website to learn more about us!
                    </div>
                </div>

                <div className="qa">
                    <div className="title">How can I join the Engineering Physics Student Association?</div>
                    <div className="content">
                        The Engineering Physics Student Association Executive Council is comprised of elected positions. Elections for all executive positions on Council are run in March of each year. Keep an eye out on the discord for information on how to nominate yourself for a position on Council!
                    </div>
                </div>

                <div className="qa">
                    <div className="title">Why should I be in Fizz?</div>
                    <div className="content">
                        Fizz gives you the hands-on skills you need to work in an engineering career, while providing a strong foundation in physics to give you a deep understanding of the fundamentals of a project. Throughout the degree, you take project courses such as ENPH 253 (the robot course), where you spend a summer building robots in teams for a friendly competition against your peers at the end of the summer. You also get two years of capstone, where you get to work with an industry sponsor to see how projects can apply to the real world. You take all of these fundamental courses while being part of one of the most supportive and driven student communities at UBC. 
                    </div>
                </div>

                <div className="qa">
                    <div className="title">What is E-Week and why does Fizz always win?</div>
                    <div className="content">
                        E-Week is an annual competition between the Engineering departments at UBC in which each department puts forward teams for a variety of events throughout the third week of January. Fizz has a very strong culture and community, which shines brightest during E-Week. We have people with all sorts of skills and interests in Fizz, which when combined with our relentless pursuit of glory, wins us E-Week, strengthening our community along the way.
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

export default FAQ;
