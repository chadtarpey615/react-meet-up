import React, { useState } from "react";

const initialEventState = {
    name: "Race",
    distance: "10",
    date: "02/20/21"
}

export const EventContext = React.createContext();

const EventStore = ({ children }) => {
    const [eventState, setEventState] = useState(initialEventState);

    return (
        <EventContext.Provider value={{ eventState, setEventState }}>
            {children}
        </EventContext.Provider>
    );
}

export default EventStore;

