import React, { useState } from "react";
import API from "../utils/API";
import { Container, Col, Row } from "reactstrap";


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
    return (
        <Container>
            <div>
                <h1>Sign Up</h1>
            </div>

            <form>
                <input
                    htmlFor="firstName"
                    placeholder="First Name"
                    name="first_name"
                    type="text"
                    onChange={handleInputChange}
                />
                <input
                    htmlFor="lastName"
                    placeholder="Last Name"
                    name="last_name"
                    type="text"
                    onChange={handleInputChange}

                />
                <input
                    htmlFor="email"
                    placeholder="email"
                    name="email"
                    type="email"
                    onChange={handleInputChange}

                />
                <input
                    htmlFor="password"
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={handleInputChange}

                />
                <button onClick={handleFormSubmit}>Enter</button>
            </form>
        </Container>
    )
}

export default SignUp;