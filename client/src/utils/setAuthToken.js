import axios from "axios";
//this file is to check if the token is passed in, if it is, then set it to the main the global header, if not, then delete it from the global header
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
    } else {
        delete axios.defaults.headers.common["x-auth-token"];
    }
};

export default setAuthToken;