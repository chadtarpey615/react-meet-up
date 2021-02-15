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

    saveEvent: function (email) {
        console.log(email)
        return axios.post("/api/workout/", email)
    }

};