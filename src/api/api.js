import axios from 'axios';


const API_URL = 'http://localhost:5006/api';


const axiosInstance = axios.create({
    baseURL: API_URL,
    //timeout: 100000,
    headers:{
        'content-type': 'application/json',
    }
})

// api is not working due to this reason I have used json file but we will try from side if api will work


// const addUser = async (randomId) => {
//   const user=  axios.get(`https://swapi.dev/api/people/${randomId}`);
//   return user;
// }


module.exports ={
    addUser,
}