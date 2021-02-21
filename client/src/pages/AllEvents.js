import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from "../utils/EventStore.js";


function AllEvents() {
    const { eventState, setEventState } = useContext(EventContext);
    console.log(eventState)
    return (
        <div>jhi
            {/* {eventState.map(event => (
                <h1>{event.name}</h1>
            ))} */}
        </div>
    )
}


export default AllEvents;