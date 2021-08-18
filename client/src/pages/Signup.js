import React, { useState } from "react";
import API from "../utils/API";
import { Container, Col, Row } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import "../components/signUp.css";


function SignUp() {
    const [newUser, setNewUser] = useState({});
    const [darkMode, setDarkMode] = useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value.trim() })
        console.log(e.target.value)
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        API.saveUser({
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
            .then(res => setNewUser(res.data)
            )
            .catch(err => console.log(err))
    }


    const classes = useStyles();
    return (
        <Container className={darkMode ? "dark-section" : "main-section"}>
            <div >
                <h1>Sign Up</h1>
            </div>


            <form className={classes.root} noValidate autoComplete="off">
                <TextField label="First Name" onChange={handleInputChange} name="first_name" type="text" />
                <TextField label="Last Name" onChange={handleInputChange} name="last_name" type="text" />
                <TextField label="Email" onChange={handleInputChange} name="email" type="email" />
                <TextField label="Password" onChange={handleInputChange} name="password" type="password" />
                <Button variant="contained" onClick={handleFormSubmit} type="submit">Sign up</Button>

            </form>
            <button onClick={() => setDarkMode(!darkMode)}>toggle</button>


        </Container>
    )
}

export default SignUp;