import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calendar.css"

function MainCalendar() {
    const [value, onChange] = useState(new Date());



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