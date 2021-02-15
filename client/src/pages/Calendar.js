import React, { useState, useContext } from 'react';
import API from "../utils/API";
import Calendar from 'react-calendar';
import TextField from '@material-ui/core/TextField';
import Buttons from '@material-ui/core/Button';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UserContext } from "../utils/UserStore";
import Form from "../components/Form"
import 'react-calendar/dist/Calendar.css';
import "../components/calendar.css"

function MainCalendar(props) {
    const [value, onChange] = useState(new Date());
    const [newEvent, setNewEvent] = useState({});
    const { userState, setUserState } = useContext(UserContext);
    const [modal, setModal] = useState(false);

    const {
        buttonLabel,
        className
    } = props;

    const handleClick = (event) => {
        event.preventDefault()
        API.saveEvent({
            name: newEvent.name,
            distance: newEvent.distance,
            date: newEvent.date
        })
            .then((res) => {
                console.log(res.config.data)
                setNewEvent(res.config.data)
            })
            .catch((err) => console.log(err))
        setModal(false);
        console.log("hit")
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value.trim() })
        console.log(e.target.value)
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


            </div>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader>Add Event</ModalHeader>
                <ModalBody>
                    <form>
                        <TextField label="Event Name" name="name" type="text" onChange={handleInputChange} />
                        <TextField label="distance" name="distance" type="text" onChange={handleInputChange} />
                        <TextField label="date" name="date" type="text" onChange={handleInputChange} />
                        <Buttons variant="contained" onClick={handleClick} type="submit">Default</Buttons>

                    </form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default MainCalendar;