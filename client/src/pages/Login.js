import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from "../components/Drawer";
import { UserContext } from "../utils/UserStore";
import API from "../utils/API.js";
import "../components/login.css"
function Login() {
    const [newLogin, setNewLogin] = useState({})
    const [redirect, setRedirect] = useState({ redirect: null });
    const { userState, setUserState } = useContext(UserContext);


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    useEffect(() => {
        if (userState) {
            setRedirect({ redirect: true })
        }
    }, [userState])

    function handleChange(event) {
        const { name, value } = event.target;
        setNewLogin({ ...newLogin, [name]: value.trim() });
        console.log(event.target.value)

    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.loginUser({
            email: newLogin.email,
            password: newLogin.password
        })
            .then(res => {
                setUserState(res.data)
                console.log(res.config.data)

            })

            .catch(err => console.log(err))
    }
    const classes = useStyles();
    if (redirect.redirect) {
        return <Redirect to={"/calendar"} />
    } else {
        return (
            <>
                <TemporaryDrawer />
                <div className="login">
                    <h1>LOG IN </h1>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Email" onChange={handleChange} name="email" />
                        <TextField id="standard-basic" label="Password" onChange={handleChange} name="password" />
                        <Button variant="contained" onClick={handleFormSubmit} type="submit">Default</Button>

                    </form>
                </div>

            </>
        )
    }

}

export default Login;