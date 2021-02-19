import React, { useState } from "react";

export const EventContext = React.createContext();

const EventStore = ({ children }) => {
    const [eventState, setEventState] = useState();

    return (
        <EventContext.Provider value={{ eventState, setEventState }}>
            {children}
        </EventContext.Provider>
    )
}

export default EventStore;