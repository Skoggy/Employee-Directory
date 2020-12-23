import axios from "axios";


export default {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?inc=gender,name,email,phone,picture&results=10&nat=US")
    }
}


