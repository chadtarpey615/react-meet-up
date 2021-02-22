import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from "../utils/EventStore.js";
import API from "../utils/API";


function AllEvents() {
    const { eventState, setEventState } = useContext(EventContext);
    // console.log(eventState)
    useEffect(() => {
        loadEvents();
    }, [setEventState])

    const loadEvents = () => {
        API.findAllEvents()
            .then(res => {
                setEventState(res.data)
                console.log(res)
            })
    };
    return (
        <div>jhi
            { eventState.name}
            {eventState.date}
            {/* {eventState.map(event => (
                <h1>{event.name}</h1>
            ))} */}
        </div>
    )
}


export default AllEvents;