import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar"
import Calendar from "../../pages/Calendar";
import SignUp from "../../pages/Signup"
import Login from "../../pages/Login"
import Event from "../../pages/Events"
import AllEvent from "../../pages/AllEvents"
import UserStore from "../../utils/UserStore";
import EventStore from "../../utils/EventStore";

function Container(props) {
    return (
        <div className="App">
            <UserStore>
                <EventStore>
                    <Router>
                        <Navbar />

                        <Switch>
                            <Route exact path="/">
                                <SignUp />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/calendar/:email">
                                <Calendar />
                            </Route>
                            <Route exact path="/calendar/:email/allevents">
                                <AllEvent />
                            </Route>
                            <Route exact path="/calendar/:email/:eventName">
                                <Event />
                            </Route>

                        </Switch>
                    </Router>
                </EventStore>
            </UserStore>
        </div>
    )
}

export default Container;