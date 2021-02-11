import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from "../utils/UserStore";
import 'react-calendar/dist/Calendar.css';
import "../components/calendar.css"

function MainCalendar() {
    const [value, onChange] = useState(new Date());
    const { userState, setUserState } = useContext(UserContext);




    return (
        <div>
            <Calendar
                className="calendar"
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default MainCalendar;