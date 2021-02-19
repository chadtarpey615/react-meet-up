import React, { useState, useContext, useEffect } from 'react';
import API from "../utils/API.js";
import Calendar from 'react-calendar';
import TextField from '@material-ui/core/TextField';
import Buttons from '@material-ui/core/Button';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UserContext } from "../utils/UserStore.js";
import Form from "../components/Form"
import 'react-calendar/dist/Calendar.css';
import "../components/calendar.css"

function MainCalendar(props) {
    const [value, onChange] = useState(new Date());
    const [newEvent, setNewEvent] = useState({});
    const [eventState, setEventState] = useState({});
    const { userState, setUserState } = useContext(UserContext);
    const [modal, setModal] = useState(false);
    console.log(newEvent.name)
    const {
        buttonLabel,
        className
    } = props;

    // useEffect(() => {
    //     loadEvent(eventName);
    // }, [userState])
    const handleClick = (event) => {
        event.preventDefault()
        let eventData = { name: newEvent.name, distance: newEvent.distance, date: newEvent.date }
        API.saveEvent(userState.email, eventData)
            // console.log(userState.email)

            .then((res) => {
                console.log(res.config.data)
                setNewEvent(res.config.data)
            })
            .catch((err) => console.log(err))
        setModal(false);
        console.log(userState.email)

        console.log("hit")
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value.trim() })
        console.log(e.target.value)
    }

    function loadEvent(eventName) {
        API.getEvents(eventName)
            .then((res) => {
                setEventState(res.data);
            })
    }

    const toggle = () => setModal(true);


    return (
        <>
            <div>
                <h1>Click the day you want to add a event </h1>
                <Calendar
                    className="calendar"
                    onChange={onChange}
                    value={value}
                    onClickDay={toggle}
                />
                {newEvent.name}

            </div>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader>Add Event</ModalHeader>
                <ModalBody>
                    <form>
                        <TextField label="Event Name" name="name" type="text" onChange={handleInputChange} />
                        <TextField label="distance" name="distance" type="text" onChange={handleInputChange} />
                        <TextField label="date" name="date" type="text" onChange={handleInputChange} />
                        <Buttons variant="contained" onClick={handleClick} type="submit">Add</Buttons>

                    </form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default MainCalendar;