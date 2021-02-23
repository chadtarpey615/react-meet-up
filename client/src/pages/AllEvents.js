import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from "../utils/EventStore.js";
import API from "../utils/API";
import { Container, Col, Row } from "reactstrap";



function AllEvents() {
    const { eventState, setEventState } = useContext(EventContext);
    //  console.log(eventState[0].date)
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
        <Container>
            <h1 className="title"> All events page!!</h1>
            <Row>
                {eventState.map(event => (
                    <Col className="col-md-6 col-10">
                        <div className="all-events">
                            <h1>Title: {event.name}</h1>
                            <h2>Miles: {event.distance}</h2>
                            <h4>Date: {event.date}</h4>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default AllEvents;