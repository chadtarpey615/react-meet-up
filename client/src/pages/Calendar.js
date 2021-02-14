import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from "../utils/UserStore";
import Form from "../components/Form"
import 'react-calendar/dist/Calendar.css';
import "../components/calendar.css"

function MainCalendar() {
    const [value, onChange] = useState(new Date());
    const { userState, setUserState } = useContext(UserContext);


    const handleClick = (event) => {
        return <Form />
    }


    return (
        <div>
            <h1>Click the day you want to add a event </h1>
            <Calendar
                className="calendar"
                onChange={onChange}
                value={value}
                onClickDay={() => <Form />}
            />

        </div>
    );
}

export default MainCalendar;