import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from "../utils/EventStore.js";
import { UserContext } from "../utils/UserStore";
import API from "../utils/API";
import { Container, Col, Row } from "reactstrap";
import { FaRunning } from "react-icons/fa";
import "../components/events.css";



function AllEvents() {
    const { eventState, setEventState } = useContext(EventContext);
    const { userState, setUserState } = useContext(UserContext);;
    //  console.log(eventState[0].date)
    useEffect(() => {
        loadEvents();
        console.log(eventState)

    }, [EventContext])

    const loadEvents = async () => {

        try {
            await API.findAllEvents()
                .then(res => {
                    setEventState(res.data)
                    console.log("hit first");
                    // console.log(res)
                })
        }
        catch (error) {
            console.log(error)
        }

    };
    if (eventState.length)
        return (
            <>
                <h1 className="title"> All events page!! {userState.last_name.toUpperCase()}</h1>

                <div className="section-center section">

                    {
                        eventState.map(event => {
                            const { id, name, distance, date } = event;
                            return (
                                <article className="menu-item" key={id}>
                                    <FaRunning className="photo" />
                                    <div className="item-info">
                                        <header>
                                            <h4>Title: {name}</h4>
                                            <h4>Miles: {distance}</h4>
                                        </header>
                                        <h4>Date: {date}</h4>
                                        <button className="event-btn" onClick={() => alert("gotcha")}>look</button>
                                    </div>
                                </article>
                            )

                        })
                    }
                </div>
            </>




        )
    return <h1>Loading events still...</h1>
}


export default AllEvents;