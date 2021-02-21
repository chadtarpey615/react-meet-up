import React, { useState, useContext, useEffect } from 'react';
import API from "../utils/API.js";
import { UserContext } from "../utils/UserStore.js";
import { EventContext } from "../utils/EventStore.js";
import TextField from '@material-ui/core/TextField';
import Buttons from '@material-ui/core/Button';

function Events() {
    // const [newEvent, setNewEvent] = useState({});
    const { eventState, setEventState } = useContext(EventContext);
    const { userState, setUserState } = useContext(UserContext);

    useEffect(() => console.log(userState))

    const handleClick = (event) => {
        event.preventDefault()
        const { name, distance, date } = eventState;
        let eventData = { name: name, distance: distance, date: date }
        API.saveEvent(userState.email, eventData)
            // console.log(userState.email)

            .then((res) => {
                console.log(res.config.data)
                setEventState(res.config.data)
            })
            .catch((err) => console.log(err))
        // setModal(false);
        console.log(userState.email)

        console.log("hit")
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEventState({ ...eventState, [name]: value.trim() })
        console.log(e.target.value)
    }

    return (
        <>
            <h1>Add Event</h1>
            <form>
                <TextField label="Event Name" name="name" type="text" onChange={handleInputChange} />
                <TextField label="distance" name="distance" type="text" onChange={handleInputChange} />
                <TextField label="date" name="date" type="text" onChange={handleInputChange} />
                <Buttons variant="contained" onClick={handleClick} type="submit">Add</Buttons>
            </form>
        </>
    )
}

export default Events;