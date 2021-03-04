import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from "../utils/EventStore.js";
import { UserContext } from "../utils/UserStore";
import API from "../utils/API";
import { Container, Col, Row } from "reactstrap";



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
    return (
        <Container>
            <h1 className="title"> All events page!! {userState.last_name.toUpperCase()}</h1>
            <Row>
                {
                    // eventState.map(event => (
                    //     <Col className="col-md-6 col-10">
                    //         <div className="all-events" >
                    //             <h1>Title: {event.name}</h1>
                    //             <h2>Miles: {event.distance}</h2>
                    //             <h4>Date: {event.date}</h4>
                    //             <button onClick={() => alert("gotcha")}>look</button>
                    //         </div>
                    //     </Col>
                    // ))
                }
            </Row >
        </Container >
    )
}


export default AllEvents;