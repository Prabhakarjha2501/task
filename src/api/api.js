import axios from 'axios';


const API_URL = 'http://localhost:5006/api';


const axiosInstance = axios.create({
    baseURL: API_URL,
    //timeout: 100000,
    headers:{
        'content-type': 'application/json',
    }
})

// const addUser = async (randomId) => {
//   const user=  axios.get(`https://swapi.dev/api/people/${randomId}`);
//   return user;
// }


module.exports ={
    addUser,
}