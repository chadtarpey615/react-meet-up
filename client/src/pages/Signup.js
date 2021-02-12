import React, { useState } from "react";
import API from "../utils/API";
import { Container, Col, Row } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import "../components/signUp.css";


function SignUp() {
    const [newUser, setNewUser] = useState({});

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
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();
    return (
        <Container>
            <div>
                <h1>Sign Up</h1>
            </div>



            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="First Name" onChange={handleInputChange} name="first_name" type="text" />
                <TextField id="standard-basic" label="Last Name" onChange={handleInputChange} name="last_name" type="text" />
                <TextField id="standard-basic" label="Email" onChange={handleInputChange} name="email" type="email" />
                <TextField id="standard-basic" label="Password" onChange={handleInputChange} name="password" type="password" />
                <Button variant="contained" color="primary" onClick={handleFormSubmit} type="submit">Default</Button>

            </form>


        </Container>
    )
}

export default SignUp;