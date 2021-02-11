import axios from "axios";

export default {
    saveUser: function (user) {
        console.log(user)

        return axios.post("/api/user", user)
    },
    loginUser: function (user) {
        console.log(user)
        return axios.post("/api/user/login", user)
    }

};