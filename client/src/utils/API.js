import axios from "axios";

export default {
    saveUser: function (user) {
        console.log(user)
        return axios.post("/api/users/new", user)
    }

};