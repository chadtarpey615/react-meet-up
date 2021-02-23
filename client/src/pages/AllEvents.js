import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from "../utils/EventStore.js";
import API from "../utils/API";


function AllEvents() {
    const { eventState, setEventState } = useContext(EventContext);
    // console.log(eventState[0].date)
    useEffect(() => {
        loadEvents();
    }, [])

    const loadEvents = () => {
        API.findAllEvents()
            .then(res => {
                setEventState(res.data)
                console.log("hit first");
                console.log(res)
            })
            .catch((err) => console.log(err))
    };
    return (
        <div>jhi
            
            {eventState.map(event => (
                <div className="all-events">
                <h1>{event.name}</h1>
                <h2>{event.distance}</h2>
                <h4>{event.date}</h4>
                </div>
            ))}
        </div>
    )
}


export default AllEvents;