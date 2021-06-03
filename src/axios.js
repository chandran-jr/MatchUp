import axios from "axios";

const instance = axios.create({
    baseURL: 'https://matchupdb.herokuapp.com',
});

export default instance;