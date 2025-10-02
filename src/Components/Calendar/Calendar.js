import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import {css} from "@emotion/react";
import PageTemplate from '../../Global/PageTemplate';


const API_KEY = "AIzaSyAFAhAEkD87d8rPBg8ZisoV95tt3O5vs7c";
let calendars = [{
    calendarId: "c_7dfafbc01a694a5661812d8705c45725685c38816e841a26b79f45c68f59d29b@group.calendar.google.com",
    color: "#B241D1",
}];

let styles = {
  calendar: {
    borderWidth: "3px",
    width: "60vw",
    margin: "2% auto",
    fontFamily: "sans-serif"
  },

  today: css`
    color: red;
    border: 2px solid red;
  `,
};

class GoogleCalendar extends React.Component {
    render() {
        return (
            <PageTemplate shortTitle="Calendar" fullTitle="Events Calendar">
                <div>
                    <Calendar
                        apiKey={API_KEY}
                        calendars={calendars}
                        styles={styles}
                        language="EN"
                    />
                </div>
            </PageTemplate>
        );
    }
}

export default GoogleCalendar