import React, { useState, useContext } from "react";
import TemporaryDrawer from "../components/Drawer";
import { UserContext } from "../utils/UserStore";
import API from "../utils/API.js";
import "../components/login.css"
function Login() {
    const [newLogin, setNewLogin] = useState({})
    const { userState, setUserState } = useContext(UserContext);


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
                console.log(res.data)
            })

            .catch(err => console.log(err))
    }
    return (
        <>
            <TemporaryDrawer />
            <div className="login">
                <h1>LOG IN </h1>
                <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                >
                    Login
                </button>
            </div>
        </>
    )
}

export default Login;