import axios from "axios";

export default {
    saveUser: function (user) {
        console.log(user)
        return axios.post("/api/user", user)
    }

};