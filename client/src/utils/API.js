import axios from "axios";

export default {
    saveUser: function (user) {
        console.log(user)

        return axios.post("/api/user", user)
    },
    loginUser: function (user) {
        console.log(user)
        return axios.post("/api/user/login", user)
    },

    saveEvent: function (email, event) {
        console.log(email)
        return axios.post("/api/workout/" + email, event)
    },

    getEvents: function (id) {
        return axios.get("api/workout/" + id)
    }

};